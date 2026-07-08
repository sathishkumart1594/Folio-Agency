import btnBg from "../assets/images1/BTN_bg.png";
import btnContent from "../assets/images1/BTN_Content.png";
import btnSlide from "../assets/images1/BTN_slide images.png";
import logo from "../assets/images/icons.png";

const ByTheNumbers = () => {
  return (
    <section className="relative overflow-hidden bg-[#262547] py-20 text-white sm:py-24">

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="mb-8 flex gap-5">

              <img
                src={logo}
                alt="logo"
                className="w-6 "
              />

              <span className="text-xs text-gray-400">
                02
              </span>

              <span className="text-sm">
                Folio Agency
              </span>

            </div>

            <h2 className="max-w-[700px] text-[40px] font-bold leading-[1.12] sm:text-[56px] lg:text-[61px]">
              By the Numbers,
            </h2>
          </div>

      {/* Background Shape */}

      <img
        src={btnBg}
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-full
          w-auto
          select-none
          object-cover
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TOP CONTENT ================= */}

        <div className="flex justify-center">

          <img
            src={btnContent}
            alt="By the numbers statistics"
            className="
              w-full
              max-w-[850px]
              object-contain
            "
          />

        </div>


        {/* ================= SLIDER IMAGE ================= */}

        <div className="mt-16 flex items-center justify-center sm:mt-24">
  <img
    src={btnSlide}
    alt="Bento design showcase"
    className="w-full max-w-[1100px] object-contain relative"
  />
</div>

      </div>

    </section>
  );
};

export default ByTheNumbers;
