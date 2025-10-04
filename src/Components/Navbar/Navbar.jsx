import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-[#0f0f0fb3] border-b-2 bg-stone-100 px-3 py-1 "
                  : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="myBooking"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-[#0f0f0fb3] border-b-2 bg-white px-3 py-1 "
                  : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
              }
            >
              My-Booking
            </NavLink>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-[#0f0f0fb3] border-b-2 bg-stone-100 px-3 py-1 "
                  : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="contactUs"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-[#0f0f0fb3] border-b-2 bg-stone-100 px-3 py-1 "
                  : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost lg:text-3xl text-lg">
          <img className="w-8 h-8" src={logoImg} alt="" />
          Phudu
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-[#0f0f0fb3] border-b-2  px-3 py-1 "
                : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="myBooking"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-[#0f0f0fb3] border-b-2 px-3 py-1 "
                : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
            }
          >
            My-Booking
          </NavLink>
          <NavLink
            to="blogs"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-[#0f0f0fb3] border-b-2  px-3 py-1 "
                : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="contactUs"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-[#0f0f0fb3] border-b-2  px-3 py-1 "
                : "text-lg font-medium text-[#0f0f0fb3] px-3 py-1"
            }
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="py-2 lg:px-6 px-3 rounded-full bg-[#176AE5] text-white  lg:text-lg text-sm  font-semibold">
          Emergency
        </a>
      </div>
    </div>
  );
};

export default Navbar;
