import React from 'react';
import Product from './Product';

class Specials extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            products: [],
            selectedProduct: null
        }
    }

    componentDidMount() {
        const url = "https://rawgit.com/stemshell/ed489a4e0fe8703fab32fb31f2099654/raw/e549c4db0ffb64715b72c69ff43937d61e4c46a5/products.json"

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
    }
    render() {
        return(
            <div className="specials">
                {this.state.products.map((product)=> {
                    if(product.on_special) {
                        return <Product key={product.id} imgUrl={product.img_path} name={product.name} uom={product.uom} price={product.unit_sell_price} />
                    }
                })}    
            </div>
        )
    }
}


export default Specials;