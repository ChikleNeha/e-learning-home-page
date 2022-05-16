import React from "react";
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className="home--page">
    <h1 id="logo">E-Online.</h1>
    <div className="header">
        <Link className="a--tag" to='/' activeStyle>Home </Link>
        <Link className="a--tag"  to='/CoursesComponent' activeStyle>Courses</Link>
        <Link className="a--tag"  to='/About' activeStyle>About</Link>
        <Link className="a--tag"  to='/Contact' activeStyle>Contact</Link>
        <button>Sign Up</button>
    </div>
  </div>
  );
}
