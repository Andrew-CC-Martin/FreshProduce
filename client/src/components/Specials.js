import React from 'react';
import Product from './Product';
import './Specials.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import products from '../products.json'

class Specials extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            selectedProduct: null
        }
    }

    componentDidMount() {
        // console.log(this.props.addToCart)
        const url = "https://api.myjson.com/bins/7mvru"

        fetch(url) 
            .then(response => response.json())
            .then(data => {
                this.setState({
                products: data
                })
            })
            .catch(err => {
                console.log(err)
            })
        // this.setState({
        //     products 
        //   })
    }

    render() {
        return(

            <React.Fragment>
            {/* {console.log(this.props.addToCart)} */}
            {this.state.products.map((product)=> {
                if(product.on_special) {
                    return <Product  
                    key={product.id} 
                    id={product.id}
                    imgUrl={product.img_path} 
                    name={product.name} 
                    uom={product.uom} 
                    price={product.unit_sell_price}
                    addToCart={this.props.addToCart.bind(this)}
                    />
                }
            })} 
            </React.Fragment>

        )
    }
}


export default Specials;