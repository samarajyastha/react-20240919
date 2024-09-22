import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return <h1>{`Product details of id: ${params.id}`}</h1>;
};

export default ProductDetails;
