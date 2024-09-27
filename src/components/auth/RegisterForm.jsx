import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import Spinner from "../Spinner";
import { registerUser } from "../../redux/auth/authActions";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState, watch } = useForm();

  const password = watch("password");

  const { errors } = formState;

  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(registerUser(data));
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("name", {
            required: "Name is required.",
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">{errors.name?.message}</p>
      </div>
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
            pattern: {
              value: PASSWORD_REGEX,
              message:
                "Password must contain uppercase, lowercase and numbers.",
            },
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
      <div className="py-1 relative">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("confirmPassword", {
            required: "Confirm password is required.",
            validate: (value) => {
              return value === password || "Passwords do not match.";
            },
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.confirmPassword?.message}
        </p>
      </div>
      <div className="mt-5 text-center">
        <button
          type="submit"
          className="bg-teal-700 text-white rounded px-5 py-1 cursor-pointer"
        >
          Register {loading ? <Spinner className="h-4 w-4 ml-1" /> : null}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
