import { DeleteButtonStyled } from "../../styles";
import { FaTrash } from "react-icons/fa";
const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled onClick={() => props.deleteProduct(props.product.id)}>
      <FaTrash />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
