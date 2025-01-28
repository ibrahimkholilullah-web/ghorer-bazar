import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../Utilit/Utilite";

const SignUp = () => {
    const [passwordIcon, setPasswordIcon] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const name = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0]; // Fixed file selection

        if (!image) {
            alert("Please upload an image!");
            setLoading(false);
            return;
        }

        try {
            const photoUrl = await imageUpload(image);
            const userCreateData = { name, email, password, photoUrl };
            console.log(userCreateData);
            
            // Redirect to login after successful account creation
            navigate('/login');
        } catch (error) {
            console.error("Image upload failed:", error);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg md:w-6/12 lg:w-4/12">
                <h2 className="text-2xl font-bold mb-4 text-left">Create an account</h2>
                <form onSubmit={handleCreateAccount}>
                    {/* User Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F54A00]"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username or Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Username or Email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F54A00]"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={passwordIcon ? "text" : "password"}
                            placeholder="Enter Password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F54A00]"
                            required
                        />
                        <button
                            type="button"
                            className="absolute top-8 right-3"
                            onClick={() => setPasswordIcon(!passwordIcon)}
                        >
                            {passwordIcon ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">Max size 2MB</p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#F54A00] text-white py-2 rounded-lg hover:bg-[#d43d00] transition"
                        disabled={loading}
                    >
                        {loading ? <VscLoading className="animate-spin mx-auto" /> : "Create an account"}
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#F54A00] hover:underline">
                        Login
                    </Link>{" "}
                    / <Link to="/">Home</Link>
                </p>

                {/* Divider */}
                <div className="flex items-center justify-between my-4">
                    <hr className="w-1/3 border-gray-300" />
                    <span className="text-sm text-gray-500">Or</span>
                    <hr className="w-1/3 border-gray-300" />
                </div>

                {/* Google Login Button */}
                <button
                    className="flex items-center justify-center w-full text-black bg-white border rounded-full py-2 hover:shadow-lg transition"
                >
                    {/* Uncomment if you have Google login image */}
                    {/* <img className="w-6 mr-3" src={google} alt="Google" /> */}
                    <span className="font-medium">Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SignUp;
