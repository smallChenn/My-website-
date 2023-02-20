import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';


class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Education  <span>March 2022-Present</span></h2>
                                                    <p>I am currently studying Computer Science at <b><a href="https://www.york.ac.uk/">University of York</a></b></p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 > Work <span>April 2021- December 2021</span></h2>
                                                    <p>I worked as a business intelligence engineer at a tech start-up company in China for Remote Working. </p>
                                                    <p>
                                                    My employer, <b><a href='https://www.yuanling.com/home/'>Lanehub</a></b>, is building a platform to help professionals finding a fully remote job and help employers to manage their remote employees efficiently. At Lanehub, I am responsible to design and develop core business metrics, create insightful automated dashboards and data visualization to track them and extract useful business and product insights.
                                                    </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Work  <span>January 2020 - March 2021</span></h2>
                                                    <p>I work as Business Analyst at  <b><a href='https://www.loreal.com/en/china/'>Loreal</a></b> </p>
                                                    <p>I am responsible for mine terabytes of data, derive actionable insights, and translate complex outputs or algorithms into simple conclusions that will empower others to take actions to win consumers.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdSchool   />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Education <span>Feburary 2018- December 2019</span></h2>
                                                    <p>I compeleted my master degree of commerce at <b><a href='https://www.mq.edu.au/'>Macquarie University</a></b></p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;