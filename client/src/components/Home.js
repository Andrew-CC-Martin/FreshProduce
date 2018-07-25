import React, { Component, Fragment } from 'react';
import './Home.css';
import Catalogue from './Catalogue';
import Specials from './Specials';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia';
import { Link, Route } from 'react-router-dom'
import fruitImage from '../images/jakub-kapusnak-296131-unsplash-min.jpg'
import vegImage from '../images/sharon-pittaway-562631-unsplash-min.jpg'
import meatImage from '../images/markus-spiske-680194-unsplash-min.jpg'
import seafoodImage from '../images/erwan-hesry-209418-unsplash-min.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() { 
    return (
      <div className="Products">
        <header id="showcase" className="grid">
          <div className="bg-image"></div>
          <div className="content-wrap">
            <h1> Welcome to Food Forum </h1>
            <p className="p-open"> We are a locally owned, family run business. With over 60 years experience in the food industry, from farming to retail, we know a bit about good produce.  We pride ourselves on sourcing only the best quality seasonal produce from the finest growers and producers our nation has to offer. </p>
            <a href="#section-b" className="btn"> See our Specials</a>
          </div>
        </header>
        <main id="main">
          <section id="section-a">
            <div className="content-wrap">
              <h2 className="content-title"> What we offer </h2>
                <div className="btnlink">
                  <div className="button--container">
                    <Link to='/catalogue/fruit' className="button--link" >FRUITS</Link>
                    <img src={ fruitImage} className='button--image' />
                  </div>
                  <div className="button--container">
                    <Link to='/catalogue/vegetable' className="button--link" >VEGETABLES</Link>
                    <img src={ vegImage} className='button--image' />
                  </div>
                  <div className="button--container">
                    <Link to='/catalogue/meat' className="button--link" >MEATS</Link>
                    <img src={ meatImage} className='button--image' />
                  </div>
                  <div className="button--container">
                    <Link to='/catalogue/seafood' className="button--link" >SEAFOOD</Link>
                    <img src={ seafoodImage} className='button--image' />
                  </div>
                </div>
              <div className="content-text"> </div>
            </div>
          </section>

          <section id="section-b">
            <h2> Our Current Specials </h2> 
            
          <div className="cards">
            <Specials addToCart={this.props.addToCart} />
          </div>
          </section> 
          <section id="section-c">
            <div className="box">
              <h2 className="content-title">Our Story</h2>
              <p className="content-box">For three generations Food Forum have been passionately supplying the people of Canberra with exceptional produce. From humble beginnings freighting oranges directly from 
              the farm in Corbie Hill back in 1952 our family-focused company has carefully 
              crafted an expanded product range.</p>
            </div> 
          </section>
        </main>
      </div>
    
  )
  }
}
   
  export default Home;