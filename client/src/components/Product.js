import React from 'react'
import './Product.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';

import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import App from '../App'

class Product extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {value: 0}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const value = +event.target.value
    if(isNaN(value) || value < 0 || value%1 !== 0  ) {
      this.setState({value: this.state.value})
    } else {
      this.setState({value})

    }
  }

  handleSubmit(event) {
    alert(`you added ${this.state.value} ${this.props.name} to the cart`)
    console.log(`product id is ${this.props.id}`)
    App.addToCart(this.props.id, this.state.value, this.props.name, this.props.price, this.props.imgUrl)
    event.preventDefault()
  }

  render () {
    // const style = {
    //   backgroundImage: `url("${this.props.imgUrl}")`
    // }

    const style = {
      width: 200
    }

    let numberArray = [...Array(20).keys()].map(i => i + 1)
    let options = numberArray.map(x => 
      (<option key={x}>{x}</option>)
    )

    return (
      <div className="product">
        <Card>
          <CardMedia>
          {/* <div className="product-picture"></div> */}
            <img src={this.props.imgUrl} style={style}/>
            {/* <br /> */}
          </CardMedia>
          <CardContent>
            <div className="Product-info">
              {this.props.name}
            </div>
            <div>
              {`Price: $${this.props.price}/${this.props.uom}`}
            </div>
          </CardContent>
          <br></br>
          <CardActions>
            <FormControl onSubmit={this.handleSubmit}>
              <TextField
                  label="Select Your Quantity"
                  id="simple-start-adornment"
                  value= {this.state.value}
                  onChange={this.handleChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{this.props.uom}</InputAdornment>,
                  }}
              />
            </FormControl>  
            <IconButton type="submit" value="Add to cart" color="primary" aria-label="Add to shopping cart" onClick={e => this.handleSubmit(e)}>
                <AddShoppingCartIcon />
            </IconButton>
  
            {/* <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input type="select" name="select" value={this.state.value} onChange={this.handleChange} >
                  {options}
                </Input>
              </FormGroup>
              <input type="submit" value="Add to cart" />
            </Form> */}
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Product;