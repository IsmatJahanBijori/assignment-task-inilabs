import React from 'react'


const Card = ({ title, paragraph, img, name, position }) => {
    return (
        <div className='p-3'>
            <img src={title} alt="" className='mt-7' />
            <p className='mt-16'>{paragraph}</p>
            <div className='flex flex-row gap-4 mt-4'>
                <img src={img} alt="" />
                <div className='flex flex-col  '>
                    <p>{name}</p>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default Card