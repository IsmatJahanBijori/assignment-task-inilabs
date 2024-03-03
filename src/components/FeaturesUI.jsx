import React from 'react'
import "../pages/Home/Features/Features.css"

const FeaturesUI = ({ title, paragraph, className }) => {
    return (
        <div className={`${className}`}>
            <h2 className="feature-title inter-text overflow-y-hidden">{title}</h2>
            <p className="inter-text text-[#05003899] text-justify overflow-y-hidden mt-3 md:mt-0">{paragraph}</p>
        </div>
    )
}

export default FeaturesUI