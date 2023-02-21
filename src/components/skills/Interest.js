import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Pain from '../images/painting.png'
import Travel from '../images/travel.png'

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>What I like😍</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY Interests</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Drawing </h3>
                <img src={Pain} />

              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Traveling</h3>
                <img src={Travel} />
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Surfing</h3>
                <p>Still expolaring... </p>
                <p>Hope can share my surfing photo soonly!</p>
                <p>🏄</p>
                <p>🏄</p>
                <p>🏄</p>
                <p>🏄</p>
                
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;