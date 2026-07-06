import illustration from "../assets/images/illustration.png";
import arrows from "../assets/images/Arrows.png";
import logo from "../assets/images/icons.png";
import heroPath1 from "../assets/images/design1.svg";

const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden bg-[#262547] pt-26 text-white">

      <div className="mx-auto max-w-7xl px-10">

        {/* ================= TOP ================= */}

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-8 flex items-center gap-6">

              <img
                src={logo}
                alt="logo"
                className="w-8"
              />

              <span className="text-xs text-gray-400 pl-25 ">
                01
              </span>

              <span className="text-sm">
                Who We Are
              </span>

            </div>

            <h2 className="w-[920px] text-[64px] font-bold leading-[72px] pl-37">
              We Make Designs that
             <br />
              Lead and Inspire.
            </h2>
          </div>

          <img
            src={heroPath1}
            alt="" 
            className="absolute -left-0 top-2 w-100px pointer-events-none select-none z-0"/>

          <img
            src={arrows}
            alt="navigation"
            className="w-30 pt-16"
          />

        </div>

        {/* ================= MIDDLE ================= */}

        <div className="mt-16 flex gap-25">

          {/* Timeline */}
          

          <div className="flex w-40 flex-col justify-between text-gray-400 pt-12">

            <span>2017</span>

            <span>2018</span>

            <span>2019</span>

            <div className="flex items-center gap-3">

              <div className="h-[3px] w-8 bg-white relative -left-29"></div>

              <span className="text-white font-semibold relative">
                2020
              </span>

              {/* <div className="h-[2px] relative -left-1 bg-white"></div>
              <div className="h-2 w-5 -left-10 relative rounded-full bg-white"></div> */}
            </div>

            <span>2021</span>

          </div>

          {/* Illustration */}

          <div className="flex-1">

            <img
              src={illustration}
              alt="illustration"
              className="w-full"
            />

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-20 grid grid-cols-2 items-end gap-20">

          {/* Left */}

          <div>

            <div className=" h-14 w-[2px] bg-[#B987FF] pt-16 relative"></div>

            <div className="relative -top-20">
            <h3 className="w-[820px] text-3xl font-semibold leading-snug pl-65">
              A design team building a curated marketplace
              for UI designers.
            </h3>

            <p className="mt-6 w-[720px] text-gray-400 leading-8 pl-65">
              4,404 curated design resources to energize your
              creative workflow. We're a growing family of
              designers and makers from around the world.
            </p>

           <div className="relative pl-65">
            <button className="mt-10 rounded-md bg-[#5965F3] px-8 py-4 font-medium hover:bg-[#4955df]">
              Contact Us
            </button>
            </div>

            <div className="text-right relative left-130 -top-64">
              <h1 className="text-[140px] fornt-s font-bold">28</h1>
              <p className="text-lg -top-10 relative -left-4">Biggest Branding</p>
            </div>

          </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhoWeAre;