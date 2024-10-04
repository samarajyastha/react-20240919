import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductById } from "../../api/products";
import { addProductToCart } from "../../redux/cart/cartSlice";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import { Link, useParams } from "react-router-dom";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { BiLeftArrowAlt } from "react-icons/bi";
import jacket from "../../assets/img/jacket.png";
import Title from "../../components/Title";
import Spinner from "../../components/Spinner";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const params = useParams();

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addProductToCart(product));
  }

  useEffect(() => {
    getProductById(params.id)
      .then((response) => {
        setProduct(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [params.id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[90vh]">
        <Spinner className="h-16 w-16" />
      </div>
    );

  return (
    <section className="py-5">
      <Link to={PRODUCTS_ROUTE} className="px-5 py-2 flex items-center">
        <BiLeftArrowAlt className="mr-1" />
        Back
      </Link>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 justify-between min-h-[80vh] items-center">
          <img
            src={product?.url ?? jacket}
            alt=""
            className="w-auto max-h-[80vh]"
          />
          <div className="">
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <Title label={product.name} />
            <p className="py-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              molestias eum dolores maxime? Exercitationem, dignissimos
              voluptas. Quis fugit distinctio dolores rem temporibus quibusdam
              voluptas magnam quisquam suscipit? Quisquam, libero! Minus.
            </p>
            <p className="font-semibold uppercase">{product.brand}</p>
            <p className="my-2">
              <span className="text-2xl mr-1">
                ${Math.floor(product.price * 0.8)}
              </span>
              <span className="line-through text-slate-400 text-md">
                ${product.price}
              </span>
            </p>

            <button
              className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900 mt-4 flex items-center"
              onClick={addToCart}
            >
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
