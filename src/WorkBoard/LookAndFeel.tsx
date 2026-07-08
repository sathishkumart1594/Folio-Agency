import lfContent from "../assets/images1/LF_Content.png";
import lfFeatureBoard from "../assets/images1/LF_feature board.png";

const LookAndFeel = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TOP ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}

          <div className="flex justify-center">
            <img
              src={lfContent}
              alt="Visual identity content"
              className="w-full max-w-[520px] object-contain"
            />
          </div>


          {/* Right Feature Board */}

          <div className="flex justify-center">
            <img
              src={lfFeatureBoard}
              alt="Feature board"
              className="w-full max-w-[560px] object-contain"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default LookAndFeel;
