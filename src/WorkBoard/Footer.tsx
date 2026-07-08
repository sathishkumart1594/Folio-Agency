import footerContent from "../assets/images1/footer content.png";
import footerBottom from "../assets/images1/footer bottom.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 sm:pt-20 lg:px-10">

        {/* ================= FOOTER CONTENT ================= */}

        <div className="flex justify-center">
          <img
            src={footerContent}
            alt="Folio footer content"
            className="block h-auto w-full max-w-[550px] object-contain"
          />
        </div>


        {/* ================= FOOTER BOTTOM ================= */}

        <div className="mt-14 border-t border-gray-200 pt-8">

          <img
            src={footerBottom}
            alt="Footer copyright and social links"
            className="block h-auto w-full object-contain"
          />

        </div>

      </div>
    </footer>
  );
};

export default Footer;
