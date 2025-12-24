import { Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const scheduleData = [
  {
    route: "419",
    departures: ["05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30"],
    frequency: "Every 30 min",
    firstBus: "05:30 AM",
    lastBus: "10:30 PM",
  },
  {
    route: "500",
    departures: ["05:45", "06:15", "06:45", "07:15", "07:45", "08:15", "08:45"],
    frequency: "Every 30 min",
    firstBus: "05:45 AM",
    lastBus: "11:00 PM",
  },
  {
    route: "764",
    departures: ["06:00", "06:40", "07:20", "08:00", "08:40", "09:20", "10:00"],
    frequency: "Every 40 min",
    firstBus: "06:00 AM",
    lastBus: "10:00 PM",
  },
];

const SchedulesPanel = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bus <span className="text-gradient">Schedules</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View detailed timing information for all DTC bus routes
          </p>
        </div>

        <div className="space-y-6">
          {scheduleData.map((schedule, index) => (
            <div
              key={schedule.route}
              className="glass-card p-6 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/20 text-accent font-bold text-xl">
                    {schedule.route}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      Route {schedule.route}
                    </h3>
                    <p className="text-sm text-muted-foreground">{schedule.frequency}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">First:</span>
                    <span className="text-foreground font-medium">{schedule.firstBus}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-destructive" />
                    <span className="text-muted-foreground">Last:</span>
                    <span className="text-foreground font-medium">{schedule.lastBus}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {schedule.departures.map((time) => (
                  <div
                    key={time}
                    className="px-4 py-2 rounded-lg bg-secondary/80 text-foreground font-medium text-sm"
                  >
                    {time}
                  </div>
                ))}
                <div className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm">
                  +more
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="glass" size="lg">
            <Calendar className="w-5 h-5 mr-2" />
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchedulesPanel;
