import React from 'react'

export default function Teachers(props) {
  return (
    <div className="teachers--img--name">
      <img src={props.item.Image} width="200px"/>
      <h6>{props.item.name}</h6>
    </div>
  )
}