import { useEffect } from "react";
import ProductsCard from "../../components/products/Card";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import ProductsLoader from "../../components/products/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductCategories,
} from "../../redux/products/productActions";
import ProductsFilter from "../../components/products/Filter";

const ProductList = () => {
  const { loading, products, query } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(query));
    dispatch(getProductCategories());
  }, [dispatch, query]);

  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Title label="New Arrivals" />
          <Link to="add" className="shadow px-5 py-2 rounded bg-white">
            Add Product +
          </Link>
        </div>

        <div className="py-8">
          <ProductsFilter />

          {loading ? (
            <ProductsLoader />
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {products.map((product) => (
                <ProductsCard key={product._id} id={product._id} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
