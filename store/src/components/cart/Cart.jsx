import CardForProducts from "../card-for-products/CardForProducts";
import Header from "../header/Header";
import "../cart/Cart.css"
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useRef, useEffect } from 'react'


const Cart = (props) => {

    const calculateTotal = (props) => {
        let sum = 0;
        sum = props.cart.map(prod => prod.price).reduce((partialSum, a) => partialSum + a, 0);;
        return sum;
    }

    const cartUpdate = (product) => {
        props.deleteProduct(product);
        console.log(calculateTotal(props))
    }

    //let paypalRef = useRef();


    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "test",
                    amount: {
                        currency_code: "USD",
                        value: props.total
                    }
                }
            ]
        });
    }


    return (
        <div>
            <Header cart={props.cart} cartUpdateHandler={props.cartUpdate} />
            <h1>Your cart:</h1>
            <div className="cards">{props.cart && props.cart.map((product) =>
                <CardForProducts key={product.id} product={product} cartUpdateHandler={cartUpdate} cart={props.cart} />)}
            </div>
            <div className='cart-page' >
                <p>Your total: {props.total}</p>
                <div className="pay-button-wrapper ">
                    <PayPalScriptProvider options={{ 'client-id': 'AXvKMf0x9aMAXSSsaW2JGZ1YE5CaN6Tv0k7ZJadWGZVNKjpEGhb7yeoR1ZI_1ELDkDtptkbxyLxdI-N1' }}>
                        <PayPalButtons style={{ layout: 'horizontal' }} forceReRender={props.total} createOrder={createOrder} />
                        
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    )
}

export default Cart;