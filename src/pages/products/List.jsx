import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductsCard from "../../components/products/Card";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import ProductsLoader from "../../components/products/Loader";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductList(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

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
          {loading ? (
            <ProductsLoader />
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {productList.map((product) => (
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
