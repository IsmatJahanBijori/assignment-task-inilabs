import React from 'react'

const SectionHeader = ({ title, className }) => {
    return (
        <h1 className={`text-5xl font-bold overflow-y-hidden text-[#050038] ${className}`}>{title}</h1>
    )
}

export default SectionHeader