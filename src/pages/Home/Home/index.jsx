import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import TrustedSection from '../TrustedSection/TrustedSection'
import Features from '../Features/Features'
import WorkingEnvironment from '../WorkingEnvironment/WorkingEnvironment'
import ConnectTools from '../ConnectTools/ConnectTools'
import Gallery from '../Gallery/Gallery'
import BuildWork from '../BuildWork/BuildWork'
import BuildTeams from '../BuildTeams/BuildTeams'
import LovedTeams from '../LovedTeams/LovedTeams'


const Home = () => {
    return (
        <>
            <HeroSection />
            <TrustedSection />
            <Features />
            <WorkingEnvironment />
            <ConnectTools />
            <Gallery />
            <BuildWork />
            <BuildTeams />
            <LovedTeams />
        </>
    )
}

export default Home
