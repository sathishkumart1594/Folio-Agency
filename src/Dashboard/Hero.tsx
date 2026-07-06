import desktop from "../assets/images/Desktop.png";
import bg from "../assets/images/Desktop-bg.png";
import scroll from "../assets/images/scroll-down.png";
import heroPath from "../assets/images/design.svg";
import Rhand from "../assets/images/Right-hand.png";
import Lhand from "../assets/images/Left-hand.png";

const Hero = () => {
  return (
    <section className="min-h-screen pb-20">
      <div className="mx-auto flex min-h-[85vh] pl-29 items-center justify-between">

{/* Decorative SVG */}

  <img
    src={heroPath}
    alt="" className="absolute left-100 top-0 w-120px pointer-events-none select-none z-0"/>


        {/* Left */}
        <div className="max-w-lg pt-6">

          <h1 className="text-[64px] font-bold leading-18.75 text-[#2C2C54]">
            Stand Out
            <br />
            from The
            <br />
            Crowd.
          </h1>

          <p className="mt-8 text-gray-500 leading-8">
            Agency is a full-service agency, busy designing
            and building beautiful digital products,
            brands and experiences.
          </p>

          <button className="mt-10 rounded-md bg-[#5965F3] px-8 py-4  font-semibold text-white hover:bg-[#4955df]">
            Recent Work
          </button>

          <div className="mt-20 flex items-center gap-4">
            <img src={scroll} alt="scroll" className="w-10" />

            <span className="text-gray-400">
              Scroll down
            </span>
          </div>

        </div>

        {/* Right */}


        <div className="relative flex w-1/2 items-center justify-center pr-20">

          {/* Purple Shape */}

          <img
            src={bg}
            alt=""
            className="
            w-[500px]
            relative
            top-8
            "
           />



          <img
            src={desktop}
            alt="hero"
            className="absolute w-[680px] -left-50 top-40 "
          />

          <img 
            src={Rhand}
            alt=""
            className="absolute pt-41 pl-19 "
            />
             <img 
            src={Lhand}
            alt=""
            className="absolute pr-140 pt-72 right-34 "
            />
        

        </div>

      </div>
    </section>  
     );
};

export default Hero;
      