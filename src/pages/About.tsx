import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Bus, Users, MapPin, Clock, Shield, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Daily Riders", value: "4.5M+", icon: Users },
    { label: "Bus Routes", value: "700+", icon: MapPin },
    { label: "Bus Stops", value: "6,500+", icon: Bus },
    { label: "Years of Service", value: "75+", icon: Clock },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Comprehensive Coverage",
      description: "Our network spans across Delhi NCR, connecting major hubs, residential areas, and commercial zones.",
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Count on DTC for consistent, safe, and comfortable travel experience across the city.",
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Get live updates on bus arrivals, schedule changes, and route information through our digital platform.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient">DTC Bus Scheduling</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Delhi Transport Corporation (DTC) is one of India's largest public bus
                transport operators. Our scheduling system helps millions of commuters navigate
                Delhi's extensive bus network with ease.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-card p-6 text-center animate-slide-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <p className="font-display text-3xl font-bold text-gradient mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To provide accessible, affordable, and environmentally sustainable public
                  transportation to the people of Delhi. We are committed to continuously
                  improving our services through technology and innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This digital scheduling platform represents our commitment to making public
                  transport more user-friendly. By leveraging GTFS data and modern web
                  technologies, we aim to make trip planning seamless for every commuter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Why Choose <span className="text-gradient">DTC</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="glass-card p-8 animate-slide-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
