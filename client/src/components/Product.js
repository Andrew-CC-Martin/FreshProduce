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
    this.props.addToCart(this.props.id, this.state.value, this.props.name, this.props.price, this.props.imgUrl, this.props.uom)
    event.preventDefault()
  }

  render () {
    const style = {
      width: 200
    }

    // let numberArray = [...Array(20).keys()].map(i => i + 1)
    // let options = numberArray.map(x => 
    //   (<option key={x}>{x}</option>)
    // )

    return (
      <div className="card">
        <img src={this.props.imgUrl} />
        <div className="card-title">
          {this.props.name}
        </div>
        <div>
          {`Price: $${this.props.price}/${this.props.uom}`}
        </div>
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
            <IconButton type="submit" value="Add to cart" color="secondary" aria-label="Add to shopping cart" onClick={e => this.handleSubmit(e)}>
                <AddShoppingCartIcon />
            </IconButton>
          </CardActions>

      </div>
    )
  }
}

export default Product;