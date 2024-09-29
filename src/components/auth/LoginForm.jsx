import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../redux/auth/authActions";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EMAIL_REGEX } from "../../constants/regex";
import Spinner from "../Spinner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    toast(error, {
      type: "error",
      autoClose: 1500,
    });
  }, [error]);

  return (
    <form
      className="w-full bg-slate-100 py-10 px-14 shadow"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="py-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address.",
            },
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.email?.message}
        </p>
      </div>
      <div className="py-1 relative">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password length must be greater than 8.",
            },
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.password?.message}
        </p>
        <button
          className="absolute right-3 top-10"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="mt-5 text-center">
        <button
          type="submit"
          className="bg-teal-700 text-white rounded px-5 py-1 cursor-pointer flex items-center mx-auto"
        >
          Login
          {loading ? <Spinner className="h-[1.2rem] w-[1.2rem] ml-1" /> : null}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
