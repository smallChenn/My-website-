import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I 🧐</h2>
                    <div className={classes.About}>  
                    <p> My name is Bingjie Chen,I am currently pursing my Computer Science master degree at <a target="_blank" href="https://www.york.ac.uk/"><b>University of York</b></a>.</p>
                        <p className={classes.br}> Although I already gain my commerce master degree in 2020, I made up my mind to pursuing a second master degree in computer science. I love coding 👩‍💻 and programming 🤖. 
                       Being a coder is amazing since it allows you to make your computer do whatever you want in order to make your ideas come true. It's like being a painter and having every color in the universe on your palette.</p>
                        
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;