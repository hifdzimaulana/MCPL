import React from 'react'
import Footer from '../component/Footer'
import Headers from '../component/Header'
import Hero from '../component/Hero'
import Special from '../component/Special'
import landingPageJson from '../json/landingPage.json'

export default function LandingPage() {
    return (
        <>
            <Headers />
            <Hero />
            <Special data={landingPageJson.special} />
            <Footer />
        </>
    )
}