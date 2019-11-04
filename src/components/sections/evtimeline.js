import React from "react"

import classes from './evtimeline.module.css'

import calender from '../../../content/illus/calender2.svg'



const Evtimeline = () => {
    return(
        <div className={classes.chalWrap} id="timeline-section">
            <img src={calender} alt="Events" className={classes.evIm}/>
            <div className={classes.timCont}>
                <div className={classes.chalTx}>
                    <p className={classes.chalTxHead}>Event Timeline</p>
                    <p className={classes.chalTxCont}>Here is the detailed schedule of the event. Keep track of all the submission deadlines!</p>
                </div>

                <table>
                    <tr>
                        <th className={classes.chalSplitHead}>Event</th>
                        <th className={classes.chalSplitHead}>Dates</th>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>Event Announcement</td>
                        <td>1st November 2019</td>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>First level Submission start date</td>
                        <td>6th November 2019</td>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>First level submission end date</td>
                        <td>30th November 2019</td>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>Boot Camp Window</td>
                        <td>2nd January - 18th January 2020</td>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>Second level Submission start date</td>
                        <td>2nd December 2019</td>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>Submission End Date</td>
                        <td>18th January 2020</td>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>Finale &amp; Conference</td>
                        <td>7th &amp; 8th, February 2020</td>
                    </tr>
                    <tr className={classes.chalSplitCont}>
                        <td>Winners “Make the Design” window</td>
                        <td>February 2020 – August 2020</td>
                    </tr>
                </table>

                {/* <div className={classes.chalSplit}>
                    <div className={classes.chalSplitSec}>
                        <p className={classes.chalSplitHead}>Event</p>
                        <p className={classes.chalSplitCont}>Event Announcement</p>
                        <p className={classes.chalSplitCont}>First level Submission start date</p>
                        <p className={classes.chalSplitCont}>First level submission end date</p>
                        <p className={classes.chalSplitCont}>Boot Camp Window</p>
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
                        <p className={classes.chalSplitCont}>2nd January - 18 January 2020</p>
                        <p className={classes.chalSplitCont}>2nd December 2019</p>
                        <p className={classes.chalSplitCont}>18th January 2020</p>
                        <p className={classes.chalSplitCont}>7th &amp; 8th, February 2020</p>
                        <p className={classes.chalSplitCont}>February 2020 – August 2020</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Evtimeline;