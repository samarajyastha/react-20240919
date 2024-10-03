import { Link } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../constants/routes";

// eslint-disable-next-line react/prop-types
const CarouselItem = ({ label, imgSrc }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-20 xl:px-40 py-12">
      <div className="px-10">
        <h1 className="text-gray-800 font-semibold text-6xl">{label}</h1>
        <p className="mt-5 text-gray-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa
          obcaecati, accusamus soluta fuga voluptate consectetur facilis illum
          ratione distinctio?
        </p>
        <div className="my-8">
          <Link
            to={PRODUCTS_ROUTE}
            className="bg-teal-950 py-3 px-8 rounded-3xl shadow font-bold text-white hover:text-teal-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <img src={imgSrc} />
    </div>
  );
};

export default CarouselItem;
