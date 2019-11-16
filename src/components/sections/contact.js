import React from "react"

import classes from './contact.module.css'

import blob from '../../../content/bgillus/blobDGr.svg'


const Contact = () => {
    return(
        <div className={classes.chalWrap} id="contact-section">
            <div className={classes.chalTx}>
                <p className={classes.chalTxHead}>Contact Us</p>
                <p className={classes.chalTxCont}>We'd love to answer your questions! Contact our district coordinators</p>
            </div>
            <div className={classes.chalSing}>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>JOFIN THOMAS</p>
                    <p className={classes.chalSplitCont}>REGIONAL MANAGER, AUTODESK VINSYS</p>
                    <p className={classes.chalSplitContPh}>9847816401</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>JOBIN JOY</p>
                    <p className={classes.chalSplitCont}>FACULTY, PROVIDENCE COLLEGE OF ENG.</p>
                    <p className={classes.chalSplitContPh}>9947374969</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>AAYUSH NAIR</p>
                    <p className={classes.chalSplitCont}>AUTODESK STUDENT AMBASSADOR</p>
                    <p className={classes.chalSplitContPh}>9656485839</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>AKHIL KRISHNAN</p>
                    <p className={classes.chalSplitCont}>FUSION 360 CERTIFIED USER</p>
                    <p className={classes.chalSplitContPh}>8301859886</p>
                </div>
            </div>
            <p className={classes.chalDist}>District Coordinators</p>
            <div className={classes.chalSplit}>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>KASARGOD</p>
                    <p className={classes.chalSplitCont}>ANU MOHAN</p>
                    <p className={classes.chalSplitContPh}>8075358440</p>
                    <p className={classes.chalSplitHead}>KANNUR</p>
                    <p className={classes.chalSplitCont}>AFREED C P</p>
                    <p className={classes.chalSplitContPh}>8593997127</p>
                    <p className={classes.chalSplitHead}>WAYANAD</p>
                    <p className={classes.chalSplitCont}>VISHAL P K</p>
                    <p className={classes.chalSplitContPh}>9207132812</p>
                    <p className={classes.chalSplitHead}>KOZHIKODE</p>
                    <p className={classes.chalSplitCont}>JOEL BIJU GEORGE</p>
                    <p className={classes.chalSplitContPh}>8078290466</p>
                    <p className={classes.chalSplitHead}>MALAPPURAM</p>
                    <p className={classes.chalSplitCont}>ANANTHU R</p>
                    <p className={classes.chalSplitContPh}>8281184583</p>
                   
                </div>

                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>PALAKKAD</p>
                    <p className={classes.chalSplitCont}>SHARATH R SHANKAR</p>
                    <p className={classes.chalSplitContPh}>8943892463</p>
                    <p className={classes.chalSplitHead}>THRISSUR</p>
                    <p className={classes.chalSplitCont}>JOEL GEE ROY</p>
                    <p className={classes.chalSplitContPh}>9645171179</p>
                    <p className={classes.chalSplitHead}>ERNAKULAM</p>
                    <p className={classes.chalSplitCont}>SOORAJ S</p>
                    <p className={classes.chalSplitContPh}>8129284264</p>
                    <p className={classes.chalSplitHead}>IDUKKI</p>
                    <p className={classes.chalSplitCont}>RITHIK GEORGE CHERIAN</p>
                    <p className={classes.chalSplitContPh}>9544441884</p>
                    <p className={classes.chalSplitHead}>KOTTAYAM</p>
                    <p className={classes.chalSplitCont}>JAI JACOB</p>
                    <p className={classes.chalSplitContPh}>9447803240</p>
                    
                
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>ALAPPUZHA</p>
                    <p className={classes.chalSplitCont}>ABIN OOMMEN</p>
                    <p className={classes.chalSplitContPh}>8281072987</p>
                    <p className={classes.chalSplitHead}>PATHANAMTHITTA</p>
                    <p className={classes.chalSplitCont}>AKHIL KRISHNA</p>
                    <p className={classes.chalSplitContPh}>8075599369</p>
                    <p className={classes.chalSplitHead}>KOLLAM</p>
                    <p className={classes.chalSplitCont}>NIDHIN S PRASAD</p>
                    <p className={classes.chalSplitContPh}>9447186233</p>
                    <p className={classes.chalSplitHead}>THIRUVANANTHAPURAM</p>
                    <p className={classes.chalSplitCont}>VISHAKH VENUGOPAL</p>
                    <p className={classes.chalSplitContPh}>9496390121</p>
                
                </div>
            </div>
        </div>
    )
}

export default Contact;