import arrows1 from "../assets/images/Arrows1.png";
import logo from "../assets/images/icons.png";
import phone from "../assets/images/phone.png";
import Service from "../assets/images/ServiceCards.png";

const WhatWeDo = () => {
  return (
    <section className="overflow-hidden bg-[#F7F7FC] py-20 text-[#232340] transition-colors duration-300 dark:bg-[#18182F] dark:text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-start justify-between gap-8">
          <div>
            <div className="mb-8 flex items-center gap-5">
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className="text-xs text-gray-400 pl-35">02</span>
              <span className="text-sm text-[#5468E7]">What We Do</span>
            </div>

            <h2 className="max-w-[920px] pl-46 text-[40px] font-bold leading-[1.12] sm:text-[56px] lg:text-[64px]">
              We Make Designs that
              <br className="hidden sm:block" />
              Lead and Inspire.
            </h2>
          </div>

          <img
            src={arrows1}
            alt="navigation"
            className="hidden w-36 shrink-0 pt-9 sm:block"
          />
        </div>

        <img
          src={Service}
          alt="service cards"
          className="mt-14 w-full object-contain"
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="relative">
            <div className="absolute left-[8%] top-[12%] h-[58%] w-[34%] rounded-full bg-[#FFC7DE]" />
            <img
              src={phone}
              alt="phone showcase"
              className="relative z-10 w-full max-w-[780px] object-contain"
            />
          </div>

          <div>
            <div className="mb-8 flex items-center gap-4">
              <img src={logo} alt="logo" className="h-6 w-6" />
              <span className="text-sm text-gray-400">03</span>
              <span className="text-base">Achievement</span>
            </div>

            <h3 className="max-w-[590px] text-[30px] font-bold leading-tight sm:text-[38px]">
              A design team building a curated marketplace for UI designers.
            </h3>

            <div className="mt-8">
              <h4 className="text-[96px] font-bold leading-none text-[#5468E7] sm:text-[140px]">
                68
              </h4>
              <div className="mt-3 flex items-center gap-3 font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5468E7] text-sm text-white">
                  OK
                </span>
                <span>Successful Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
