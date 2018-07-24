import React from 'react';
import Product from './Product.js'
import CatalogueTitle from './CatalogueTitle'
import App from '../App.js';
import Grid from '@material-ui/core/Grid';
import products from '../products.json'
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
    // const url = "https://rawgit.com/stemshell/ed489a4e0fe8703fab32fb31f2099654/raw/f231961cbd3e78f08530d8066d750a6364f21152/products.json"
    // const url = "../products.json"
    // console.log(products);
    
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       products: data
    //      })
    //     //  console.log(this.state.products)
    //   })
    //   .catch(err => {
    //     console.log(err)
      // })
      this.setState({
        products 
      })
  }

  render () {
    const {term} = this.state
    const filteredProducts = this.state.products.filter(product => product.name.toLowerCase().includes(this.state.term));
    return (
        <div>
          <form>
            <label htmlFor="search">Search for Product: </label>
            <input type='text' onChange={this.searchHandler} value={term} />
          </form>
          <CatalogueTitle title="Fruit" />
          <div className="catalogue">
            {filteredProducts.map((product) => {
              if(product.group_name === "fruit") {
                return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
                
              }
            })}
          </div>

          <CatalogueTitle title="Vegetables" />
          <div className="catalogue">
            {filteredProducts.map((product) => {
              if(product.group_name === "vegetable") {
                return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
              }
            })}
          </div>

          <CatalogueTitle title="Meat" />
          <div className="catalogue">
            {filteredProducts.map((product) => {
              if((product.group_name === "beef") || (product.group_name === "chicken")) {
                return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
              }
            })}
          </div>

          <CatalogueTitle title="Seafood" />
          <div className="catalogue">
            {filteredProducts.map((product) => {
              if(product.group_name === "fish") {
                return <Product key={product.id} id={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} addToCart={this.props.addToCart}/>
              }
            })}
          </div>
        </div>
    )
  }
}

export default Catalogue;