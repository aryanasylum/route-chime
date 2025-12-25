-- Create bus routes table
CREATE TABLE public.bus_routes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  route_number TEXT NOT NULL UNIQUE,
  route_name TEXT NOT NULL,
  from_location TEXT NOT NULL,
  to_location TEXT NOT NULL,
  total_stops INTEGER NOT NULL DEFAULT 0,
  distance_km DECIMAL(5,2),
  estimated_time_minutes INTEGER,
  fare DECIMAL(5,2),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bus stops table
CREATE TABLE public.bus_stops (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stop_name TEXT NOT NULL,
  stop_code TEXT UNIQUE,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  area TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create route_stops junction table for route-stop relationship
CREATE TABLE public.route_stops (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  route_id UUID REFERENCES public.bus_routes(id) ON DELETE CASCADE NOT NULL,
  stop_id UUID REFERENCES public.bus_stops(id) ON DELETE CASCADE NOT NULL,
  stop_order INTEGER NOT NULL,
  arrival_time_offset INTEGER, -- minutes from start
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(route_id, stop_id),
  UNIQUE(route_id, stop_order)
);

-- Create schedules table
CREATE TABLE public.bus_schedules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  route_id UUID REFERENCES public.bus_routes(id) ON DELETE CASCADE NOT NULL,
  bus_number TEXT NOT NULL,
  departure_time TIME NOT NULL,
  arrival_time TIME NOT NULL,
  days_of_week TEXT[] DEFAULT ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create buses table for live tracking
CREATE TABLE public.buses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  bus_number TEXT NOT NULL UNIQUE,
  route_id UUID REFERENCES public.bus_routes(id) ON DELETE SET NULL,
  current_latitude DECIMAL(10,8),
  current_longitude DECIMAL(11,8),
  current_stop_id UUID REFERENCES public.bus_stops(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'inactive' CHECK (status IN ('active', 'inactive', 'maintenance')),
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (public read access for bus data)
ALTER TABLE public.bus_routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bus_stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bus_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.buses ENABLE ROW LEVEL SECURITY;

-- Create public read policies (bus schedule data is public information)
CREATE POLICY "Anyone can view bus routes" ON public.bus_routes FOR SELECT USING (true);
CREATE POLICY "Anyone can view bus stops" ON public.bus_stops FOR SELECT USING (true);
CREATE POLICY "Anyone can view route stops" ON public.route_stops FOR SELECT USING (true);
CREATE POLICY "Anyone can view bus schedules" ON public.bus_schedules FOR SELECT USING (true);
CREATE POLICY "Anyone can view buses" ON public.buses FOR SELECT USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_bus_routes_updated_at
  BEFORE UPDATE ON public.bus_routes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bus_schedules_updated_at
  BEFORE UPDATE ON public.bus_schedules
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for buses table (for live tracking)
ALTER PUBLICATION supabase_realtime ADD TABLE public.buses;