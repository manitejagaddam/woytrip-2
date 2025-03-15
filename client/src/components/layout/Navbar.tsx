import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

import logo from "../../assets/images/logo.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            {/* <a className="text-2xl font-bold text-primary">WoyTrip</a> */}
            <a>
            <img src={logo} alt="logo" />

            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/"><a className="text-foreground hover:text-primary">Home</a></Link>
            <Link href="/destinations"><a className="text-foreground hover:text-primary">Destinations</a></Link>
            <Link href="/about"><a className="text-foreground hover:text-primary">About</a></Link>
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <a className="block px-3 py-2 text-foreground hover:text-primary">Home</a>
              </Link>
              <Link href="/destinations">
                <a className="block px-3 py-2 text-foreground hover:text-primary">Destinations</a>
              </Link>
              <Link href="/about">
                <a className="block px-3 py-2 text-foreground hover:text-primary">About</a>
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}