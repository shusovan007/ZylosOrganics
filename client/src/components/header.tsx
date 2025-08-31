// src/components/Header.tsx
import React, { useState, useCallback } from "react";
import { ShoppingCart, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useVegetableStore } from "@/components/useVegetableStore";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

function HeaderComponent({ cartItemCount, onCartClick }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { setQuery, reset } = useVegetableStore();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    [setQuery]
  );

  const handleSearchClick = useCallback(() => {
    setOpen((prev) => !prev);

    if (!open) {
      const section = document.getElementById("products");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    if (open) reset();
  }, [open, reset]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-10 flex items-center justify-between py-4 flex-wrap">
        <h1 className="flex items-baseline space-x-2">
  <span className="text-2xl font-bold">
    <span className="text-[#99c369]">Zylos</span>
    <span className="text-[#679143]">Organics</span>
  </span>
  <span className="text-gray-500 text-sm font-normal">Fresh &amp; Natural</span>
</h1>

        {/* Search + Cart (responsive) */}
        <div className="flex flex-col sm:flex-row items-center sm:gap-4 space-y-2 sm:space-y-0 mt-2 sm:mt-0">
          {/* Search */}
          <div className="relative flex items-center">
            <AnimatePresence>
              {open && (
                <motion.input
                  key="search"
                  type="text"
                  placeholder="Search vegetables..."
                  onChange={handleChange}
                  autoFocus
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="px-3 py-1 border rounded-lg outline-none"
                />
              )}
            </AnimatePresence>
            <button onClick={handleSearchClick} className="ml-2">
              {open ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
            </button>
          </div>

          {/* Cart */}
          <button className="relative" onClick={onCartClick}>
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default React.memo(HeaderComponent);
