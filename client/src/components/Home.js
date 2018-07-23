import React, { Component } from 'react';
import './Home.css';
import Specials from './Specials';
import Grid from '@material-ui/core/Grid'
const Home = (props) => {

  
    return (
      <div className="Products">
        <header id="showcase" className="grid">
          <div className="bg-image"></div>
          <div className="content-wrap">
            <h1> Welcome to Food Forum </h1>
            <p> We are a locally owned, family run business. With over 60 years experience in the food industry, from farming to retail, we know a bit about good produce.  We pride ourselves on sourcing only the best quality seasonal produce from the finest growers and producers our nation has to offer. </p>
            <a href="#section-b" class="btn"> See our Specials</a>
          </div>
        </header>
        <main id="main">
          <section id="section-a">
            <div className="content-wrap">
              <h2 className="content-title"> What we offer </h2>
              <div class="content-text"> </div>
            </div>
          </section>

          <section id="section-b">
            <h2> Our Current Specials </h2> 
          <div className="card">
            <Specials />
            <Specials />
            <Specials />

          </div>
          </section> 
          <section id="section-c">
            <div className="box">
              <h2 class="content-title">Our Story</h2>
              <p>For three generations Food Forum have been passionately supplying the people of Canberra with 
              exceptional produce. From humble beginnings freighting oranges directly from 
              the farm in Corbie Hill back in 1952 our family-focused company has carefully 
              crafted an expanded product range.</p>
            </div> 
          </section>
          <section id="section-c">
            <div className="box">
              <h2 class="content-title">Our Story</h2>
              <p>>For three generations Food Forum have been passionately supplying the people of Canberra with 
              exceptional produce. From humble beginnings freighting oranges directly from 
              the farm in Corbie Hill back in 1952 our family-focused company has carefully 
              crafted an expanded product range</p>
            </div> 
          </section>
        </main>
      </div>
    
  )
  }
   
  export default Home;