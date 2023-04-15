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
                                                    <p>I worked as a Data Engineer at a tech start-up company in China for Remote Working.My employer, <b><a href='https://www.yuanling.com/home/'>Lanehub</a></b>, is building a platform to help professionals finding a fully remote job and help employers to manage their remote employees efficiently. </p>
                                                    <p>
                                                    <li>Built ETL pipleline processing structured financial data and unstructured social media data, saved more than 30% of the time by automating the process</li>
                                                    <li>Assisted in the collection of large and complex data and used Python, Spark and SQL to perform exploratory data analysis, data cleaning, data transformation and data normalization, which increased the data accuracy by 20%</li>
                                                    <li>Cooperated with other departments to deploy machine learning models into production and supervised the business outcomes</li>
  
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
                                                    <h2 >Work  <span>March 2020 - March 2021</span></h2>
                                                    <p>I work as Data Analyst at  <b><a href='https://www.loreal.com/en/china/'>Loreal</a></b> </p>
                                                    <p>
                                                    <li>Design self serving Tableau dashboards which monitor various KPIs and provide the Products & Pricing team with actionable insights</li>
                                                    <li>Conduct data mining in Jupyter Notebook for business problems such as customer purchase behavior anaylsis, marketing lead conversion prediction, with the CRISM-DM strucutre</li>
                                                    <li>Analyzed various experiments to achieve product and process optimization and used visualization tools such as Tableau, Plotly, D3.JS to visualize the data and reported the insights to the management department</li>
                                                    <li>Cooperated with data scientist, data engineers and visualization experts to provide data driven solutions for the firm’s business</li>
        
                                                    </p>
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