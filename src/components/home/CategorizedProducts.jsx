/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductsCard from "../products/Card";
import { getProducts } from "../../api/products";
import Title from "../Title";

const CategorizedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ limit: 4, filters: { category } })
      .then((response) => {
        setProducts(response.data);
      })
      .catch();
  }, [category]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-8">
        <Title
          label={category}
          className="border-l-4 border-l-teal-900 pl-3 capitalize"
        />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <ProductsCard key={product._id} id={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategorizedProducts;
