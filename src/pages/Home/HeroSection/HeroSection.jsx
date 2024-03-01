import React from 'react'
import Container from '../../../components/Container'
// 2nd section padding 60px, 160px, 60px, 160px
import "./HeroSection.css"
const HeroSection = () => {
    return (
        <Container className="mt-14">
            <div className='grid grid-cols-1 md:grid-cols-2 ml-[90px] gap-14 inter-text '>
                <div className='w-[440px]'>
                    <h1 className='text-5xl font-bold overflow-y-hidden text-[#050038]'>Take ideas from better to best</h1>
                    <p className='w-[428px] text-[#050038B8] text-lg line-[24px] mt-4'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                    <input type="text" placeholder='Enter your work email' className='rounded-full banner-input' />
                    <button className="btn-primary flex place-items-center mt-[3px] w-[440px]">
                        <div className='mx-auto flex flex-row place-items-center'>
                            Sign up free
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </button>
                    <p className='text-[#05003866] text-sm mt-[2px] '>Collaborate with your team within minutes</p>



                    <div className='bg-[#F5F5F7] p-[14px] mt-14 grid grid-cols-2 w-[350px]'>
                        {/* left side */}

                        <div className='flex flex-col'>
                            <div className='flex flex-row place-items-center gap-[6px]'>
                                <img src="https://i.ibb.co/FHtwXW7/Frame-1.png" alt="Frame-1" />
                                <img src="https://i.ibb.co/FHtwXW7/Frame-1.png" alt="Frame-1" />
                                <img src="https://i.ibb.co/FHtwXW7/Frame-1.png" alt="Frame-1" />
                                <img src="https://i.ibb.co/FHtwXW7/Frame-1.png" alt="Frame-1" />
                                <img src="https://i.ibb.co/mq73pZW/Frame-2.png" alt="Frame-2" />
                            </div>
                            <p className='text-[#050038] text-xs mt-1 block'>Based on 5149+ reviews:</p>
                        </div>
                        {/* right side */}

                        <div className='grid grid-cols-3 place-items-center gap-3'>
                            <img src="https://i.ibb.co/2Ybc8Pt/Frame.png" alt="Google" />
                            <img src="https://i.ibb.co/gS3G0CR/Vector.png" alt="" />
                            <img src="https://i.ibb.co/4PYkjG9/Vector-1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/yy4GT9q/headerimage-without-text-png.png" className='w-[640px]' alt="" />
                </div>
            </div>
        </Container>
    )
}

export default HeroSection