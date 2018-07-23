import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import App from '../App'

class CheckoutTable extends React.Component {
  // let id = 0;
  // function createData(name, calories, fat, carbs, protein) {
  //   id += 1;
  //   return { id, name, calories, fat, carbs, protein };
  // }

  // const data = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
  constructor(props) {
    super(props)
    this.state = {
      cartObject: App.getCart()
    }
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
    // const { classes } = props;

    return (
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
                  <TableCell numeric>{`$${item.quantity * item.price}`}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}
export default CheckoutTable