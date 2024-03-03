import React from 'react'
import Container from '../../../components/Container'
import SectionHeader from '../../../components/SectionHeader'
import { buildWork } from '../../../utils/container'
import ContainerBox from '../../../components/ContainerBox'
import ContainerTextUI from '../../../components/ContainerTextUI'

const BuildWork = () => {
    // TODO : height soraite hobe
    const boxes = buildWork
    // console.log(boxes.map(box => box.id === id))
    return (
        <Container className="mt-15">
            <section className='bg-orange-600  w-[1120px] mx-auto h-[740px] inter-text'>
                <div className='ml-7'>
                    {/* 1 */}
                    <SectionHeader title={"Built for the way you work"} className="mt-[30px]" />
                    {/* 2 */}
                    <ContainerBox boxes={boxes} />
                    {/*  */}
                    <div className='flex flex-col md:flex-row w-[1060px] h-[500px]'>
                        {/* 3. left */}
                        <div className='w-[360px] bg-blue-400'>
                            <div className='px-4 py-7'>
                                <ContainerTextUI title={"Brainstorming"} paragraph={"Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on."} />
                                <a class=" text-[#4262FF] inline-flex items-center mt-8">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* 3. right */}
                        <div className='flex mx-auto'>
                            <img src="https://i.ibb.co/gVTdn2p/Brainstormwithoutshadow-jpg.png" alt="Brainstormwithoutshadow-jpg" className=' place-content-center' />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default BuildWork