import React from "react"

import classes from './evprocess.module.css'

import proto from '../../../content/illus/proto.svg'
import blob from '../../../content/bgillus/blob4DGr.svg'

const EvProcess = () => {
    return(
        <div className={classes.evPWrap}>
            <img src={blob} alt="blob3" className={classes.blob} />
            <img src={proto} alt="Idea Prototype" className={classes.evPIm}/>
            <div className={classes.evPTx}>
                <p className={classes.evPTxHead}>Event Process</p>
                <div className={classes.evPTxCont}>
                    <p className={classes.evPTxContH}>First Level Submission</p>
                    <p className={classes.evPTxContC}>
                        The participants submit their designs online.<br/>
                        The designs will be evaluated by Autodesk Experts.
                    </p>

                    <p className={classes.evPTxContH}>Boot Camps</p>
                    <p className={classes.evPTxContC}>
                        After the first level screening the competitors will be 
                        given one week advanced training by the Autodesk officials.
                    </p>

                    <p className={classes.evPTxContH}>Second Level Submission</p>
                    <p className={classes.evPTxContC}>
                        The designs from the competitors are collected and is evaluated by the Autodesk experts.<br/>
                        20 submissions from school category and 20 submissions from collge/ polytechnic
                        category are shortlisted.
                    </p>

                    <p className={classes.evPTxContH}>Third Level Submission</p>
                    <p className={classes.evPTxContC}>
                        The shortlisted participants are required to present their designs 
                        Infront of an expert panel of judges which includes judges from Autodesk and industry.<br/>
                        The 3 finalists are selected and they must present their design during the finale of the competition.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EvProcess;