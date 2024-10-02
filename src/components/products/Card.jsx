/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaPencil, FaTrash } from "react-icons/fa6";
import imagePlaceholder from "../../assets/img/img_placeholder.jpg";

const ProductsCard = ({
  id,
  name,
  brand,
  category,
  price,
  url,
  setSelectedProductId,
  setIsOpen,
}) => {
  function removeProduct() {
    setSelectedProductId(id);
    setIsOpen(true);
  }

  return (
    <div className="py-5 px-6 rounded-xl shadow relative bg-white hover:shadow-xl hover:transition-all flex flex-col justify-around">
      <span className="bg-teal-950 text-xs px-2 py-1 rounded-xl text-white absolute right-4 top-4">
        {category}
      </span>
      <Link to={id}>
        <img
          src={url ?? imagePlaceholder}
          alt=""
          className="max-h-60 w-auto mx-auto mb-5"
        />
      </Link>

      <div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{brand}</p>
        <p className="my-3">
          <span className="text-xl mr-1">${Math.floor(price * 0.8)}</span>
          <span className="line-through text-slate-400 text-sm">${price}</span>
        </p>
        <div className="flex justify-between">
          <Link
            to={id}
            className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900"
          >
            Buy Now
          </Link>
          <div className="flex">
            <Link
              to={`edit/${id}`}
              className="bg-blue-500 px-3 pt-2 text-white rounded hover:bg-blue-600"
            >
              <FaPencil />
            </Link>
            <button
              className="bg-red-500 px-3 ml-3 text-white rounded hover:bg-red-600"
              onClick={removeProduct}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
