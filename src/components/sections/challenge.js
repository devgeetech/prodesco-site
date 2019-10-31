import React from "react"

import classes from './challenge.module.css'

import idea from '../../../content/illus/idea4.svg'
import blob from '../../../content/bgillus/blobDGr.svg'
import down from '../../../content/icons/downArrowEd.svg'

const Challenge = () => {
    return(
        <div className={classes.chalWrap}>
            <img src={blob} alt="blob" className={classes.blob} />
            <div className={classes.chalTx}>
                <p className={classes.chalTxHead}>The Challenge</p>
                <p className={classes.chalTxCont}>Design ideas </p>
            </div>
        </div>
    )
}

export default Challenge;