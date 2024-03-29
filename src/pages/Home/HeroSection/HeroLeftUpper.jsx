import React from 'react'
import SectionHeader from '../../../components/SectionHeader'

const HeroLeftUpper = () => {
    return (
        <>
            <SectionHeader title={"Take ideas from better to best"} />
            <p className='md:w-[428px] text-[#050038B8] text-lg line-[24px] mt-4'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
            <input type="text" placeholder='Enter your work email' className='rounded-full banner-input w-full md:w-[440px]' />
            <button className="btn-primary flex place-items-center mt-[3px] w-full md:w-[440px]">
                <div className='mx-auto flex flex-row place-items-center text-xs md:text-base'>
                    Sign up free
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </div>
            </button>
            <p className='text-[#05003866] text-sm mt-[2px] '>Collaborate with your team within minutes</p>
        </>
    )
}

export default HeroLeftUpper