import { useEffect, useState } from "react";
import ProductsCard from "../../components/products/Card";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import ProductsLoader from "../../components/products/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductCategories,
} from "../../redux/products/productActions";
import ProductsFilter from "../../components/products/Filter";
import { resetQuery } from "../../redux/products/productSlice";
import Modal from "../../components/Modal";
import { deleteProduct } from "../../api/products";
import { toast } from "react-toastify";

const ProductList = () => {
  // props plowing
  // props drilling
  const [selectedProductId, setSelectedProductId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const { loading, products, query } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  function resetFilterQuery() {
    dispatch(resetQuery());
  }

  async function confirmDelete() {
    try {
      await deleteProduct(selectedProductId);

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

  useEffect(() => {
    dispatch(getAllProducts(query));
    dispatch(getProductCategories());
  }, [dispatch, query]);

  return (
    <section className="py-12 bg-slate-100 min-h-svh">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Title label="New Arrivals" />
          <div>
            <button
              className="shadow px-5 py-1 h-9 rounded bg-blue-500 hover:bg-blue-600 text-white mr-2"
              onClick={resetFilterQuery}
            >
              Reset filter
            </button>
            <Link
              to="add"
              className="shadow px-5 py-2 rounded bg-white hover:bg-slate-100"
            >
              Add Product +
            </Link>
          </div>
        </div>

        <div className="py-8">
          <ProductsFilter />

          {loading ? (
            <ProductsLoader />
          ) : products.length == 0 ? (
            <h3 className="text-center text-red-500 py-10">
              Product list is empty.
            </h3>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {products.map((product) => (
                <ProductsCard
                  key={product._id}
                  id={product._id}
                  setSelectedProductId={setSelectedProductId}
                  setIsOpen={setIsOpen}
                  {...product}
                />
              ))}
            </div>
          )}
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
    </section>
  );
};

export default ProductList;
