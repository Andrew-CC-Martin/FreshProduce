import React from 'react';
import Product from './Product.js'
import CatalogueTitle from './CatalogueTitle'
import './Catalogue.css'
// import Axios from '../../node_modules/axios';

class Catalogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      selectedProduct: null
    }
  }

  componentDidMount() {
    const url = "https://rawgit.com/stemshell/ed489a4e0fe8703fab32fb31f2099654/raw/e549c4db0ffb64715b72c69ff43937d61e4c46a5/products.json"
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
         })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    console.dir(this.state.products)

    return (
        <div>
          <CatalogueTitle title="Fruit" />
          <div className="catalogue">
            {this.state.products.map((product) => {
              if(product.group_name === "fruit") {
                return <Product key={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} />
              }
            })}
          </div>

          <CatalogueTitle title="Vegetables" />
          <div className="catalogue">
            {this.state.products.map((product) => {
              if(product.group_name === "vegetable") {
                return <Product key={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} />
              }
            })}
          </div>

          <CatalogueTitle title="Meat" />
          <div className="catalogue">
            {this.state.products.map((product) => {
              if((product.group_name === "beef") || (product.group_name === "chicken")) {
                return <Product key={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} />
              }
            })}
          </div>

          <CatalogueTitle title="Seafood" />
          <div className="catalogue">
            {this.state.products.map((product) => {
              if(product.group_name === "fish") {
                return <Product key={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} />
              }
            })}
          </div>
        </div>
    )
  }
}

export default Catalogue;