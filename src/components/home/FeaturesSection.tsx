import { MapPin, Search, Database } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Routes & Schedules",
    description:
      "The platform displays all DTC bus routes with clear, stop-wise schedules using structured GTFS data across Delhi.",
  },
  {
    icon: Search,
    title: "Smart Bus Search",
    description:
      "Users can select pickup and destination stops to quickly find the most efficient bus route, reducing confusion and saving time.",
  },
  {
    icon: Database,
    title: "Real-Time Data",
    description:
      "Built with React, Node.js, Express, and PostgreSQL to ensure fast, reliable, real-world public transport data handling.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gradient mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
