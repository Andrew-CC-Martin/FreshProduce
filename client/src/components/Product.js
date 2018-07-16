import React from 'react'
import './Product.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class Product extends React.Component {
  addToCart = item => {
    let input = document.forms[0].querySelectorAll('input')
    console.log(document.forms[0])
    // console.log(input)
    // localStorage.cart = JSON.stringify(Array.from(document.forms[0].querySelectorAll('input')).map((el) => el.value))

    // if(cartObject)
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
          <Form>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
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
            <Button onClick={ this.addToCart }>Add to Cart</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Product;