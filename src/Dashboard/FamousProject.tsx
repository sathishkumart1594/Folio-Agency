import CTA from "../assets/images/CTA1.png";
import featured from "../assets/images/featured work.png";
import logo from "../assets/images/icons.png";
import portfolio from "../assets/images/portfolio card.png";
import portfolio1 from "../assets/images/portfolio card 1.png";
import portfolio2 from "../assets/images/portfolio card 2.png";
import portfolio3 from "../assets/images/portfolio card 3.png";

const FamousProject = () => {
  return (
    <section className="overflow-hidden bg-white py-20 text-[#232340] transition-colors duration-300 dark:bg-[#18182F] dark:text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-5">
              <img src={logo} alt="logo" className="h-7 w-7" />
              <span className="text-sm text-gray-400 pl-40">04</span>
              <span className="text-base text-[#5468E7]">Famous Projects</span>
            </div>

            <h2 className="text-[40px] font-bold leading-[1.12] sm:text-[56px] lg:text-[64px] pl-48">
              Our Partnerships
            </h2>

            <p className="mt-8 max-w-[580px] text-sm leading-7 text-gray-500 dark:text-gray-300 pl-51">
              Agency is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </p>
          </div>
         <div className="pb-30">
          <button className="w-fit rounded-md bg-[#5965F3] px-8 py-4 font-medium text-white transition-colors hover:bg-[#4955df]">
            Contact Us
          </button>
         </div>
        </div>

        <img
          src={featured}
          alt="featured project"
          className="mt-12 w-full object-contain"
        />

        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <img src={portfolio1} alt="portfolio card" className="w-full relative" />
          <img src={portfolio} alt="portfolio card" className="w-full relative bottom-20" />
          <img src={portfolio3} alt="portfolio card" className="max-w-[400px] w-full relative top-20" />
          <img src={portfolio2} alt="portfolio card" className="mx-auto w-full max-w-[399px]"/>
        </div>

        <img
          src={CTA}
          alt="call to action"
          className="mt-16 w-full object-contain pt-40"
        />
      </div>
    </section>
  );
};

export default FamousProject;
