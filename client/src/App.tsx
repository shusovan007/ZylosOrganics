import { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import Farms from "@/pages/farms";
import NotFound from "@/pages/not-found";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 splash-bg">
          <img
            src="https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/logo.jpeg"
            alt="Zylos Logo"
            className="w-40 h-40 logo-animation"
          />
          <p className="mt-4 text-green-700 font-semibold text-lg animate-pulse">
            Freshness is loading...
          </p>
        </div>
      ) : (
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <div className="fade-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/farms" element={<Farms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      )}

      <style>{`
        /* Fade in main app */
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Splash background: white center to green edges */
        .splash-bg {
          background: radial-gradient(circle, #ffffff 40%, #d1f7c4 80%, #80c783 100%);
        }

        /* Logo scale + glow animation */
        @keyframes scaleGlow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(0,128,0,0.3); }
          50% { transform: scale(1.1); box-shadow: 0 0 40px rgba(0,128,0,0.6); }
        }
        .logo-animation {
          animation: scaleGlow 2.5s infinite ease-in-out;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default App;
