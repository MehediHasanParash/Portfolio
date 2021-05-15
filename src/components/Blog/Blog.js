import React from 'react';
import react from '../../images/react.jpeg';
import jsArray from '../../images/jsArray.jpeg';
import js from '../../images/js.png';
import interview from '../../images/interview.jpg';

const Blog = () => {
    return (
        <div className="about">
             <div className="container">
                <div className="common">
                    <h1 className="main-header">
                    MOST RECENT BLOGS
                    </h1>
                    <div className="main-content">
                        <p>Here are some Blogs I have recently added for you in Medium.com .</p>
                    </div>
                    <div className="commonBorder">

                    </div>
                </div>
                <br/>
                <br/>
            <div className="row projectCustom d-flex">
                <div className="">
                <a href="https://dmmehediparash.medium.com/react-introduction-8c478d8a67f6">  <img className="" src={react} alt="" />
                </a>
                </div>
               <div className="">
               <a href="https://dmmehediparash.medium.com/about-javascript-array-without-array-methods-4576373d671f">  <img className="" src={jsArray} alt="" />
                </a>
               </div>
                <div className="">
                <a href="https://dmmehediparash.medium.com/a-re-introduction-to-javascript-js-tutorial-b863d874117a">  <img className="" src={js} alt="" />
                </a>
                </div>
                <div className="">
                <a href="https://dmmehediparash.medium.com/javascript-interview-question-212066d56ea9">  <img className="" src={interview} alt="" />
                </a>
                </div>

            </div>
            <br />
            <br />
            <br />
            
        </div>
        </div>
    );
};


export default Blog;

