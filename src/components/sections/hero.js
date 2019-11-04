import React from "react"

import classes from './hero.module.css'

import idea from '../../../content/illus/idea4.svg'
import blob from '../../../content/bgillus/blob2DGr.svg'
import down from '../../../content/icons/downArrowEd.svg'

const Hero = () => {
    return(
        <div className={classes.heroWrap}>
            <img src={blob} alt="blob" className={classes.blob} />
            <img src={idea} alt="Idea hero" className={classes.heroIm}/>
            <div className={classes.heroTx}>
                <p className={classes.heroTxHead}>Providence Design <br/>Contest</p>
                <p className={classes.heroTxCont}>State level competition to unearth the inventors of tomorrow</p>
                <a href="/#challenge-section" rel="noopener noreferrer" target="_blank" className={classes.rgBtn}>
                    Register
                </a>
                
            </div>
            

            <img src={down} alt="Down Arrow" className={classes.downArr} />
        </div>
    )
}

export default Hero;