import React from 'react'
import "../pages/Home/Features/Features.css"
import "../pages/Home/BuildWork/BuildWork.css"
import { AiOutlineCheck } from "react-icons/ai";


const ContainerTextUI = ({ title, paragraph }) => {
    return (
        <>
            <h2 className="box text-[#050038] ">{title}</h2>
            <p className="box text-[#050038B2] text-justify mt-[26px]">{paragraph}</p>
        </>
    )
}

export default ContainerTextUI;



export const ContainerListUI = ({ lists }) => {
    return (
        <>
            {
                lists.map(list =>
                    <div key={list.id} className='flex flex-row place-items-center gap-1.5'>
                        <AiOutlineCheck className='size-3' />
                        <p className='box text-[#050038]'>{list.label}</p>
                    </div>)
            }
        </>
    )
}