import React, { Component } from 'react';
import './Home.css';
import Specials from './Specials';
const Home = (props) => {

  
    return (
      <div className="Products">
        <div className="homebanner">
        <h1>Fresh Produce</h1>
        </div>
        <div className="AboutUs">
          <h2> About Us </h2>
          <div className="aboutbox">
            <h2> Our Story </h2>
            <p> For three generations Food Forum have been passionately supplying the people of Canberra with 
              exceptional produce. From humble beginnings freighting oranges directly from 
              the farm in Corbie Hill back in 1952 our family-focused company has carefully 
              crafted an expanded product range. </p>
          </div>
          <div className="aboutbox">
            <h2> Our Story </h2>
            <p> For three generations Food Forum have been passionately supplying the people of Canberra with 
              exceptional produce. From humble beginnings freighting oranges directly from 
              the farm in Corbie Hill back in 1952 our family-focused company has carefully 
              crafted an expanded product range. </p>
          </div>
          <div className="aboutbox">
            <h2> Our Story </h2>
            <p> For three generations Food Forum have been passionately supplying the people of Canberra with 
              exceptional produce. From humble beginnings freighting oranges directly from 
              the farm in Corbie Hill back in 1952 our family-focused company has carefully 
              crafted an expanded product range. </p>
          </div>
          <div className="aboutbox">
            <h2> Our Story </h2>
            <p> For three generations Food Forum have been passionately supplying the people of Canberra with 
              exceptional produce. From humble beginnings freighting oranges directly from 
              the farm in Corbie Hill back in 1952 our family-focused company has carefully 
              crafted an expanded product range. </p>
          </div>
        </div>
        <div>
          <Specials />
          
        </div>
      </div>
    
  )
  }
   
  export default Home;