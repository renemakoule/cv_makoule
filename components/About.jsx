import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import SparklesText from "@/components/ui/sparkles-text"


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Rene Boris MAKOULE',

    },
    {
        icon: <PhoneCall size={20} />,
        text: '+237 651 727 932',

    },
    {
        icon: <MailIcon size={20} />,
        text: 'renemakoule@gmail.com',

    },
    {
        icon: <GraduationCap size={20} />,
        text: 'technology license:Administrator System & Reseau',

    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Douala-CAMEROON',

    }
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'technology license:Administrator System & Reseau',
                years: '2023-2024',
            },
            {
                university: 'DUT:Computer Engineering',
                years: '2022-2023',
            }
        ]
    },

    {
        title: 'experience',
        data: [
            {
                company: 'Minato.ai',
                role: 'Web Developer',
                years: '2024 - current',
            },
            {
                company: 'Enoe Cameroon SA',
                role: 'data analysis intern in Excel',
                years: 'March 2023 - May 2023',
            }
        ]
    }

]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Front-end Developer'
            },
            {
                name: 'React Next.js'
            },
            {
                name: 'Python'
            },
            {
                name: 'System Administration'
            },
            {
                name: 'Data Analysis in Excel'
            },
            
        ]
    },

    {
        title: 'tools',
        data: [
            {
                
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/next.svg'
            },
            {
                imgPath: '/about/react.svg'
            },
            {
                imgPath: '/about/python.svg'
            },
            {
                imgPath: '/about/jupyter.svg'
            },
            {
                imgPath: '/about/excel.svg'
            },
            
        ]
    }

]

const About = () => {
    const getDate = (arr, title) => {
        return arr.find((item)=> item.title === title)
    }

  return (
    <section className='relative xl:h-[560px] pb-12 py-6 noto-sans-jp'>
        <div className="container mx-auto">
        <SparklesText text="About me"
                    className="section-title mb-8 xl:mb-16 text-center mx-auto"
                  />
            <div className='flex flex-col xl:flex-row'>
            {/**image */}
            <div className='hidden xl:flex flex-1 relative ml-10 rounded-full'>
            <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark
                                w-[365px] h-[365px] bg-no-repeat relative
            ' imgSrc='/developer.jpg' />
             </div>
        {/**tabs */}
              <div className='flex-1'>
                <Tabs defaultValue='personal'>
                    <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none border-b-blue-400'>
                        <TabsTrigger className='w-full xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                        <TabsTrigger className='w-full xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                        <TabsTrigger className='w-full xl:w-auto' value='skill'>Skills</TabsTrigger>
                    </TabsList>
                    {/**Tabs content */}
                    <div className='text-lg mt-12 xl:mt-8'>

                        {/**Personal */}
                        <TabsContent value='personal'>
                            <div className='text-center xl:text-left'>
                                <h3 className='h3 mb-4'>Unmatched Service Quality</h3>
                                <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                
                                Autonomous and enthusiastic, 
                                I master web development tools and system administration and 
                                I seek to take on new challenges within a dynamic organization.
                                </p>
                                {/** icons */}
                                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                    {infoData.map((item, index) => {
                                        return (
                                            <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                                            <div className='text-primary'>{item.icon}</div>
                                            <div>{item.text}</div>
                                        </div>
                                        ) 
                                    })}
                                </div>
                                {/** languages */}
                                <div className='flex flex-col gap-y-2'>
                                    <div className='text-primary'>Language Skill</div>
                                    <div className="border-b border-border"></div>
                                    <div>French, English(beginner)</div>
                                </div>
                            </div>
                        </TabsContent>

                        {/** qualification */}
                        <TabsContent value='qualifications'>
                            <div>
                                <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                {/** experience and education wrapper */}
                                <div className='grid md:grid-cols-2 gap-y-8'>
                                    {/**experience */}
                                    <div className='flex flex-col gap-y-6'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                            <Briefcase />
                                            <h4 className='capitalize font-medium'>
                                                {getDate(qualificationData, 'experience').title}
                                            </h4>
                                        </div>
                                        {/**List */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getDate(qualificationData, 'experience').data.map((item, index) => {
                                                const {company, role, years} = item
                                                return(
                                                    <div key={index} className='flex gap-x-8 group'>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>

                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                            <div className='text-base font-medium'>{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/**education */}
                                    <div className='flex flex-col gap-y-6'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                            <GraduationCap size={28} />
                                            <h4 className='capitalize font-medium'>
                                                {getDate(qualificationData, 'education').title}
                                            </h4>
                                        </div>
                                        {/**List */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getDate(qualificationData, 'education').data.map((item, index) => {
                                                const {university, qualification, years} = item
                                                return(
                                                    <div key={index} className='flex gap-x-8 group'>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>

                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                            <div className='text-base font-medium'>{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </TabsContent>

                        {/** skills */}
                        <TabsContent value='skill'>
                            <div className='text-center xl:text-left'>
                              <h3 className='h3 mb-8'>What I Use Everyday</h3>
                              {/**skills */}
                              <div className='mb-16'>
                                <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                <div className='border-b border-border mb-4'></div>
                                {/***skill list */}
                                <div>
                                    {getDate(skillData, 'skills').data.map((item, index) => {
                                        const {name} = item
                                        return(
                                            <div key={index} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'>
                                                <div className='font-medium'>{name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                              </div>
                              {/**tools */}
                              <div>
                                <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                <div className='border-b border-border mb-4'></div>
                                {/**tool list */}
                                <div className='flex gap-x-8 justify-center xl:justify-start'>
                                    {getDate(skillData, 'tools').data.map((item, index) => {
                                        const {imgPath} = item
                                        return(
                                            <div key={index}>
                                                <Image src={imgPath} width={48} height={48} alt='' priority />
                                            </div>
                                            
                                        )
                                    })}
                                </div>
                              </div>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
              </div>
        </div>
        </div>
        <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] w-full skew-y-12",
        )}
      />
    </section>
  )
}

export default About