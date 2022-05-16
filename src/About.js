import React from 'react'
import teachersData from './teachersData'
import Teachers from './Teachers'

export default function About(){

  const newTeachersData = teachersData.map( item => {
    return (
      <Teachers 
        item = {item}
        />
    )
  })
  return (
    <div>
            <div className="about--us--page">
            <div>
              <img id="the--vector--small--image" src="https://cdni.iconscout.com/illustration/premium/thumb/developer-doing-coding-4375571-3639052.png" width="200px"/>
                <h1>About Us</h1>
                <p>We perform a complete life-cycle of instructional design services, online learning, eLearning solutions development, blended learning, mobile learning, curriculum development, and facilitation. </p>
            </div>
            <img src="https://img.freepik.com/free-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-857.jpg?w=740" />
          </div>
          <div>
          <div className="the--div2">
            <div className="the--div2--text">
              <h3>Learn With Us</h3>
              <h1>Where Students Meet The</h1>
              <h1>Best Tutors</h1>
              <p> learning experience with the best online tutors · Our Teachers focus on one student at a time · An online classroom designed to accelerate learning.</p>
              <button className="view--all-courses">View all Courses</button>
            </div>
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1652595756~exp=1652596356~hmac=d35c4691a13f34a543096992625cf99d4366cd23451244ffddd7c41b0f6f2438&w=740" />
          </div>
          <div className="the--courses--text">
              <h3 id="h3--tag--heading--text">Meet the Teachers</h3>
              <h1 id="h1--tag--heading--text">Teaching Is Our Passion</h1>
              <p>E-learning has become an invaluable resource to educators and classroom teachers, harnessing a new model of knowledge sharing wherein students possess the tools to learn at their own pace. This student-focused approach is unique in that students now share in their educational direction, maximizing both teaching resources and time.</p>
            </div>
        </div>
        <div className="teachers">
          {newTeachersData}
        </div>

    </div>
    
  )
}