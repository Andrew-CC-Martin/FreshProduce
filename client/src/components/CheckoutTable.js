import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import App from '../App'

const pdfConverter = require('jspdf');


class CheckoutTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartObject: this.props.getCart()
    }
  }
  generatePdf = () => {
    const pdf = new pdfConverter('p', 'mm', 'a4');
    console.log('pdf')
    pdf.fromHTML(window.document.getElementById("divToPDF"), 10, 10,{'width': 180});
    pdf.save('order-summary.pdf');
} 

  render () {
    const styles = theme => ({
      root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
    });

    return (
      <div id="divToPDF">
      <h4 style={{textAlign:'left'}}>Order Summary</h4>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell numeric>Quantity</TableCell>
              <TableCell numeric>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.cartObject.map(item => {
              return (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell numeric>{item.quantity}</TableCell>
                  <TableCell numeric>{`$${(item.quantity * item.price).toFixed(2)}`}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
              </TableCell>
              <TableCell>
              </TableCell>
              <TableCell numeric>
                <strong>
                  Total: ${this.state.cartObject.reduce((total, item) => total + (item.price * item.quantity), 0)}
                </strong>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <Button onClick={this.generatePdf}> Pdf </Button>
      </Paper>
      </div>
    );
  }

}
export default CheckoutTable