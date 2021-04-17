import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import { NextSeo } from "next-seo"
import PageLoader from "../components/LottieAnimations/pageLoader/PageLoader"

const Tracking = dynamic(() => import('../components/Tracking/Tracking'), {
    ssr: false,
});

const Tracker = () => {
    const [pageLoading, setPageLoading] = useState(false)

    useEffect(() => {
        setPageLoading(true)
        setTimeout(() => {
            setPageLoading(false)
        }, 5000);
    }, [])

    const SEO = {
        title: "Locust Locator",
        description: "track locusts here",

        openGraph: {
            title: "Locust Locator",
            description: "track locusts here",
        },
    }

    return (
        <>
            <NextSeo {...SEO} />
            {pageLoading ?
                (
                    <div id="loading-overlay">
                        <PageLoader />
                        <h1 style={{ fontSize: "calc(8px + 0.8vw)", color: "#fff", textAlign: "center" }}>For best viewing experience use the desktop app.</h1>
                    </div>
                )
                : null}
            <Tracking />
        </>
    )
}

export default Tracker