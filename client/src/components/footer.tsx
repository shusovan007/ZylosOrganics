// src/components/Footer.tsx
import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <span className="text-2xl font-bold tracking-wide">
            <span className="text-[#99c369]">Zylos</span>
            <span className="text-[#679143]">Organics</span>
          </span>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Fresh vegetables delivered straight to your doorstep — naturally grown, always fresh.
          </p>
          <div className="flex gap-5 mt-5">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">Products</a>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link href="/farms" className="hover:text-white transition-colors">Our Farms</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-400" /> +91 90515-57004
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-400" /> zylosorganics@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-green-400" /> Kolkata, West Bengal
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
         {new Date().getFullYear()} ZylosOrganics. All rights reserved.
      </div>
    </footer>
  );
}

export default React.memo(FooterComponent);
