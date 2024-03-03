import React from 'react'
import Container from '../../../components/Container'
import SectionHeader from '../../../components/SectionHeader'
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'
import FeatureThree from './FeatureThree'
import Button from '../../../components/Button'

const Features = () => {
    return (
        <Container className=" md:w-[1140px]  inter-text">
            <section className='mt-[28px] w-[700px] md:w-auto'>
                <div className='bg-[#FFD02F] w-[100px] h-[23px] top-[5px] left-[250px] md:left-[700px] rotate-[10deg] overflow-y-hidden rounded-full flex place-items-center font-bold relative'>
                    <p className='text-[#090909] text-[7px] absolute px-2'>YOUR IDEA START HERE</p>
                </div>
                <SectionHeader title={"Collaborate without constraints"} className={"text-center flex md:block mx-auto lg:w-[500px] mt-5 md:my-5"} />
                <div className='flex flex-col md:place-items-center lg:flex-row lg:ml-20 '>

                    <FeatureOne />
                    <FeatureTwo />
                    <FeatureThree />
                </div>
                <div className='flex mx-auto mt-10 place-content-center'>
                    <Button />
                </div>
            </section>

        </Container>
    )
}

export default Features;