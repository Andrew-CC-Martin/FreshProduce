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
    alert(`you added ${this.state.value} ${this.props.name} (${this.props.id}) to the cart`)
    console.log(`product id is ${this.props.id}`)
    App.addToCart(this.props.id, this.state.value)
    // this.props.key
    // cartObject += this.state.value
    event.preventDefault()
  }

  render () {
    const style = {
      backgroundImage: `url("${this.props.imgUrl}")`
    }

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
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
              </Input>
            </FormGroup>
            <input type="submit" value="Add to cart" />
            {/* <Button value={item} onClick={ () => App.addToCart(item) }>Add to Cart</Button> */}
          </Form>
        </div>
      </div>
    )
  }
}

export default Product;