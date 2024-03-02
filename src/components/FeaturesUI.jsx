import React from 'react'
import "../pages/Home/Features/Features.css"
const FeaturesUI = ({ title, paragraph }) => {
    return (
        <>
            <h2 className="feature-title inter-text">{title}</h2>
            <p className="inter-text text-[#05003899] text-justify">{paragraph}</p>
        </>
    )
}

export default FeaturesUI