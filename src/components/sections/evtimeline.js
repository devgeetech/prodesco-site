import React from "react"

import classes from './evtimeline.module.css'



const Evtimeline = () => {
    return(
        <div className={classes.chalWrap}>
            <div className={classes.chalTx}>
                <p className={classes.chalTxHead}>Event Timeline</p>
                <p className={classes.chalTxCont}>This will be our event timeline happening all over kerala according to the schedule</p>
            </div>
            <div className={classes.chalSplit}>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>Event</p>
                    <p className={classes.chalSplitCont}>Event Announcement</p>
                    <p className={classes.chalSplitCont}>First level Submission start date</p>
                    <p className={classes.chalSplitCont}>First level submission end date</p>
                    <p className={classes.chalSplitCont}>Boot Camp Windowt</p>
                    <p className={classes.chalSplitCont}>Second level Submission start date</p>
                    <p className={classes.chalSplitCont}>Submission End Date</p>
                    <p className={classes.chalSplitCont}>Finale &amp; Conference</p>
                    <p className={classes.chalSplitCont}>Winners “Make the Design” window</p>
                    
                </div>

                <div className={classes.chalSplitLine}></div>

                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>Dates</p>
                    <p className={classes.chalSplitCont}>1st November 2019</p>
                    <p className={classes.chalSplitCont}>6th November 2019</p>
                    <p className={classes.chalSplitCont}>30th November 2019</p>
                    <p className={classes.chalSplitCont}>02th December – 18th January 2020</p>
                    <p className={classes.chalSplitCont}>02nd December 2019</p>
                    <p className={classes.chalSplitCont}>18th January 2020</p>
                    <p className={classes.chalSplitCont}>07 &amp; 08 ,February 2020</p>
                    <p className={classes.chalSplitCont}>February 2020 – August 2020</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Evtimeline;