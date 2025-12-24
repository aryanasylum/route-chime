import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bus, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between glass-nav px-6 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Bus className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              DTC <span className="text-primary">Bus</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="nav"
                  size="nav"
                  className={location.pathname === link.path ? "text-foreground bg-secondary/50" : ""}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="nav">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="accent" size="default">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-card p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="nav"
                    className={`w-full justify-start ${location.pathname === link.path ? "bg-secondary/50" : ""}`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <hr className="border-border/30 my-2" />
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="accent" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
