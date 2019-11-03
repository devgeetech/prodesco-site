import React from "react"

import classes from './prize.module.css'

import win from '../../../content/illus/win2.svg'
import wave from '../../../content/bgillus/wave1.svg'

const Prize = () => {
    return(
        <div className={classes.prPWrap}>
            <img src={wave} alt="wave" className={classes.wave} />
            <div className={classes.prPWrap2}>
                <img src={win} alt="Winners" className={classes.prPIm}/>
                <div className={classes.prPTx}>
                    <p className={classes.prPTxHead}>Prizes &amp; Goodies</p>
                    <div className={classes.prPTxCont}>
                        <ul>
                            <li>All participants get Autodesk assured gifts and participation certificates.</li>
                            <br/>
                            <li>Participants who pass First level screening gets exclusive access to Bootcamps set up by Autodesk experts</li>
                            <br/>
                            <li>The winners of the event get financial support to convert their prototype into a full-scale product</li>
                        </ul>
                        {/* <p>All participants get Autodesk assured gifts and participation certificates</p>
                        <p>Participants who pass First level screening gets exclusive access to Bootcamps set up by Autodesk experts</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prize;