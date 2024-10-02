import { Link } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import loginBg from "../../assets/img/login-bg.png";
import { LOGIN_ROUTE } from "../../constants/routes";

const Register = () => {
  return (
    <section className="py-12">
      <img
        src={loginBg}
        alt=""
        className="fixed top-0 left-0 opacity-10 -z-10"
      />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-around min-h-[75vh]">
          <div className="md:w-1/2">
            <p className="text-3xl">Get wonderful products</p>
            <h1 className="text-7xl text-teal-700">Join Us!</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              labore exercitationem ipsum architecto sapiente optio.
            </p>
            <p className="mt-8">
              Already have an account? Please
              <Link to={LOGIN_ROUTE} className="text-teal-800 ml-2">
                Login
              </Link>
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:px-20 mt-12">
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
