import React from 'react'
import Courses from './Courses'
import coursesData from './coursesData'

export default function CoursesComponent(){

  const newCoursesData = coursesData.map( item => {
    return (
      <Courses
      item = {item}
      />
    )
  })

  return (
  <div className="the--courses--data">
    {newCoursesData}
  </div>
  )
}