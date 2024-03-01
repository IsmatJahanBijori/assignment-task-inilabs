import React from 'react'

const Container = ({ children, className }) => {
    // xl:max-w-5xl 2xl:max-w-6xl 
    return (
        <div className={`w-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto px-10 sm:px-0 ${className}`}>{children}</div>
    )
}

export default Container