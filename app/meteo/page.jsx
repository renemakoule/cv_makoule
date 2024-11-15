"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Sun, Moon, Cloud, CloudRain, CloudSnow, CloudLightning, Loader2 } from 'lucide-react'
import { BorderBeam } from "@/components/ui/border-beam"

const API_KEY = 'bb593f6f7222cfcd6a340835217020b9' // Remplacez par votre clé API OpenWeatherMap

// Composant pour l'animation de pluie
const RainDrop = ({ delay }) => (
  <motion.div
    className="absolute top-0 w-0.5 h-0.5 bg-blue-400 rounded-full"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: '100vh', opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      delay: delay,
      ease: "linear"
    }}
    style={{
      left: `${Math.random() * 100}%`,
    }}
  />
)

const RainAnimation = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(100)].map((_, i) => (
      <RainDrop key={i} delay={Math.random() * 1} />
    ))}
  </div>
)

export default function WeatherInterface() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [isDaytime, setIsDaytime] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState({ city: '', neighborhood: '', country: '', latitude: null, longitude: null })
  const [guessTemp, setGuessTemp] = useState('')
  const [gameResult, setGameResult] = useState(null)
  const [isGameOpen, setIsGameOpen] = useState(false)

  const fetchWeather = async (latitude, longitude) => {
    setLoading(true)
    setError(null)
    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      ])
      
      if (!currentResponse.ok || !forecastResponse.ok) throw new Error('Données météo introuvables')
      
      const currentData = await currentResponse.json()
      const forecastData = await forecastResponse.json()

      setWeather({
        condition: currentData.weather[0].main.toLowerCase(),
        temperature: Math.round(currentData.main.temp),
        humidity: currentData.main.humidity,
        windSpeed: Math.round(currentData.wind.speed * 3.6), // Convert m/s to km/h
        description: currentData.weather[0].description
      })

      const dailyForecast = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 5)
      setForecast(dailyForecast.map(day => ({
        date: new Date(day.dt * 1000),
        condition: day.weather[0].main.toLowerCase(),
        temperature: Math.round(day.main.temp),
        description: day.weather[0].description
      })))

      setLocation({ 
        city: currentData.name,
        neighborhood: currentData.name, 
        country: currentData.sys.country, 
        latitude: latitude.toFixed(4), 
        longitude: longitude.toFixed(4) 
      })
    } catch (err) {
      setError(err.message || 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      setIsDaytime(now.getHours() >= 6 && now.getHours() < 20)
    }, 1000)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        fetchWeather(latitude, longitude)
      },
      (err) => {
        setError('Impossible de récupérer votre localisation')
        setLoading(false)
      }
    )

    const weatherUpdateTimer = setInterval(() => {
      if (location.latitude && location.longitude) {
        fetchWeather(location.latitude, location.longitude)
      }
    }, 300000)

    return () => {
      clearInterval(timer)
      clearInterval(weatherUpdateTimer)
    }
  }, [])

  const getWeatherIcon = (condition, isDaytime = true) => {
    switch (condition) {
      case 'clear': return isDaytime ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-blue-300" />
      case 'clouds': return <Cloud className="h-6 w-6 text-gray-500" />
      case 'rain': return <CloudRain className="h-6 w-6 text-blue-500" />
      case 'snow': return <CloudSnow className="h-6 w-6 text-white" />
      case 'thunderstorm': return <CloudLightning className="h-6 w-6 text-yellow-400" />
      default: return <Sun className="h-6 w-6 text-yellow-500" />
    }
  }

  const getBackgroundClass = () => {
    if (!weather) return 'bg-gray-100'
    if (!isDaytime) return 'bg-gradient-to-b from-blue-900 to-black'
    switch (weather.condition) {
      case 'clear': return 'bg-gradient-to-b from-blue-400 to-blue-200'
      case 'clouds': return 'bg-gradient-to-b from-gray-400 to-gray-200'
      case 'rain': return 'bg-gradient-to-b from-blue-700 to-blue-500'
      case 'snow': return 'bg-gradient-to-b from-blue-100 to-white'
      case 'thunderstorm': return 'bg-gradient-to-b from-gray-700 to-gray-500'
      default: return 'bg-gradient-to-b from-blue-400 to-blue-200'
    }
  }

  const handleGuess = () => {
    const guess = parseInt(guessTemp)
    if (isNaN(guess)) {
      setGameResult("Veuillez entrer un nombre valide.")
      return
    }
    const diff = Math.abs(guess - weather.temperature)
    if (diff === 0) {
      setGameResult("Bravo ! Vous avez deviné la température exacte !")
    } else if (diff <= 2) {
      setGameResult("Très proche ! Vous y êtes presque.")
    } else if (diff <= 5) {
      setGameResult("Pas mal ! Vous n'êtes pas loin.")
    } else {
      setGameResult("Essayez encore, vous pouvez faire mieux !")
    }
    setGuessTemp('')
  }

  return (
    <motion.div 
      className={`min-h-screen flex items-center justify-center ${getBackgroundClass()} transition-colors duration-1000 relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {weather && weather.condition === 'rain' && <RainAnimation />}
      <Card className="w-full max-w-[350px] md:max-w-md lg:max-w-lg bg-gradient-to-tr from-purple-700 via-cyan-300 backdrop-blur-md border-black/30 relative z-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Météo en temps réel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <motion.div 
              className="text-4xl font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentTime.toLocaleTimeString()}
            </motion.div>
            <div className="text-xl">
              {currentTime.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            {loading && <Loader2 className="h-8 w-8 animate-spin" />}
            {error && <div className="text-red-500">{error}</div>}
            <AnimatePresence>
              {weather && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {getWeatherIcon(weather.condition, isDaytime)}
                    <div className="text-3xl font-bold">{weather.temperature}°C</div>
                  </motion.div>
                  <div className="text-xl capitalize">{weather.description}</div>
                  <div className="text-lg">{location.city}, {location.neighborhood}, {location.country}</div>
                  <div className="text-sm">
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span>Humidité: {weather.humidity}%</span>
                    <span>Vent: {weather.windSpeed} km/h</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Forecast Section */}
            <div className="mt-6 w-full">
              <h3 className="flex items-center justify-center text-lg font-semibold mb-2">Prévisions pour les 5 prochains jours</h3>
              <div className="flex justify-between">
                {forecast.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-sm">{day.date.toLocaleDateString('fr-FR', { weekday: 'short' })}</div>
                    {getWeatherIcon(day.condition)}
                    <div className="text-sm font-semibold">{day.temperature}°C</div>
                    <div className="text-xs text-center">{day.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Game Section */}
            <Dialog open={isGameOpen} onOpenChange={setIsGameOpen}>
              <DialogTrigger asChild>
                <Button className="mt-6">Jouer au jeu de devinette</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Jeu : Devinez la température !</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center p-4 bg-purple-400 rounded-lg">
                  <Input
                    type="number"
                    placeholder="Entrez votre estimation"
                    value={guessTemp}
                    onChange={(e) => setGuessTemp(e.target.value)}
                    className="mb-2"
                  />
                  <Button onClick={handleGuess}>Deviner</Button>
                  <AnimatePresence>
                    {gameResult && (
                      <motion.p 
                        className="mt-2 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {gameResult}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
        <BorderBeam size={250} duration={12} delay={9} />
      </Card>
    </motion.div>
  )
}