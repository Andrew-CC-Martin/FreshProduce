import React from 'react'
import './Product.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import App from '../App'

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 1}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`you added ${this.state.value} ${this.props.name} to the cart`)
    console.log(`product id is ${this.props.id}`)
    App.addToCart(this.props.id, this.state.value, this.props.name, this.props.price, this.props.imgUrl)
    event.preventDefault()
  }

  render () {
    const style = {
      backgroundImage: `url("${this.props.imgUrl}")`
    }

    let numberArray = [...Array(20).keys()].map(i => i + 1)
    let options = numberArray.map(x => 
      (<option key={x}>{x}</option>)
    )

    return (
      <div className="product">
        <div className="product-picture" style={style} ></div>
        <div className="Product-info">
          {this.props.name}
          <br></br>
          {`Price: $${this.props.price}/${this.props.uom}`}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input type="select" name="select" value={this.state.value} onChange={this.handleChange} >
                {options}
              </Input>
            </FormGroup>
            <input type="submit" value="Add to cart" />
          </Form>
        </div>
      </div>
    )
  }
}

export default Product;