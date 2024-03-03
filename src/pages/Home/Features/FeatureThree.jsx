import React from 'react'
import "./Features.css"
import FeaturesUI from '../../../components/FeaturesUI'

const FeatureThree = () => {
    return (
        <div className="feature-three w-[400px] h-[200px] md:w-[300px] md:h-[300px] overflow-y-hidden">

            <FeaturesUI title={"Security first"} paragraph={<>
                We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <span className='text-[#4262FF]'>Trust Center</span> .
            </>} />

        </div>
    )
}

export default FeatureThree