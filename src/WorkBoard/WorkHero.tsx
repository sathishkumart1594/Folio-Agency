import RightArrow from "../assets/images1/RightArrow.png";
import caption from "../assets/images1/caption.png";
import headline from "../assets/images1/headline.png";
import MainFrame from "../assets/images1/MainFrame.png";

const WorkHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-10 pb-24 pt-16 lg:px-20">
        {/* ================= MAIN HERO ================= */}

        <div className="grid min-h-[620px] grid-cols-2 items-center gap-12">
          {/* ================= LEFT SIDE ================= */}

          <div className="relative z-10">
            {/* Arrow Navigation */}

            <img
              src={RightArrow}
              alt="navigation"
              className="mb-14 w-[144px]"
            />

            {/* Featured Product + Bento Heading */}

            <img
              src={headline}
              alt="Bento - Drag and Drop 3D Visual Design System"
              className="w-[315px]"
            />

            {/* Bottom Information */}

            <img
              src={caption}
              alt="Bento project information"
              className="mt-16 w-[420px]"
            />
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex min-h-[580px] items-center justify-center">
            {/* Blue Background Shape */}

            <div
              className="
                absolute
                right-8
                top-6
                h-[530px]
                w-[430px]
                rounded-[55px]
                bg-[#5965F3]
              "
            />

            {/* Main Bento Illustration */}

            <img
              src={MainFrame}
              alt="Bento 3D visual design system"
              className="
                relative
                z-10
                w-[760px]
                max-w-none
                -translate-x-16
                translate-y-8
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;