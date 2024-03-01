import React from 'react'

const HeroLeftLower = () => {
    return (
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
    )
}

export default HeroLeftLower