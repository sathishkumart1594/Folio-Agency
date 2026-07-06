
import ByTheNumbers from "../WorkBoard/ByTheNumbers";
import Contact from "../WorkBoard/Contact";
import DesignSystem from "../WorkBoard/DesignSystem";
import Footer from "../WorkBoard/Footer";
import LookAndFeel from "../WorkBoard/LookAndFeel";
import RecentWorks from "../WorkBoard/RecentWorks";
import StyleguideBanner from "../WorkBoard/StyleguideBanner";
import WorkHero from "../WorkBoard/WorkHero";

const Work = () => {
  return (
    <main className="overflow-hidden">
      <WorkHero />
      <DesignSystem />
      <ByTheNumbers />
      <LookAndFeel />
      <StyleguideBanner />
      <RecentWorks />
      <Contact />
      <Footer />
    </main>
  );
};

export default Work;