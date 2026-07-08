import recentWorksTitle from "../assets/images1/RW_Title and Arrow.png";
import recentWorksArrow from "../assets/images1/RW_Arrow.png";
import recentWorksSlide from "../assets/images1/RW_Work Slide.png";

const RecentWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TITLE ================= */}

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

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

        <div className="mt-14 flex justify-center sm:mt-20">

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
