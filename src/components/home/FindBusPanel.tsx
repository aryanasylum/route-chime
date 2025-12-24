import { useState } from "react";
import { Search, MapPin, ArrowRight, Bus, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const popularStops = [
  "ISBT Kashmere Gate",
  "Connaught Place",
  "Nehru Place",
  "Anand Vihar ISBT",
  "Dwarka Sector 21",
  "Saket Metro Station",
];

const searchResults = [
  {
    route: "419",
    from: "ISBT Kashmere Gate",
    to: "Nehru Place",
    duration: "45 min",
    fare: "₹25",
    nextBus: "5 min",
  },
  {
    route: "500",
    from: "ISBT Kashmere Gate",
    to: "Nehru Place",
    duration: "52 min",
    fare: "₹30",
    nextBus: "12 min",
  },
];

const FindBusPanel = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (source && destination) {
      setHasSearched(true);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your <span className="text-gradient">Bus</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter your pickup and destination stops to find the best bus route
          </p>
        </div>

        {/* Search Form */}
        <div className="glass-card max-w-3xl mx-auto p-8 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <Input
                type="text"
                placeholder="Enter pickup stop"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="pl-12 h-14 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="p-2 rounded-full bg-primary/20 text-primary">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="flex-1 relative">
              <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />
              <Input
                type="text"
                placeholder="Enter destination stop"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-12 h-14 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <Button
            variant="accent"
            size="lg"
            className="w-full"
            onClick={handleSearch}
          >
            <Search className="w-5 h-5 mr-2" />
            Find Bus Routes
          </Button>

          {/* Popular Stops */}
          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-3">Popular stops:</p>
            <div className="flex flex-wrap gap-2">
              {popularStops.map((stop) => (
                <button
                  key={stop}
                  onClick={() => !source ? setSource(stop) : setDestination(stop)}
                  className="px-3 py-1.5 rounded-lg bg-secondary/60 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {stop}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div className="max-w-3xl mx-auto mt-8 space-y-4 animate-slide-up">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Available Routes
            </h3>
            {searchResults.map((result) => (
              <div
                key={result.route}
                className="glass-card p-6 hover:border-primary/40 transition-all cursor-pointer"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Bus className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">
                        Route {result.route}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {result.from} → {result.to}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{result.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Fare</p>
                      <p className="font-semibold text-accent">{result.fare}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Next Bus</p>
                      <p className="font-semibold text-green-500">{result.nextBus}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FindBusPanel;
