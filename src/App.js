import React from "react";
import "./style.css";
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import CoursesComponent from './CoursesComponent'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/CoursesComponent' element={<CoursesComponent/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
