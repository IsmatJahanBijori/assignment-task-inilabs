import React from 'react'
import Container from '../../../components/Container'
import SectionHeader from '../../../components/SectionHeader'
import ContainerBox from '../../../components/ContainerBox'
import { buildTeams, listItems } from '../../../utils/container'
import { ContainerListUI } from '../../../components/ContainerTextUI'

const BuildTeams = () => {
    const boxes = buildTeams;
    const lists = listItems
    return (
        <Container className="mt-15" >
            <section className='bg-green-600 mt-[120px] w-[1120px] mx-auto h-[740px] inter-text'>
                <div className='ml-7'>
                    {/* 1 */}
                    <SectionHeader title={"Built for all kinds of teams"} className="mt-[30px]" />
                    {/* 2 */}
                    <ContainerBox boxes={boxes} />
                    {/*  */}
                    <div className='flex flex-col md:flex-row w-[1060px] h-[500px]'>
                        {/* 3. left */}
                        <div className='w-[360px] bg-blue-400'>
                            <div className='px-4 py-7'>
                                {/* upper */}
                                <ContainerListUI lists={lists} />
                                <a class="mt-8 text-[#4262FF] inline-flex items-center ">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>

                                {/* lower */}
                                <div className='mt-[70px] w-[300px] bg-yellow-400'>
                                    <p className='box text-[#05003899]'>Integrate your favorite tools</p>
                                    <div className=' flex flex-row gap-5 mt-5'>

                                        <img src="https://i.ibb.co/8N20c25/Vector.png" alt="Vector" className='size-[25px]' />
                                        <div className='relative'>
                                            <img src="https://i.ibb.co/WWvMJD5/Vector-4.png" alt="Vector-4" className='size-[25px]' />

                                            <div className='flex flex-row absolute top-0 left-0'>
                                                {/* x */}
                                                <img src="https://i.ibb.co/8rJVvTR/Vector-5.png" alt="Vector-5" className='py-[2px]' />
                                                {/* d */}
                                                <img src="https://i.ibb.co/Tb9pCP2/Vector-1.png" alt="Vector-1" className='py-[2px]' />
                                            </div>
                                        </div>
                                        <img src="https://i.ibb.co/0y4srqn/Vector-2.png" alt="Vector-2" className='size-[25px]' />
                                        <img src="https://i.ibb.co/Nx3j2xG/Vector-3.png" alt="Vector-3" className='size-[25px]' />
                                    </div>
                                </div>


                            </div>
                        </div>
                        {/* 3. right */}
                        <div className='flex mx-auto'>
                            <img src="https://i.ibb.co/c6hzPSP/uxdesignwithoutshadow-jpg.png" alt="uxdesignwithoutshadow-jpg" className=' place-content-center' />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default BuildTeams