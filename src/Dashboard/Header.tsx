import { NavLink } from "react-router-dom";

import icon from "../assets/images/icons.png";
import logo from "../assets/images/logo.png";

import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-[#5468E7]"
        : "text-gray-500 hover:text-[#5468E7] dark:text-gray-300"
    }`;

  return (
    <header className="relative z-50 bg-white transition-colors duration-300 dark:bg-[#232340]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-16">
        <NavLink to="/" className="flex shrink-0 items-center gap-3">
          <img src={icon} alt="Folio icon" className="h-8 w-8" />
          <img
            src={logo}
            alt="Folio"
            className="w-20 dark:brightness-0 dark:invert"
          />
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex lg:gap-12">
          <NavLink to="/" end className={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/work" className={navLinkStyle}>
            Work
          </NavLink>
          <NavLink to="/services" className={navLinkStyle}>
            Services
          </NavLink>
          <NavLink to="/jobs" className={navLinkStyle}>
            Jobs
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg transition-transform duration-300 hover:scale-105 dark:bg-[#34345c]"
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <NavLink
            to="/contact"
            className="hidden rounded-md bg-[#232340] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#34345c] dark:bg-[#5468E7] dark:hover:bg-[#6577ef] sm:block"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
