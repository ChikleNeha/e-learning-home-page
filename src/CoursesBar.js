import React from 'react'

export default function CoursesBar(props) {
  return (
    <div className="course--grid">
        <div className="course--box">
          <div className="course--box--content">
            <img className="course--logo" src={props.item.image} width="32px"/>
            <p>{props.item.p1}</p>
            <p>{props.item.p2}</p>
            <hr/>
          </div> 
       </div>
    </div>
  )
}