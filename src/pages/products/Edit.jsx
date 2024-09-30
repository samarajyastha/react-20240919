import { Link, useParams } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import { BiLeftArrowAlt } from "react-icons/bi";
import Title from "../../components/Title";
import ProductsForm from "../../components/products/Form";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/products";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const params = useParams();

  useEffect(() => {
    getProductById(params.id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        toast(error.response.data, {
          type: "error",
          autoClose: false,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  return (
    <section className="py-5">
      <Link to={PRODUCTS_ROUTE} className="px-5 py-2 flex items-center">
        <BiLeftArrowAlt className="mr-1" />
        Back
      </Link>

      <div className="md:w-1/2 mx-auto px-4">
        <div className="flex items-center justify-center mb-5">
          <Title label="Edit product" />
          {loading ? <Spinner className="ml-2" /> : null}
        </div>
        <ProductsForm product={product} />
      </div>
    </section>
  );
};

export default EditProduct;
