import RightArrow from "../assets/images1/RightArrow.png";
import caption from "../assets/images1/caption.png";
import headline from "../assets/images1/headline.png";
import MainFrame from "../assets/images1/MainFrame.png";

const WorkHero = () => {
  return (
    <section
  className="
    relative
    overflow-hidden

    bg-white
    dark:bg-[#18182F]

    text-[#232340]
    dark:text-white

    transition-colors
    duration-300
  "
>
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 sm:px-8 lg:px-20 lg:pb-24 lg:pt-16">
        {/* ================= MAIN HERO ================= */}

        <div className="grid items-center gap-12 lg:min-h-[620px] lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}

          <div className="relative z-10 min-w-0">
            {/* Arrow Navigation */}

            <img
              src={RightArrow}
              alt="navigation"
            className="mb-10 w-[120px] sm:mb-14 sm:w-[144px]"
            />

            {/* Featured Product + Bento Heading */}

            <img
              src={headline}
              alt="Bento - Drag and Drop 3D Visual Design System"
              className="w-full max-w-[315px]"
            />

            {/* Bottom Information */}

            <img
              src={caption}
              alt="Bento project information"
              className="mt-12 w-full max-w-[320px] sm:mt-16 sm:max-w-[420px]"
            />
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex min-h-[380px] items-center justify-center sm:min-h-[520px] lg:min-h-[580px]">
            {/* Blue Background Shape */}

            <div
              className="
                absolute
                right-[6%]
                top-6
                h-[82%]
                w-[54%]
                rounded-[42px]
                bg-[#5965F3]
                sm:rounded-[55px]
              "
            />

            {/* Main Bento Illustration */}

            <img
              src={MainFrame}
              alt="Bento 3D visual design system"
              className="
                relative
                z-10
                w-full
                max-w-[760px]
                lg:max-w-none
                lg:-translate-x-16
                lg:translate-y-8
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
