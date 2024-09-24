import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductsCard from "../../components/products/Card";
import Title from "../../components/Title";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductList(response.data);

        console.log(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  if (loading) return <div className="text-center text-xl p-5">Loading...</div>;

  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <Title label="New Arrivals" />

        <div className="py-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {productList.map((product) => (
              <ProductsCard key={product._id} id={product._id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
