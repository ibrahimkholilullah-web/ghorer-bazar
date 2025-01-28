import { useState } from "react";
import loginImage from "../../assets/Image/Login.avif"
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 hover:shadow-2xl hover:shadow-[#F54A00] rounded-lg shadow-lg w-96 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={loginImage} alt="Ghorer Bazar" className="h-12" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">Log in</h2>
        <p className="text-gray-600 text-sm mt-1">
          Enter your email and Password 
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition duration-300"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-sm text-black mt-6">
          Don't have an account?{" "}
          <Link
            to="/signUp"
            className="text-[#F54A00] hover:border-b-2 font-medium "
          >
            Create an account
          </Link>
        </p>
      </div>
      
    </div>
  );
};

export default Login;
