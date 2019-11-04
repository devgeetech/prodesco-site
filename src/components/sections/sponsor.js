import React from "react"

import classes from './sponsor.module.css'

import prc from '../../../content/logos/prc1.png'
import vinsys from '../../../content/logos/vinsys.png'
import autodesk from '../../../content/logos/autodesk.png'
import nss from '../../../content/logos/nss.png'

const Sponsor = () => {
    return(
        <div className={classes.spWrap}>
            {/* <img src={blob} alt="blob3" className={classes.blob} /> */}
            <div className={classes.spTx}>
                <p className={classes.spTxHead}>In Association With</p>
            </div>
            <div className={classes.spImgs}>
                <img src={autodesk} alt="Autodesk"/>
                <img src={vinsys} alt="Vinsys"/>
                <img src={prc} alt="PRC"/>
                <img src={nss} alt="NSS" className={classes.hiddenLogo}/>
            </div>
        </div>
    )
}

export default Sponsor;