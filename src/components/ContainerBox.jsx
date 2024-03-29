import React from 'react'
// import { buildWork } from '../utils/BuildWork'

const ContainerBox = ({ boxes }) => {

    return (
        // <div className='grid grid-cols-3 md:grid-cols-7 my-8'>
        <div className='flex flex-col lg:flex-row my-8'>
            {
                boxes.map((box) =>
                    <div key={box.id} className='bg-[#F2F2F2] my-2 w-1/3 md:w-1/2 lg:w-auto lg:mx-auto rounded-full container-box'>
                        {box.name}
                    </div>
                )
            }
        </div>
    )
}

export default ContainerBox