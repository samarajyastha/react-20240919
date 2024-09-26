import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseByValue,
  increaseCount,
} from "../redux/counter/counterSlice";
import { useState } from "react";

const Home = () => {
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);

  function increaseCountValue() {
    dispatch(increaseCount());
  }

  return (
    <section className="p-10">
      <h1 className="mt-24">Home page</h1>
      <p>Count: {count}</p>
      <input
        type="number"
        className="border border-black"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        className="bg-red-500 text-white px-5 py-2"
        onClick={increaseCountValue}
      >
        +
      </button>

      <button
        className="bg-blue-500 text-white px-5 py-2"
        onClick={() => dispatch(decreaseCount())}
      >
        -
      </button>

      <button
        className="bg-green-500 text-white px-5 py-2"
        onClick={() => dispatch(increaseByValue(parseInt(number)))}
      >
        Increase by value
      </button>
    </section>
  );
};

export default Home;
