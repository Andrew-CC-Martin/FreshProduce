import React from 'react';
import Product from './Product.js'
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
    const url = "https://rawgit.com/stemshell/ed489a4e0fe8703fab32fb31f2099654/raw/2bdde1a768c4563548e7193c3ccbcd65fc0920d7/products.json"
    
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
        <div className="catalogue">
          {this.state.products.map((product) => {
            return <Product key={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} />
          })}
        </div>
    )
  }
}

export default Catalogue;