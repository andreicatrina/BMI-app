import "./App.css";
import { LandingSection } from "./components/LandingSection/LandingSection";
import { DetailsSection } from "./components/DetailsSection/DetailsSection";
import { PageLayout } from "./components/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <LandingSection />
      <DetailsSection />
    </PageLayout>
  );
}

export default App;
