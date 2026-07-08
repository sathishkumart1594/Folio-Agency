import footerBottom from "../assets/images/footer bottom.png";
import footerPage from "../assets/images/footer.png";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#232340] transition-colors duration-300 dark:bg-[#111122] dark:text-white relative -top-240">
      <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-12 sm:px-8 lg:px-10">
        <div className="flex justify-center">
          <img
            src={footerPage}
            alt="footer"
            className="w-full max-w-[565px] object-contain"
          />
        </div>
        <div className="relative -top-56 pl-138.5">
            <img
            src={logo}
            alt="Folio"
            className="w-23.5 dark:brightness-0 dark:invert"
          />
          </div>

        <div className="mt-14 border-t border-gray-200 pt-8 dark:border-white/10">
          <img
            src={footerBottom}
            alt="footer bottom"
            className="w-full object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
