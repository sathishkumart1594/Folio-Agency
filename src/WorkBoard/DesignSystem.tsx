import overviewImage from "../assets/images1/overview_image.png";
import overviewContent from "../assets/images1/overview_content.png";
import overviewFeatures from "../assets/images1/overview_features.png";

const DesignSystem = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">

        {/* ================= OVERVIEW SECTION ================= */}

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ================= LEFT IMAGE ================= */}

          <div className="flex self-start justify-center pt-4">
             <img
                src={overviewImage}
                alt="Bento editable 3D visual design system"
                 className="w-full max-w-[560px] object-contain"
               />
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="flex flex-col">

            {/* Overview Heading + Description */}

            <img
              src={overviewContent}
              alt="The First Fully Editable, 3D Visual Design System"
              className="w-full max-w-[600px] object-contain"
            />

            {/* Feature Cards */}

            <img
              src={overviewFeatures}
              alt="Fully Editable and High Resolution features"
              className="mt-14 w-full max-w-[600px] object-contain"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSystem;
