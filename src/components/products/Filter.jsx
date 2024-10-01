import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  setLimit,
  setSort,
} from "../../redux/products/productSlice";

const ProductsFilter = () => {
  const { categories } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  function setProductLimit(limit) {
    dispatch(setLimit(parseInt(limit)));
  }

  function sortProducts(sort) {
    dispatch(setSort(sort));
  }

  function filterByName(value) {
    dispatch(setFilters({ name: value }));
  }

  function filterByCategory(value) {
    dispatch(setFilters({ category: value }));
  }

  return (
    <div className="border bg-white mb-8 px-5 py-3 rounded-md grid items-center md:grid-cols-2 xl:grid-cols-4 gap-3 w-full ">
      <div className="xl:mx-auto">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          className="border ml-2 py-1 px-2"
          onChange={(e) => filterByName(e.target.value)}
        />
      </div>
      <div className="xl:mx-auto">
        <label htmlFor="category">Category: </label>
        <select
          name="category"
          id="category"
          className="border ml-2 py-1 px-2"
          onChange={(e) => filterByCategory(e.target.value)}
        >
          <option value="" selected>
            Select category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="xl:mx-auto">
        <label htmlFor="sort">Sort: </label>
        <select
          name="sort"
          id="sort"
          className="border ml-2 py-1 px-2"
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to high
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to low
          </option>
        </select>
      </div>
      <div className="xl:mx-auto">
        <label htmlFor="limit">Limit: </label>
        <select
          name="limit"
          id="limit"
          className="border ml-2 py-1 px-2"
          onChange={(e) => setProductLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
