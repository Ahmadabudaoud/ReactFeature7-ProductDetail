import { Item } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const Product = (props) => {
  const product = props.product;
  return (
    <Item>
      <img
        onClick={() => props.setCurrentProduct(product)}
        src={product.image}
      />
      <h3>{product.name}</h3>
      <p>{product.price} JD</p>
      <DeleteButton
        deleteproduct={props.deleteproduct}
        productId={product.id}
      />
    </Item>
  );
};
export default Product;
