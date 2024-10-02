import { useSelector } from "react-redux";
import Hero from "../components/home/Hero";
import ProductsCard from "../components/products/Card";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <section>
      <Hero />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((product) => (
          <ProductsCard key={product._id} id={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
