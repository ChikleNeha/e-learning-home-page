import React from 'react'

export default function Div2() {
  return (
  <div>
    <div className="the--div2">
      <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1652595756~exp=1652596356~hmac=d35c4691a13f34a543096992625cf99d4366cd23451244ffddd7c41b0f6f2438&w=740" />
      <div className="the--div2--text">
        <h3>Learn With Us</h3>
        <h1>Where Students Meet The</h1>
        <h1>Best Tutors</h1>
        <p> learning experience with the best online tutors · Our Teachers focus on one student at a time · An online classroom designed to accelerate learning.</p>
        <button className="view--all-courses">View all Courses</button>
      </div>
    </div>
    <div className="the--courses--text">
        <h3 id="h3--tag--heading--text">Our Course</h3>
        <h1 id="h1--tag--heading--text">Discover Our Popular Courses</h1>
        <p> Instead of ranking courses by reviews, we rank by the number of students who enrolled in the course. In some cases, the best online classes based on reviews are also the courses with the most enrollments. In other cases, courses with large enrollments only have average reviews.</p>
      </div>
  </div>
  )
}