import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import CachedIcon from '@material-ui/icons/Cached'
import DeleteIcon from '@material-ui/icons/Delete'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from  '@material-ui/core/Button'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const value = +event.target.value
    if((isNaN(value) && (value !== '')) || value < 0 || value%1 !== 0  ) {
      this.setState({value: this.state.value})
    } else {
      this.setState({value})
    }
  }

  handleSubmit(event) {
    const value = this.state.value
    if(value > 0) {
      // console.log(`quantity: ${value}, id: ${this.props.id}`)
      this.props.updateQuantity(this.props.id, value)
      this.setState({cartObject: this.props.getCart()})
      this.setState({value: ''})
      event.preventDefault()
    }
  }

  render() {
    const style = {
      width: 100
    }
    
    return (
      <TableRow>
        <TableCell>
          <Button onClick={event => this.props.deleteRow(this.props.id, event)} color="secondary" variant="contained">
            Remove
            <DeleteIcon />
          </Button>
        </TableCell><TableCell>
          <img src={this.props.imgUrl} style={style} />
        </TableCell>
        <TableCell component="th" scope="row">
          {this.props.name}
        </TableCell>
        <TableCell>{`$${this.props.price.toFixed(2)}/${this.props.uom}`}</TableCell>
        <TableCell>
        <FormControl onSubmit={this.handleSubmit}>
          <TextField
            label={`Current quantity: ${this.props.quantity}${this.props.uom}`}
            id="multiline-static"
            multiline
            rowsMax="2"
            value={this.state.value}
            onChange={this.handleChange}
            margin="normal"
          />
        </FormControl>
        <IconButton type="submit" value="Update Quantity" color="primary" onClick={e => this.handleSubmit(e)}>
          <CachedIcon />
        </IconButton>
        </TableCell>
        {/* subtotal */}
        <TableCell>${(this.props.quantity * this.props.price).toFixed(2)}</TableCell>
      </TableRow>
    )
  }
}

export default CartItem