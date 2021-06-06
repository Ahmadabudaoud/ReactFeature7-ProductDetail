import {Item} from "../styles"

const Product = (props) =>{
const product = props.product
return(
<Item>
<img onClick{() => props.setCurrentProduct(product)} src={product.image}/>
<h3>{product.name}</h3>
    <p>{product.price} JD</p>
</Item>
)
}
export default Product