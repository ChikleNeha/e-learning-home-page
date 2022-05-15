import React from 'react'

export default function Courses(props) {
  return (
    <div className="courses">
      <div className="the--image">
        <img src={props.item.Image} width="340px" id="the--course--image"/>
      </div>
      <h1>{props.item.name}</h1>
      <p>{props.item.description}</p>
    </div>
  )
}