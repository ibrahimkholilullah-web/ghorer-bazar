import { CiSearch } from "react-icons/ci"; // Importing CiSearch icon
import { FaRegUser, FaShoppingCart } from "react-icons/fa"; // Importing FaRegUser and FaShoppingCart
import logo from "../../assets/gorerbager.png"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            {/* Top Bar */}
            <div className='bg-[#FC8934]'>
                <h1 className='w-11/12 mx-auto text-white text-center py-2'>
                    আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +8801321208940 | হট লাইন: 09642-922922
                </h1>
            </div>

            {/* Navbar */}
            <div className='w-11/12 mx-auto'>
                <div className="navbar bg-base-100 text-[#FC8934]">
                    
                    {/* Navbar Start */}
                    <div className="navbar-start">
                        <div className="dropdown">
                           
                           
                        </div>
                        <a className="btn btn-ghost hover:bg-amber-600 hover:text-white text-xl">
                            <CiSearch size={25} /> {/* Search Icon */}
                        </a>
                    </div>

                    {/* Navbar Center */}
                    <div className="navbar-center  lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <img  src={logo}  className="md:w-28" alt="" />
                        </ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end flex gap-5">
                    <div className="relative group">
                        <Link to='/login' className="flex items-center">
                          <FaRegUser size={20} />
                        </Link>
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#FC8934] text-white text-xs py-1  px-2 rounded">
                          Account
                        </div>
                      </div>

                        <button className=" cursor-pointer ">
                            <FaShoppingCart size={25} /> {/* Cart Icon */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
