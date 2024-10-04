import { useSelector } from "react-redux";
import CartItem from "./Item";

// eslint-disable-next-line react/prop-types
const CartDropdown = ({ showCart = false }) => {
  const { products } = useSelector((state) => state.cart);

  return (
    <div className={showCart ? "block" : "hidden"}>
      <div className="absolute top-12 right-5 z-50 rounded">
        <div className="px-4 py-2 bg-slate-100 shadow">
          {products.length == 0 ? (
            <p className="whitespace-nowrap">Cart is empty.</p>
          ) : (
            products.map((product, index) => (
              <CartItem
                key={index}
                id={product._id}
                name={product.name}
                price={product.price}
                quantity="1"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
