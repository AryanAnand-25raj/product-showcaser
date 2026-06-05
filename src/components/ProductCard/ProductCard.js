import './ProductCard.css';
import Card from '../Card/Card';

function ProductCard({name, description, price, image, IsOnSale, salePrice}){ //props is an object that contains the data that we pass to the component
return(
    <Card className="Product-Card">
    <img 
    src={image} //props.image
    alt={name}
    style={{ width: "200px", height: "200px", objectFit: "cover"}}/>
    
    <div className="Product-info">
    <h3>
    {name}
    {IsOnSale && <span className="sale-badge">SALE</span>} {/* Logical and operator to display sale badge only if the product is on sale */}
    </h3>
    <p>{description}</p>
    <span className="price">{
    IsOnSale ? (  
        <> 
        <span className="original-price">₹{price}</span> {/* ternary operator to display the condition of the product being on sale,original price  */}
        <span className="sale-price">₹{salePrice}</span>
        </>
    ) : (
        <span className="price">₹{price}</span>
    )}
    </span>
    <button className="add-to-cart-btn" onClick={() => alert(`Added ${name} to cart!`)}>Add to Cart</button>
    
    </div>
    </Card>
    
    
)
}
export default ProductCard;