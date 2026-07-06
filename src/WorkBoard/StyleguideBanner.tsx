import lfCTA from "../assets/images1/LF_CTA.png";

const StyleguideBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white ">
        <div className=" flex justify-center">

          <img
            src={lfCTA}
            alt="Auto-updatable global styleguide"
            className="w-full max-w-[1200px] object-contain"
          />

        </div>
        </section>
    );
}
export default StyleguideBanner;