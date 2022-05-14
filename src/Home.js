import React from "react";
import Nav from './Nav'
import data from './data'
import Div from './Div'

export default function Home() {

  const newData = data.map( item => {
    return (
      <Div 
      item = {item}
      />
    )
  })

  return (
    <div>
        <div className="home">
            <Nav />
            <div className="home--body">
                <img src="https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg?t=st=1652269943~exp=1652270543~hmac=6f11da7f46beb6efc992f56f7864c9357437b47510f2c84b31beef666261832a&w=740" width="690px"/>
                <div  className="image--text1">
                    <div className="investigating--text--block">
                        <h1>Investing in</h1> 
                        <h1>Knowledge and</h1> 
                        <h1>Your future</h1>
                    </div>
                    <p>Our e-learning program has been developed to be a vehicle of delivering multimedia learning solution to students </p>
                    <button>Contact</button>
                </div>
            </div>
            <h4>Browse top essential career courses</h4>
            <Div />
        </div>
    </div>

    
  );
}
