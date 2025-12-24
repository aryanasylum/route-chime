import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Bus } from "lucide-react";
import heroBus from "@/assets/hero-bus.jpg";

type TabType = "routes" | "schedules" | "find-bus";

interface HeroSectionProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const HeroSection = ({ activeTab, onTabChange }: HeroSectionProps) => {
  const tabs = [
    { id: "routes" as TabType, label: "Routes", icon: MapPin },
    { id: "schedules" as TabType, label: "Schedules", icon: Clock },
    { id: "find-bus" as TabType, label: "Find Bus", icon: Bus },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBus}
          alt="DTC Bus at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
          Welcome <span className="text-gradient">DTC Bus Scheduling</span>
        </h1>

        {/* Tab Navigation */}
        <div className="glass-nav inline-flex p-2 gap-1 mt-8 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant="tab"
                size="tab"
                data-active={activeTab === tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Info Card */}
        <div
          className="glass-card max-w-2xl mx-auto p-8 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            DTC Bus Scheduling System
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This application helps users explore Delhi Transport Corporation bus routes, view
            detailed schedules, and find the most efficient bus between any two stops using real
            GTFS transit data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
