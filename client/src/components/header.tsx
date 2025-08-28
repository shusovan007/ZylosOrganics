import { ShoppingCart } from "lucide-react";
import { Search, X } from "lucide-react";
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

    // scroll to ProductGrid if opening search
    if (!open) {
      const section = document.getElementById("products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    // reset when closing search
    if (open) {
      reset();
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-organic-green">
              ZylosOrganics
            </h1>
            <span className="ml-2 text-sm text-gray-600 hidden sm:inline">
              Fresh & Natural
            </span>
          </div>

          {/* Right Side: Search + Cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative p-2 text-gray-400 hover:text-organic-green transition-colors">
              <AnimatePresence>
                {open && (
                  <motion.input
                    type="text"
                    placeholder="Search your items..."
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 340, opacity: 1 }}
                    onChange={handleChange}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pl-4 pr-10 py-2 rounded-full bg-gray-200 text-gray-800 placeholder-gray-500
                               shadow-lg focus:outline-none focus:ring-0 border-0 
                               absolute right-14"
                    autoFocus
                  />
                )}
              </AnimatePresence>

              <button
                onClick={handleSearchClick}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {open ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
              </button>
            </div>

            {/* Cart */}
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
