import React from "react";
import data from './data'
import Div from './Div'
import Div2 from './Div2'
import Courses from './Courses'
import coursesData from './coursesData'
import Benefits from './Benefits'
import Div6 from './Div6'

export default function Home() {

  const newData = data.map( item => {
    return (
      <Div 
      item = {item}
      />
    )
  })

  const newCoursesData = coursesData.map( item => {
    return (
      <Courses
      item = {item}
      />
    )
  })

  

  return (
    <div>
        <div className="home">
            <div className="home--body">
                <img src="https://img.freepik.com/free-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-898.jpg?w=740" width="690px"/>
                <div  className="image--text1">
                    <div className="investigating--text--block">
                        <h1>Investing in</h1> 
                        <h1>Knowledge and</h1> 
                        <h1>Your future</h1>
                    </div>
                    <p>Our e-learning program has been developed to be a vehicle of delivering multimedia learning solution to students </p>
                    <button>Contact</button>
                </div>
            </div>
            <div className="new--data">
               {newData}
            </div>
            <Div2 />
            <div className="courses--data--outer--div">
              <div className="the--courses--data">
                {newCoursesData}
              </div>
            </div>
            <Benefits />
            <Div6 />
        </div>
    </div>

    
  );
}
