import jacket from "../../assets/img/jacket.png";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";

const ProductDetails = () => {
  const params = useParams();

  console.log(params);

  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <img src={jacket} alt="" className="md:w-1/2" />
          <div className="md:w-1/2">
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <Title label="Jeans Jacket" />
            <p className="py-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              molestias eum dolores maxime? Exercitationem, dignissimos
              voluptas. Quis fugit distinctio dolores rem temporibus quibusdam
              voluptas magnam quisquam suscipit? Quisquam, libero! Minus.
            </p>
            <p className="font-semibold uppercase">Levis</p>
            <p className="my-2">
              <span className="text-2xl mr-1">$299</span>
              <span className="line-through text-slate-400 text-md">$399</span>
            </p>

            <button className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900 mt-4 flex items-center">
              Add to Cart
              <FaCartPlus className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
