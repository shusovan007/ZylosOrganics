import { ShoppingCart, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useVegetableStore } from "@/components/useVegetableStore";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { setQuery, reset } = useVegetableStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setOpen((prev) => !prev);

    if (!open) {
      const section = document.getElementById("products");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    if (open) reset();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full py-2 sm:py-3 gap-2">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-organic-green">ZylosOrganics</h1>
            <span className="text-sm text-gray-600 hidden sm:inline">Fresh & Natural</span>
          </div>

          {/* Right: Search + Cart */}
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            {/* Search input + button */}
            <div className="relative flex items-center w-full sm:w-auto">
              <AnimatePresence>
                {open && (
                  <motion.input
                    type="text"
                    placeholder="Search your items..."
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '200px' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    onChange={handleChange}
                    autoFocus
                    className="pl-4 pr-10 py-2 rounded-full
                      bg-gray-200 text-gray-800 placeholder-gray-500 shadow-lg 
                      focus:outline-none focus:ring-0 border-0 w-full sm:w-52"
                  />
                )}
              </AnimatePresence>

              {/* Search button */}
              <button
                onClick={handleSearchClick}
                className="absolute right-1 p-2 rounded-full hover:bg-gray-100 transition"
              >
                {open ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
            </div>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-organic-green transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-warm-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
