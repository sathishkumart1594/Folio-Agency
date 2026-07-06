import recentWorksTitle from "../assets/images1/RW_Title and Arrow.png";
import recentWorksArrow from "../assets/images1/RW_Arrow.png";
import recentWorksSlide from "../assets/images1/RW_Work Slide.png";

const RecentWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-10">

        {/* ================= TITLE ================= */}

        <div className="flex items-center justify-between">

          <img
            src={recentWorksTitle}
            alt="Recent Works"
            className="w-full max-w-[720px] object-contain"
          />

          <img
            src={recentWorksArrow}
            alt="navigation"
            className="w-[145px] shrink-0 object-contain"
          />

        </div>


        {/* ================= WORK SLIDES ================= */}

        <div className="mt-20 flex justify-center">

          <img
            src={recentWorksSlide}
            alt="Recent work projects"
            className="w-full max-w-[1100px] object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default RecentWorks;