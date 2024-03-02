import React from 'react'
import "../pages/Home/Features/Features.css"
import "../pages/Home/BuildWork/BuildWork.css"

const ContainerTextUI = ({ title, paragraph }) => {
    return (
        <>
            <h2 className="box text-[#050038] inter-text">{title}</h2>
            <p className="box inter-text text-[#050038B2] text-justify">{paragraph}</p>
        </>
    )
}

export default ContainerTextUI