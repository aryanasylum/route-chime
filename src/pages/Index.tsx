import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import RoutesPanel from "@/components/home/RoutesPanel";
import SchedulesPanel from "@/components/home/SchedulesPanel";
import FindBusPanel from "@/components/home/FindBusPanel";

type TabType = "routes" | "schedules" | "find-bus";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("routes");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection activeTab={activeTab} onTabChange={setActiveTab} />
        <FeaturesSection />

        {/* Tab Content */}
        {activeTab === "routes" && <RoutesPanel />}
        {activeTab === "schedules" && <SchedulesPanel />}
        {activeTab === "find-bus" && <FindBusPanel />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
