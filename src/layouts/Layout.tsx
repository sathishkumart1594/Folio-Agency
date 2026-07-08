import { Outlet } from "react-router-dom";
import Header from "../Dashboard/Header";


const Layout = () => {
  return (
    <div
      className="
        min-h-screen

        bg-white
        text-[#232340]

        dark:bg-[#18182F]
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <Header />

      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;