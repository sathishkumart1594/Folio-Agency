import arrows from "../assets/images/Arrows.png";
import logo from "../assets/images/icons.png";
import illustration from "../assets/images/illustration.png";
import years from "../assets/images/years.png";

const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden bg-[#262547] py-20 text-white transition-colors duration-300 dark:bg-[#111122] sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-start justify-between gap-8">
          <div>
            <div className="mb-8 flex items-center gap-5">
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className="text-xs text-gray-400 pl-30">01</span>
              <span className="text-sm">Who We Are</span>
            </div>

            <h2 className="max-w-[920px] pl-40 text-[40px] font-bold leading-[1.12] sm:text-[56px] lg:text-[64px] ">
              We Make Designs that
              <br className="hidden sm:block" />
              Lead and Inspire.
            </h2>
          </div>

          <img
            src={arrows}
            alt="navigation"
            className="hidden w-36 shrink-0 pt-9 sm:block"
          />
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[120px_1fr] lg:gap-12">
          <img
            src={years}
            alt="2017 to 2021 timeline"
            className="hidden w-[45px] justify-self-center lg:block"
          />

          <img
            src={illustration}
            alt="illustration"
            className="w-full max-w-[970px] justify-self-center"
          />
        </div>

        <div className="mt-14 grid items-end gap-10 lg:grid-cols-[1fr_280px] lg:pl-[170px]">
          <div className="border-l-2 border-[#B987FF] pl-7">
            <h3 className="max-w-[720px] text-2xl font-semibold leading-snug sm:text-3xl">
              A design team building a curated marketplace for UI designers.
            </h3>

            <p className="mt-6 max-w-[680px] leading-8 text-gray-400">
              4,404 curated design resources to energize your creative
              workflow. We're a growing family of designers and makers from
              around the world.
            </p>

            <button className="mt-9 rounded-md bg-[#5965F3] px-8 py-4 font-medium text-white transition-colors hover:bg-[#4955df]">
              Contact Us
            </button>
          </div>

          <div className="text-left lg:text-right">
            <h4 className="text-[86px] font-bold leading-none sm:text-[162px]">
              28
            </h4>
            <p className="mt-3 text-lg pb-11">Biggest Branding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
