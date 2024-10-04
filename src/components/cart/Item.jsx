import { FaTrash } from "react-icons/fa";
import { removeProductFromCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  function removeFromCat() {
    dispatch(removeProductFromCart(id));
  }

  return (
    <div className="flex items-center my-2 bg-white px-5 py-2 justify-between">
      <div>
        <h4 className="text-xl text-teal-800 font-semibold whitespace-nowrap">
          {name}
        </h4>
        <p className="text-sm">${price}</p>
      </div>
      <div className="flex">
        <p className="text-xs text-gray-700 ml-8 mt-1">x{quantity}</p>
        <button
          className="ml-3 text-red-500 hover:text-red-600"
          onClick={removeFromCat}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
