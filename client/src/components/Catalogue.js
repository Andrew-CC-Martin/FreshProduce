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
    const url = "https://rawgit.com/stemshell/ed489a4e0fe8703fab32fb31f2099654/raw/ef90ab56ae7cc8f6a4302cfc6b55a32da94c5c74/products.json"
    
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
    console.log(this.state.products)
    console.dir(this.state.products)
    // const products = [{id: 1, imgUrl: "https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg"}]
    // const products = [{id: 2, name: "banana", imgUrl: "https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg"}]

    return (
      <div>
      <h1>Hello World</h1>
      <div className="products">
        {this.state.products.map((product) => {
          // return <Product key={this.state.product.id} imgUrl={product.imgUrl} name={product.name}/>
        })}
      </div>
      </div>
    )
  }
}

export default Catalogue;