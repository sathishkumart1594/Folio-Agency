import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";
import icon from "../assets/images/icons.png";

const Header = () => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-[#5468E7]"
        : "text-gray-500 hover:text-[#5468E7]"
    }`;

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="mx-auto flex w-full items-center justify-between px-10 py-6">

        {/* Logo */}

        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={icon}
            alt="Folio icon"
            className="w-8"
          />

          <img
            src={logo}
            alt="Folio"
            className="w-20"
          />
        </NavLink>

        {/* Navigation */}

        <nav className="flex items-center gap-12">

          <NavLink
            to="/"
            end
            className={navLinkStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/work"
            className={navLinkStyle}
          >
            Work
          </NavLink>

          <NavLink
            to="/services"
            className={navLinkStyle}
          >
            Services
          </NavLink>

          <NavLink
            to="/jobs"
            className={navLinkStyle}
          >
            Jobs
          </NavLink>

        </nav>

        {/* Contact Button */}

        <NavLink
          to="/contact"
          className="
            rounded-md
            bg-[#232340]
            px-8
            py-4
            font-semibold
            text-white
            transition-colors
            hover:bg-[#34345c]
          "
        >
          Contact Us
        </NavLink>

      </div>
    </header>
  );
};

export default Header;