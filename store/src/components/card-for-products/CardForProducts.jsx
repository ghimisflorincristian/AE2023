import "../card-for-products/CardForProducts.css"

const CardForProducts = (props) => {

    const cartUpdate = () => {
        props.cartUpdateHandler(props.product);
    }

    return (
        <div className="card-outline">
            <div className="banner-image">
                <img className='img' src={props.product.imgPath} alt="img"></img>
            </div>
            <div className="product-info">
                <h1>{props.product.brand}</h1>
                <p>{props.product.specs}, {props.product.price} lei</p>
            </div>
            <div className="btn-wrapper">
                <button className="btn outline-red" onClick={cartUpdate}>DELETE</button>
            </div>

        </div>

    )
}

export default CardForProducts;