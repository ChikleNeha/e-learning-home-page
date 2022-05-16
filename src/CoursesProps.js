import React from 'react'

export default function CoursesProps(props){
  return (
    <div id="courses--nav--component--outer--div">
    <div className="courses--nav--component">
      <img src={props.item.Image} width="340px" id="the--course--image"/>
      <div>
        <h1>{props.item.name}</h1>
        <p>{props.item.description}</p>
      </div>
    </div>
    </div>
  )
}