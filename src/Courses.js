import React from 'react'

export default function Courses(props) {
  return (
    <div className="courses">
      <div className="the--image">
        <img src={props.item.Image} width="340px"/>
      </div>
      {props.item.name}
      {props.item.description}
    </div>
  )
}