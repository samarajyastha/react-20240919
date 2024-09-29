import { Link } from "react-router-dom";
import jacket from "../../assets/img/jacket.png";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ id, name, brand, category, price, url }) => {
  return (
    <div className="py-5 px-6 rounded-xl shadow relative bg-white">
      <span className="bg-teal-950 text-xs px-2 py-1 rounded-xl text-white absolute right-4 top-4">
        {category}
      </span>
      <img src={url ?? jacket} alt="" className="max-h-60 w-auto mx-auto mb-5" />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>{brand}</p>
      <p className="my-3">
        <span className="text-xl mr-1">${Math.floor(price * 0.8)}</span>
        <span className="line-through text-slate-400 text-sm">${price}</span>
      </p>
      <Link
        to={id}
        className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default ProductsCard;
