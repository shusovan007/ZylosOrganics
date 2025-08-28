import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #f0fdf4, #dcfce7)", // soft green gradient
      }}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full relative border border-gray-100">
        {/* Back Button */}
        <button
          onClick={() => setLocation("/")}
          className="flex items-center text-organic-green hover:text-green-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </button>

        {/* Heading */}
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6 text-center tracking-wide">
          About <span className="text-organic-green">ZylosOrganics</span>
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            At <span className="font-semibold text-organic-green">ZylosOrganics</span>, 
            we are committed to bringing you the freshest, healthiest, and most 
            sustainable vegetables directly to your home.
          </p>
          <p className="mb-6">
            Our goal is simple — to make healthy living accessible while supporting 
            local farmers and encouraging eco-friendly practices.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-3 border-l-4 border-organic-green pl-3">
            Our Story
          </h2>
          <p className="mb-6">
            Founded with a vision to reconnect people with natural food, 
            ZylosOrganics partners with trusted local farms to deliver produce 
            that is not only fresh but also cultivated without harmful chemicals. 
            Every basket of vegetables represents our commitment to health, 
            sustainability, and community well-being.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-3 border-l-4 border-organic-green pl-3">
            Why Choose Us
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Naturally grown vegetables</li>
            <li>Direct sourcing from local farmers</li>
            <li>Sustainable, eco-conscious farming practices</li>
            <li>Reliable & timely doorstep delivery</li>
          </ul>

          <p className="mt-8 text-gray-800 font-medium">
            Thank you for trusting <span className="text-organic-green">ZylosOrganics</span>.  
            Together, we can make the world healthier — one harvest at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
