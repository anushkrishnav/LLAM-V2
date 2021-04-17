import { useState, useEffect } from "react"
import Toolbar from "../Toolbar/Toolbar"
import Footer from "../UI/Footer/Footer"
import SideDrawer from "../SideDrawer/SideDrawer"

const Layout = (props) => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)
    // const [delayFooter, setDelayFooter] = useState(false)


    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false)
    }

    // useEffect(() => {
    //     if (props.isTrackingPage) {
    //         setDelayFooter(true)
    //     }
    // }, [delayFooter])


    // const delayFooterHandler = () => {
    //     setTimeout(() => {
    //         let delayedFooter = footer
    //         return delayedFooter
    //     }, 5000);
    //     return null
    // }

    return (
        <>
            <Toolbar open={sideDrawerIsVisible} drawerToggler={sideDrawerToggleHandler} />
            <SideDrawer open={sideDrawerIsVisible} close={sideDrawerClosedHandler} />
            <main>{props.children}</main>
            {
                props.isTrackingPage ? null : <Footer />
            }
        </>
    )
}

export default Layout