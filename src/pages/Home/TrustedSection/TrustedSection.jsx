import React from 'react'
import "./TrustedSection.css"
import Container from '../../../components/Container'

const TrustedSection = () => {
    return (

        <Container className=" w-[1140px]">
            <section className='md:section my-14 md:mt-15'>
                <div className='flex '>
                    <p className='mx-auto text-[#05003899] inter-text'>Trusted by 45M+ users</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-6 place-items-center justify-center mt-[30px] md:mt-[72px]'>
                    <img src="https://i.ibb.co/vPNpVmr/Walmart-Index-Only-svg.png" alt="Walmart-Index-Only-svg" />
                    <img src="https://i.ibb.co/X8LHh38/cisco-svg.png" alt="cisco-svg" />
                    <img src="https://i.ibb.co/0XVPm4C/Volvo-Index-Only-svg.png" alt="Volvo-Index-Only-svg" />
                    <img src="https://i.ibb.co/VQxKy99/deloitte-svg.png" alt="deloitte-svg" />
                    <img src="https://i.ibb.co/C1DCK9D/okta-svg.png" alt="okta-svg" />
                </div>
            </section>
        </Container>

    )
}

export default TrustedSection