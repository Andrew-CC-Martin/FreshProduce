// import React from 'react'
// // import { Table, Button, Form, FormGroup, Input } from 'reactstrap'
// import App from '../App';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TableFooter from '@material-ui/core/TableFooter'
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button'

// class CartItem extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render () {
//     const imgStyle = {
//       width: 100
//     }
//     return (
//       <div>
//       <Paper>
//         <Table>
//         </Table>
//       </Paper>

//       <Table>
//         <tbody>
//           <tr>
//             <td>
//               <Button onClick={event => this.props.deleteRow(this.props.cartObject.id, event)} color="secondary" variant="contained">X</Button>
//             </td>
//             <td>
//               <img src={this.props.cartObject.imgUrl} style={imgStyle} />
//             </td>
//             <td>{this.props.cartObject.name}</td>
//             <td>${this.props.cartObject.price}</td>
//             <td>
//               <Button onClick={event => this.props.removeOne(this.props.cartObject.id, event)}>-</Button>
//               &nbsp;&nbsp;&nbsp;{this.props.cartObject.quantity}&nbsp;&nbsp;&nbsp;
//               <Button onClick={event => this.props.addOne(this.props.cartObject.id, event)}>+</Button>
//             </td>
//             <td>${this.props.cartObject.quantity * this.props.cartObject.price}</td>
//             <td></td>
//           </tr>
//         </tbody>
//       </Table>
//       </div>
//     )
//   }
// }

// export default CartItem