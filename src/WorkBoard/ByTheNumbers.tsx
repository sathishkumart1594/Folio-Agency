import btnBg from "../assets/images1/BTN_bg.png";
import btnContent from "../assets/images1/BTN_Content.png";
import btnSlide from "../assets/images1/BTN_slide images.png";
import logo from "../assets/images/icons.png";

const ByTheNumbers = () => {
  return (
    <section className="relative overflow-hidden bg-[#262547] pt-24 text-white ">

        <div>

            <div className="mb-8 flex gap-6 relative pl-40">

              <img
                src={logo}
                alt="logo"
                className="w-6 "
              />

              <span className="text-xs text-gray-400 pl-25 ">
                02
              </span>

              <span className="text-sm">
                Folio Agency
              </span>

            </div>

            <h2 className="w-[700px] text-[61px] font-bold leading-[72px] pl-37 rlative">
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

      <div className="relative z-10 mx-auto max-w-7xl px-10">

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

        <div className="mt-24 flex items-center justify-center pt-10">
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