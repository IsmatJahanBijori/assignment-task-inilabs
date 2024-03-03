import React from 'react'
// import { buildWork } from '../utils/BuildWork'

const ContainerBox = ({ boxes }) => {

    return (
        <div className='grid grid-cols-3 md:grid-cols-7 my-8'>
            {/* <div className='flex lg:flex-row my-8'> */}
            {
                boxes.map((box) =>
                    <div key={box.id} className='bg-[#F2F2F2] mx-auto rounded-full container-box'>
                        {box.name}
                    </div>
                )
            }
        </div>
    )
}

export default ContainerBox