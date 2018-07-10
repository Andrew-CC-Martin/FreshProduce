import React from 'react'
import './Product.css'

class Product extends React.Component {
  render () {
    // const products = [{id: 1, imgUrl: "https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg"}]


    const style = {
      backgroundImage: `url("${this.props.imgUrl}")`
    }

    return (
      <div className="product">
        <div className="product-picture" style={style} ></div>
        <div className="Product-info">
          hiiiiiii {this.props.name}
        </div>
      </div>
    )
  }
}

export default Product;