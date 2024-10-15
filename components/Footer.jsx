import React from 'react'
import Socials from './Socials';
import SparklesText from "@/components/ui/sparkles-text"

const Footer = () => {
    return <footer className='bg-secondary py-8 noto-sans-jp'>
        <div className="container mx-auto">
            <div className='flex flex-col items-center justify-between'>
                {/***socials media */}
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'/>
            {/**copyright */}
            <SparklesText text="Copyright &copy; Rene MAKOULE. All right reserved ."
                    className="text-xs text-muted-foreground"
                  />
            </div>
        </div>
    </footer>;
};
export default Footer;