import React from 'react'
import "./Features.css"
import FeaturesUI from '../../../components/FeaturesUI'

const FeatureOne = () => {
    return (
        <div className="feature-one w-[400px] h-[200px] md:w-[300px] md:h-[300px] overflow-y-hidden ">
            {/* <div className=""> */}
            <FeaturesUI title={"Free forever"} paragraph={<>
                Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster.
                See our  <span className="text-[#4262FF]">pricing plans</span> for more features.
            </>} className="text-xs md:text-2xl " />
            {/* </div> */}
        </div>
    )
}

export default FeatureOne