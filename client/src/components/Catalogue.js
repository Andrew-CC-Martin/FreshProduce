import React from 'react';
import Product from './Product.js'
import CatalogueTitle from './CatalogueTitle'
import App from '../App.js';
import Grid from '@material-ui/core/Grid';
import products from '../products.json';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
// import Axios from '../../node_modules/axios';

class Catalogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      selectedProduct: null,
      term: ''
    }
    this.searchHandler = this.searchHandler.bind(this);
  }
    searchHandler(e){
    this.setState({ term: e.target.value.toLowerCase() })
  }


  componentDidMount() {
    const url = "https://api.myjson.com/bins/7mvru"

    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
         })
        //  console.log(this.state.products)
      })
      .catch(err => {
        console.log(err)
      })
      // this.setState({
      //   products 
      // })
  }

  render () {
    const {term} = this.state
    const filteredProducts = this.state.products.filter(product => product.name.toLowerCase().includes(this.state.term));
    return (
        <div>
          <FormControl  >
            <InputLabel htmlFor="search"></InputLabel>
            <Input
              id="input-with-icon-adornment"
              onChange={this.searchHandler} 
              value={term}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
      </FormControl>
          {/* <form>
            <label htmlFor="search">Search for Product: </label>
            <input type='text' onChange={this.searchHandler} value={term} />
          </form> */}
          <section id="section-b" >
            <CatalogueTitle style={{padding:'2rem'}} title="Fruit" />
            <div className="cards">
              {filteredProducts.map((product) => {
                if(product.group_name === "fruit") {
                  return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
                  
                }
              })}
            </div>
            <CatalogueTitle title="Vegetables" />
            <div className="cards">
              {filteredProducts.map((product) => {
                if(product.group_name === "vegetable") {
                  return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
                }
              })}
            </div>
            <CatalogueTitle title="Meat" />
            <div className="cards">
              {filteredProducts.map((product) => {
                if((product.group_name === "beef") || (product.group_name === "chicken" || (product.group_name === "lamb"))) {
                  return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
                }
              })}
            </div>
            
            <CatalogueTitle title="Seafood" />
            <div className="cards">
              {filteredProducts.map((product) => {
                if(product.group_name === "fish") {
                  return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
                }
              })}
            </div>
          </section>
        </div>
    )
  }
}

export default Catalogue;