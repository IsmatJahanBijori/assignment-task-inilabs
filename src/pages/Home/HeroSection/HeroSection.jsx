import React from 'react'
import Container from '../../../components/Container'
// 2nd section padding 60px, 160px, 60px, 160px
import "./HeroSection.css"
import HeroLeftUpper from './HeroLeftUpper'
import HeroLeftLower from './HeroLeftLower'
const HeroSection = () => {
    return (
        <Container className="mt-14 ">
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-[80px] gap-14 inter-text '>
                <div className='w-full md:w-[440px]'>
                    <HeroLeftUpper />
                    <HeroLeftLower />
                </div>
                <div>
                    <img src="https://i.ibb.co/yy4GT9q/headerimage-without-text-png.png" className='w-auto md:w-[640px]' alt="" />
                </div>
            </div>
        </Container>
    )
}

export default HeroSection