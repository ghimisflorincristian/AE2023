import "../card/Card.css";

const Card = (props) => {

    const cartUpdate = () => {
        props.cartUpdateHandler(props.product);
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="banner-image">
                    <img className='image' src={props.product.imgPath} alt="img"></img> </div>
                <h1>{props.product.brand}</h1>
                <p>{props.product.specs}, {props.product.price} lei</p>
            </div>
            <div className="button-wrapper">
                <button className="btn outline">DETAILS</button>
                <button className="btn fill" onClick={cartUpdate}>ADD TO CART</button>
            </div>
        </div>

    )
}

export default Card;