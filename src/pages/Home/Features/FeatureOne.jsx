import React from 'react'
import "./Features.css"
import FeaturesUI from '../../../components/FeaturesUI'

const FeatureOne = () => {
    return (
        <div className="feature-one w-[300px] h-[300px] ">
            {/* <div className=""> */}
            <FeaturesUI title={"Free forever"} paragraph={<>
                Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster.
                See our  <span className="text-[#4262FF]">pricing plans</span> for more features.
            </>} />
            {/* </div> */}
        </div>
    )
}

export default FeatureOne