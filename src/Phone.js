import React from 'react'

export default function Phone(props) {
  return (
    <div className="phone--props--div">
      <img src={props.item.Image} width="40px" height="40px"/>
      <div className="phone--props--div--text">
        <h1>{props.item.heading}</h1>
        <p>{props.item.paragraph}</p>
      </div>
    </div>
  )
}