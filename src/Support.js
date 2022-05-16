import React from 'react'

export default function Support() {
  return (
    <div className="the--whole--sign--up--component">
      <div className="the--courses--text">
        <h3 id="h3--tag--heading--text">Quick Support</h3>
        <h1 id="h1--tag--heading--text">Get In Touch</h1>
        <p>Enter Learning is an online learning platform that enables students to revise, practice and prepare for tests in an intuitive and measurable.</p>
      </div>
      <div className="sign--up">
        <img src="https://img.freepik.com/free-vector/concept-script-coding-programming-php-python-javascript-other-languages_180816-218.jpg?w=740" width="550px"/>
        <div className="inputs--and--button">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input id="comment--input" type="text" placeholder="Comment" />
          <button>Send Now</button>
        </div>
      </div>
    </div>
  )
}