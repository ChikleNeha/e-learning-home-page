import React from "react";

export default function Nav() {
  return (
    <div className="home--page">
    <h1 id="logo">E-Online.</h1>
    <div className="header">
        <a className="a--tag" href="/">Home</a>
        <a className="a--tag"  href='/'>Category</a>
        <a className="a--tag"  href='/'>Courses</a>
        <a className="a--tag"  href='/'>Blog</a>
        <button>Sign Up</button>
    </div>
  </div>
  );
}
