import React from 'react'
import Container from '../../../components/Container'
import SectionHeader from '../../../components/SectionHeader'
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'
import FeatureThree from './FeatureThree'
import Button from '../../../components/Button'

const Features = () => {
    return (
        <Container className="w-[1140px] bg-red-500  inter-text">
            <section className='section mt-[28px]'>
                <div className='bg-[#FFD02F] w-[100px] h-[23px] top-[-5px] left-[550px] rotate-[10deg] overflow-y-hidden rounded-full flex place-items-center font-bold relative'>
                    <p className='text-[#090909] text-[7px] absolute px-2'>YOUR IDEA START HERE</p>
                </div>
                <SectionHeader title={"Collaborate without constraints"} className={"text-center mx-auto w-[500px]"} />
                <div className='grid grid-cols-1 md:grid-cols-3 bg-green-400'>
                    <FeatureOne />
                    <FeatureTwo />
                    <FeatureThree />
                </div>
                <div className='flex mx-auto place-content-center'>
                    <Button />
                </div>
            </section>

        </Container>
    )
}

export default Features;