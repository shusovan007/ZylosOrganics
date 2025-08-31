import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Farms() {
  const [, setLocation] = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        {/* Back Button */}
         <button
      onClick={() => navigate(-1)} // go back one step in browser history
      className="flex items-center text-organic-green hover:text-green-700 transition-colors mb-8"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Back to Shop
    </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Farms</h1>
        
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          🌱 This section is <span className="font-semibold text-organic-green">Coming Soon</span>!  
          We’re working hard to bring you details about our sustainable farms and growing practices.
        </p>
      </div>
    </div>
  );
}
