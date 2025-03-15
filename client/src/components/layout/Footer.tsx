import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#2C6FBB] mb-4">WhyTrip</h3>
            <p className="text-gray-600">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-gray-600 hover:text-[#2C6FBB]">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <a className="text-gray-600 hover:text-[#2C6FBB]">Destinations</a>
                </Link>
              </li>
              <li>
                <Link href="/packages">
                  <a className="text-gray-600 hover:text-[#2C6FBB]">Tour Packages</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <a className="text-gray-600 hover:text-[#2C6FBB]">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-gray-600 hover:text-[#2C6FBB]">FAQs</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-gray-600 hover:text-[#2C6FBB]">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#2C6FBB] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2C6FBB] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2C6FBB] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2C6FBB] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} WhyTrip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
