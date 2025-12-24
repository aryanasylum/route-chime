import { MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleRoutes = [
  { id: "419", name: "Route 419", from: "ISBT Kashmere Gate", to: "Nehru Place", stops: 24 },
  { id: "500", name: "Route 500", from: "Connaught Place", to: "Dwarka Sector 21", stops: 32 },
  { id: "764", name: "Route 764", from: "Anand Vihar ISBT", to: "Saket Metro Station", stops: 28 },
  { id: "181", name: "Route 181", from: "Delhi Gate", to: "Vasant Kunj", stops: 35 },
  { id: "604", name: "Route 604", from: "Mori Gate", to: "Rohini Sector 3", stops: 22 },
  { id: "340", name: "Route 340", from: "ISBT Kashmere Gate", to: "Noida Sector 62", stops: 41 },
];

const RoutesPanel = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular <span className="text-gradient">Bus Routes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the most frequently used DTC bus routes across Delhi NCR
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleRoutes.map((route, index) => (
            <div
              key={route.id}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent font-bold text-lg">
                    {route.id}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{route.name}</h3>
                    <p className="text-sm text-muted-foreground">{route.stops} stops</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                  <span className="text-sm text-foreground">{route.from}</span>
                </div>
                <div className="ml-1.5 w-0.5 h-4 bg-border" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive ring-4 ring-destructive/20" />
                  <span className="text-sm text-foreground">{route.to}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="glass" size="lg">
            View All Routes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoutesPanel;
