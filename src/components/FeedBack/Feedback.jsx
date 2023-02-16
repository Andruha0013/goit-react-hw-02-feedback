import React, { Component } from "react";

import FeedBackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class Feedback extends Component{
/* основний варіант 
    constructor(){
        super();

        this.state={
            vouts:  {
                good:   0,
                bad:    0,
                neutral:0,
            },
        }
    }
    */
   //бабл- переформатує цей варіант в основний
    state={
        vouts:  {
            good:   0,
            bad:    0,
            neutral:0,
        },
    }
    //------------------------------------------------------
    leaveFeedback=(event)=>{
        this.setState(prevState=>{
            switch(event.target.name){
                case "goodBtn":
                    return {
                        vouts:  {
                            good:       prevState.vouts.good+1,
                            bad:        prevState.vouts.bad,
                            neutral:    prevState.vouts.neutral,
                        },
                    };
                //break;
                case "neutralBtn":
                    return {
                        vouts:  {
                            good:       prevState.vouts.good,
                            bad:        prevState.vouts.bad,
                            neutral:    prevState.vouts.neutral+1,
                        },
                    };
               // break;
                case "badBtn":
                    return {
                        vouts:  {
                            good:       prevState.vouts.good,
                            bad:        prevState.vouts.bad+1,
                            neutral:    prevState.vouts.neutral,
                        },
                    };
                //break;
                default: return {
                    vouts:  {
                        good:       prevState.vouts.good,
                        bad:        prevState.vouts.bad,
                        neutral:    prevState.vouts.neutral,
                    }};
                //break;
            }
        });
    }
//------------------------------------------------------------------------------------
    countTotalFeedback(){
        return this.state.vouts.good+this.state.vouts.neutral+this.state.vouts.bad;
    }
//------------------------------------------------------------------------------------
    countPositiveFeedbackPercentage(){
        if(this.countTotalFeedback()>0){
            return Math.round(this.state.vouts.good*100/(this.countTotalFeedback()));
        }
        else{
            return 0;
        }
        
    }
    checkRecords(){
        if(this.countTotalFeedback()>0){
            return true;
        }
        else{
            return false;
        }
    }
//------------------------------------------------------------------------------------
    render(){
        return (
            <div className="feedback">
                <Section title={"Please leave feedback"}>
                    <FeedBackOptions onLeaveFeedback={this.leaveFeedback} />
                </Section>
                <Section title={"Statistics"}>
                {this.checkRecords() 
                    ?<Statistics
                        good={this.state.vouts.good}
                        neutral={this.state.vouts.neutral}
                        bad={this.state.vouts.bad}
                        total={this.countTotalFeedback()}
                        percent={this.countPositiveFeedbackPercentage()}
                    />
                    :<Notification message="There is no feedback"/>
                }
                </Section>
            </div>
        );
    }
}

export default  Feedback;