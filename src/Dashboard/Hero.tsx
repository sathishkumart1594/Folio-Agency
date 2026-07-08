import bg from "../assets/images/Desktop-bg.png";
import desktop from "../assets/images/Desktop.png";
import Lhand from "../assets/images/Left-hand.png";
import Rhand from "../assets/images/Right-hand.png";
import scroll from "../assets/images/scroll-down.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-[#232340] transition-colors duration-300 dark:bg-[#18182F] dark:text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:min-h-[760px] lg:grid-cols-[0.82fr_1.18fr] lg:px-16 lg:py-8">
        <div className="relative z-10 min-w-0 max-w-[520px]">
          <h1 className="text-[52px] font-bold leading-[1.05] tracking-normal text-[#232340] dark:text-white sm:text-[64px] lg:text-[84px]">
            Stand Out
            <br />
            from The
            <br />
            Crowd.
          </h1>

          <p className="mt-7 w-full max-w-[320px] text-base leading-8 text-gray-500 dark:text-gray-300 sm:max-w-md">
            Agency is a full-service agency, busy designing and building
            beautiful digital products, brands and experiences.
          </p>

          <button className="mt-9 rounded-md bg-[#5965F3] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#4955df]">
            Recent Work
          </button>

          <div className="mt-12 flex items-center gap-4 sm:mt-16">
            <img src={scroll} alt="scroll" className="h-12 w-12" />
            <span className="text-gray-400">Scroll down</span>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[360px] w-full max-w-[760px] items-center justify-center sm:min-h-[500px] lg:min-h-[640px] lg:max-w-none">
          <img
            src={bg}
            alt=""
            className="absolute right-[1%] top-1/2 w-[88%] max-w-[560px] -translate-y-1/2"
          />
          <img
            src={desktop}
            alt="Hero illustration"
            className="relative z-10 w-[96%] max-w-[820px]"
          />
          <img
            src={Rhand}
            alt=""
            className="absolute right-[10%] top-[34%] z-20 w-[25%] max-w-[220px]"
          />
          <img
            src={Lhand}
            alt=""
            className="absolute bottom-[27%] left-[14%] z-20 w-[19%] max-w-[157px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
