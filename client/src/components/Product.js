import React from 'react'
import './Product.css'

class Product extends React.Component {
  render () {
    const style = {
      backgroundImage: `url("${this.props.imgUrl}")`
    }

    return (
      <div className="product">
        <div className="product-picture" style={style} ></div>
        <div className="Product-info">
          {this.props.name}
        </div>
      </div>
    )
  }
}

export default Product;