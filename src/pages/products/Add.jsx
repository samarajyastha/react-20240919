import { Link } from "react-router-dom";
import ProductsForm from "../../components/products/Form";
import Title from "../../components/Title";
import { BiLeftArrowAlt } from "react-icons/bi";
import { PRODUCTS_ROUTE } from "../../constants/routes";

const AddProduct = () => {
  return (
    <section className="py-12">
      <Link to={PRODUCTS_ROUTE} className="px-5 py-2 flex items-center">
        <BiLeftArrowAlt className="mr-1" />
        Back
      </Link>

      <div className="md:w-1/2 mx-auto px-4">
        <div className="text-center mb-5">
          <Title label="Add product" />
        </div>
        <ProductsForm />
      </div>
    </section>
  );
};

export default AddProduct;

/**
 * Navigation stack
 *
 * add
 * products
 * home
 */
