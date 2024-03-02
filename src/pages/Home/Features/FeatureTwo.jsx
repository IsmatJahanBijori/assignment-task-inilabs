import React from 'react'
import "./Features.css"
import FeaturesUI from '../../../components/FeaturesUI'

const FeatureTwo = () => {
    return (
        <div className="feature-two w-[300px] h-[300px] ">

            <FeaturesUI title={"Easy integrations"} paragraph={
                <>
                    Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <span className="text-[#4262FF]">Marketplace</span>
                </>} />
        </div>
    )
}

export default FeatureTwo