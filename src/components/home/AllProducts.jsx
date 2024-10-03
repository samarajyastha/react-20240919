import { useEffect, useState } from "react";
import ProductsCard from "../products/Card";
import { getProducts } from "../../api/products";
import Title from "../Title";

const categories = ["", "smartphone", "laptop", "electronics"];

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getProducts({ limit: 8, filters: { category: selectedCategory } })
      .then((response) => {
        setProducts(response.data);
      })
      .catch();
  }, [selectedCategory]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-8 flex flex-col md:flex-row justify-between">
        <Title
          label={"Our Products"}
          className="border-l-4 border-l-teal-900 pl-3 capitalize"
        />
        <div className="flex mt-5 md:mt-0">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`shadow mx-2 px-3 py-1 capitalize ${
                selectedCategory == category ? "bg-teal-900 text-white" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category || "All"}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <ProductsCard key={product._id} id={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
