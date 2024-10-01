import { Link } from "react-router-dom";
import jacket from "../../assets/img/jacket.png";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { deleteProduct } from "../../api/products";
import { toast } from "react-toastify";
import Modal from "../Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/products/productActions";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ id, name, brand, category, price, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function removeProduct() {
    setIsOpen(true);
  }

  async function confirmDelete() {
    try {
      await deleteProduct(id);

      toast(`Product ${name} deleted successfully.`, {
        type: "success",
        autoClose: 1500,
      });

      dispatch(getAllProducts({}));
    } catch (error) {
      toast(error.response.data, {
        type: "error",
        autoClose: 1500,
      });
    } finally {
      setIsOpen(false);
    }
  }

  return (
    <div className="py-5 px-6 rounded-xl shadow relative bg-white hover:shadow-xl hover:transition-all ">
      <span className="bg-teal-950 text-xs px-2 py-1 rounded-xl text-white absolute right-4 top-4">
        {category}
      </span>
      <Link to={id}>
        <img
          src={url ?? jacket}
          alt=""
          className="max-h-60 w-auto mx-auto mb-5"
        />
      </Link>

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

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        label="Delete product"
        body={<p>Are you sure you want to delete this product?</p>}
        actions={
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={confirmDelete}
          >
            Confirm
          </button>
        }
      />
    </div>
  );
};

export default ProductsCard;
