import Hero from "./_pages/hero";
import Solutions from "./_pages/solutions";
import CloudFeatures1 from "./_pages/cloud/CloudFeatures1";
import CloudFeatures2 from "./_pages/cloud/CloudFeatures2";
import DigitalBankingPages from "./_pages/DigitalBankingPages";
import CaseStudies from "./_pages/CaseStudies";
import Insights from "./_pages/Insights";

import FeaturesStrip from "./_components/FeaturesStrip";
import Paperless2 from "./_components/Paperless2";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Hero />
      <Solutions />
      <CloudFeatures1 />
      <CloudFeatures2 />
      <FeaturesStrip />
      <DigitalBankingPages />
      <Insights />
      <CaseStudies />
      <Paperless2 />
      <Footer />
    </main>
  );
}
