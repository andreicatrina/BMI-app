import "./App.css";
import { LandingSection } from "./components/LandingSection/LandingSection";
import { DetailsSection } from "./components/DetailsSection/DetailsSection";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { ExplanationsSection } from "./components/ExplanationsSection/ExplanationsSection";

function App() {
  return (
    <PageLayout>
      <LandingSection />
      <DetailsSection />
      <ExplanationsSection />
    </PageLayout>
  );
}

export default App;
