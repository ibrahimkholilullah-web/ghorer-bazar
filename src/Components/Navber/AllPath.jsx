import { NavLink } from "react-router-dom";

const AllPath = () => {
    const navLinkActive = ({isActive}) => isActive ? "text-[#FC8934] hover:bg-[#F3F3F3] rounded-none border-b-2 border-[#FC8934]": "hover:border-b-2 bg-[#F3F3F3] rounded-none border-black"
    const pathData = <>
    <li><NavLink to="/" className={navLinkActive}>OFFER</NavLink></li>
    <li><NavLink to="/f" className={navLinkActive}>Sarisha Oil</NavLink></li>
    <li><NavLink to="/s" className={navLinkActive}>Ghee (ঘি)</NavLink></li>
    <li><NavLink to="/d" className={navLinkActive}>Dates (খেজুর)</NavLink></li>
    <li><NavLink to="/f" className={navLinkActive}>Honey</NavLink></li>
    <li><NavLink to="/g" className={navLinkActive}>Masala</NavLink></li>
    <li><NavLink to="/h" className={navLinkActive}>Organic Oil</NavLink></li>
    <li><NavLink to="/w" className={navLinkActive}>Nuts & Seeds</NavLink></li>
    <li><NavLink to="/t" className={navLinkActive}>Tea / Coffee</NavLink></li>
    <li><NavLink to="/i" className={navLinkActive}>Functional Food</NavLink></li>
    <li><NavLink to="/d" className={navLinkActive}>(খেজুর গুড়া)</NavLink></li>
    </>
    return (
        <div className=" bg-[#F3F3F3]">
            <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {pathData}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 flex items-center gap-5">
      {pathData}
    </ul>
  </div>
  <div className="navbar-end">
  </div>
       </div>
        </div>
    );
};

export default AllPath;