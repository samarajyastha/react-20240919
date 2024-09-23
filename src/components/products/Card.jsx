import jacket from "../../assets/img/jacket.png";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ name, brand, category, price }) => {
  return (
    <div className="py-5 px-6 rounded-xl shadow relative bg-white">
      <span className="bg-teal-950 text-xs px-2 py-1 rounded-xl text-white absolute right-4 top-4">
        {category}
      </span>
      <img src={jacket} alt="" className="h-60 w-auto mx-auto" />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>{brand}</p>
      <p className="my-2">
        <span className="text-xl mr-1">${Math.floor(price * 0.8)}</span>
        <span className="line-through text-slate-400 text-sm">${price}</span>
      </p>
      <button className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900 mt-2">
        Buy Now
      </button>
    </div>
  );
};

export default ProductsCard;
