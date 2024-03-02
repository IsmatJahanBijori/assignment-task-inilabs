import React from 'react'
import SectionHeader from './SectionHeader'

const Text = ({ title, paragraph }) => {
    return (

        <div class="flex flex-col inter-text place-content-center w-[550px] bg-green-400 h-[264px]">
            <SectionHeader title={title} />
            <p class="text-[#05003899]">{paragraph}</p>
            <a class="mt-3 text-[#4262FF] inline-flex items-center "><span className='flex flex-col'>Learn More <hr className='w-20 text-[#4262FF]' /></span>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>

    )
}

export default Text