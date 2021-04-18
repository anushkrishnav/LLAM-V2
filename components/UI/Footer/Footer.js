import Link from "next/link"
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <div id="footer">
            <div className={classes.Footer}>
                <span className={classes.HHLogo}><img src={"/assetss/HackerHouse.png"} alt="Hacker House logo" /></span>
                <a href="https://github.com/Jappan07/LLAM" target="_blank"><GitHubIcon style={{ fontSize: "1rem", color: "lightgray", marginTop: "8px" }} /></a>
                <Link href="/about"><a style={{ fontSize: ".6rem", color: "lightgray", textDecoration: "none", marginBottom: "8px" }}>About us</a></Link>
                <h1 style={{ marginBottom: "10px" }}>Created with <FavoriteIcon style={{ fontSize: "18px", position: "relative", top: "3px" }} className={classes.Heart} /> by team HACKER HOUSE</h1>
                <p>Copyright © 2021-3010</p>
            </div>
        </div>
    )
}

export default Footer