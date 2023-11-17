import { useCallback, useState, useEffect } from "react";
import Card from "../card/Card"
import Header from "../header/Header";
import { baseApi } from "../../utils/constants";
import "../home-page/HomePage.css"

const HomePage = (props) => {
    const [products, setProducts] = useState([]);

    const getAllProducts = useCallback(() => {
        fetch(baseApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => setProducts(data))
    }, [])

    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);


    return (
        <><Header cart={props.cart} cartUpdateHandler={props.cartUpdate} />
        <div className="cards-wrapper">{products && products.map((product) => <Card key={product.id} product={product} cartUpdateHandler={props.cartUpdate}/>)}</div></>
    )
}

export default HomePage;