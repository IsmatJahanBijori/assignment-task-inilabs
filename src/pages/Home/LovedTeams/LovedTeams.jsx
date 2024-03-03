import React from 'react'
import Container from '../../../components/Container'
import SectionHeader from '../../../components/SectionHeader'
import Card from '../../../components/Card'

const LovedTeams = () => {
    return (
        <Container className="mt-[120px] bg-[#9195F6] ">
            <section className='inter-text w-[1120px] h-[628px] mx-auto'>
                <SectionHeader title={"Loved by the world's best teams"} className="flex mx-auto place-content-center" />
                <div className='flex flex-row place-content-center mt-8'>
                    <button className="btn-secondary flex place-items-center">See all customer stories
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1 text-[#4262FF]" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                <div className='w-[1140px] bg-[#91eef6] grid grid-cols-1 md:grid-cols-3 gap-5 mt-8'>
                    <div className="text-[#05003899] bg-[#05003814] rounded-lg">
                        <Card title={"https://i.ibb.co/1J1YMjY/vmware-svg.png"} paragraph={"“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”"} img={"https://i.ibb.co/RPHgjD5/Mask-group-1-png.png"} name={"Roxanne Mustafa"} position={"Design Team Lead at VMware"} />
                    </div>
                    <div className="text-[#05003899] bg-[#05003814] rounded-lg">
                        <Card title={"https://i.ibb.co/84sfPDt/Vector.png"} paragraph={"“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”"} img={"https://i.ibb.co/1dzRZVQ/Jane-Docusign-Testimonials-2x-png.png"} name={"Roxanne Mustafa"} position={"Design Team Lead at VMware"} />
                    </div>
                    <div className="text-[#05003899] bg-[#05003814] rounded-lg">
                        <Card title={"https://i.ibb.co/JjzYnvJ/Vector-1.png"} paragraph={"“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”"} img={"https://i.ibb.co/JCHCXvL/Mask-group-png.png"} name={"Roxanne Mustafa"} position={"Design Team Lead at VMware"} />
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default LovedTeams