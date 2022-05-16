import React from 'react'
import Phone from './Phone'
import contactData from './contactData'
import Support from './Support'

export default function Contact(){

  const newContactData = contactData.map( item => {
    return (
      <Phone 
         item = {item}
         />
    )
  })
  return (
    <div>
                 <div className="home--body">
                    <img src="https://img.freepik.com/free-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-898.jpg?w=740" width="690px"/>
                    <div  className="image--text1">
                        <div className="investigating--text--block">
                            <h1 id="contact--us">Contact Us</h1> 
                        </div>
                        <p>Our e-learning program has been developed to be a vehicle of delivering multimedia learning solution to students </p>
                        <button>Contact</button>
                    </div>
                </div>
                <div className="new--contact--data--div">
                  {newContactData}
                </div>
                <Support />
    </div>
    
  )
}