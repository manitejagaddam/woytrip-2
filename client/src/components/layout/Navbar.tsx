import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-2xl font-bold text-[#2C6FBB]">WhyTrip</a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/"><a className="text-gray-700 hover:text-[#2C6FBB]">Home</a></Link>
            <Link href="/destinations"><a className="text-gray-700 hover:text-[#2C6FBB]">Destinations</a></Link>
            <Link href="/about"><a className="text-gray-700 hover:text-[#2C6FBB]">About</a></Link>
            <Button className="bg-[#6EC1E4] hover:bg-[#2C6FBB] text-white">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <a className="block px-3 py-2 text-gray-700 hover:text-[#2C6FBB]">Home</a>
              </Link>
              <Link href="/destinations">
                <a className="block px-3 py-2 text-gray-700 hover:text-[#2C6FBB]">Destinations</a>
              </Link>
              <Link href="/about">
                <a className="block px-3 py-2 text-gray-700 hover:text-[#2C6FBB]">About</a>
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#6EC1E4] hover:bg-[#2C6FBB] text-white">
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
