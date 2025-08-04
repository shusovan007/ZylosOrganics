import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-organic-green">xyzOrganics</h4>
            <p className="text-gray-300 mb-4">
              Fresh & Natural organic vegetables delivered to your doorstep. 
              Sustainably grown, locally sourced.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-organic-green cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-organic-green cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-organic-green cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-organic-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-organic-green transition-colors">Our Farms</a></li>
              <li><a href="#" className="hover:text-organic-green transition-colors">Delivery Info</a></li>
              <li><a href="#" className="hover:text-organic-green transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>hello@xyzorganics.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Farm Fresh Locations</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 xyzOrganics. All rights reserved. Made with love for healthy living.</p>
        </div>
      </div>
    </footer>
  );
}
