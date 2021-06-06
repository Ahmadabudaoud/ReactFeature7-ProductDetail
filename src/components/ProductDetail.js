import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  let product = props.product;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} JD</p>
      <button onClick={() => props.setProduct(null)}>Go back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
