import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import CachedIcon from '@material-ui/icons/Cached'

class CartInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartObject: this.props.getCart(),
      value: 0,
      // quantity: this.props.quantity
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
      <FormControl onSubmit={this.handleSubmit}>
        <TextField
          label={`Current quantity: ${this.props.quantity}${this.props.uom}`}
          id="multiline-static"
          multiline
          rowsMax="2"
          value={this.state.value}
          onChange={this.props.handleChange}
          margin="normal"
        />
      </FormControl>
      <IconButton type="submit" value="Update Quantity" color="primary" onClick={e => this.props.handleSubmit(e)}>
        <CachedIcon />
      </IconButton>
      </div>
    )
  }
}

export default CartInput