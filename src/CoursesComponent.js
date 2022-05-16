import React from 'react'
import coursesData from './coursesData'
import CoursesProps from './CoursesProps'

export default function CoursesComponent(props){

  const nData = coursesData.map( item => {
    return (
      <CoursesProps
        item = {item}
        />
    )
  })
  return (
    <div>
      {nData}
    </div>
  )
}