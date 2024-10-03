import Hero from "../components/home/Hero";
import CategorizedProducts from "../components/home/CategorizedProducts";
import AllProducts from "../components/home/AllProducts";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import cetaphil from "../assets/img/cetaphil.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, []);

  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="py-24">
        <AllProducts />
      </section>
      <section className="py-16 bg-gray-100">
        <CategorizedProducts category="laptop" />
      </section>
      <section className="py-16">
        <CategorizedProducts category="smartphone" />
      </section>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        label="Featured Product"
        body={<img src={cetaphil} />}
      />
    </>
  );
};

export default Home;
