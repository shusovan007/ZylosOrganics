// src/components/Header.tsx
import React, { useState, useCallback } from "react";
import { ShoppingCart, Search, X, Leaf } from "lucide-react";
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
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 w-full shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* ======= MOBILE LAYOUT (<sm) ======= */}
        <div className="flex sm:hidden flex-col w-full py-3">
          {/* Top row: Brand (left) + Cart (right) */}
          <div className="flex items-center justify-between">
            <h1 className="leading-tight">
              <span className="block text-3xl font-extrabold tracking-tight">
                <span className="text-[#99c369]">Zylos</span>
                <span className="text-[#679143]">Organics</span>
              </span>
              <span className="block text-sm text-green-700 mt-0.5 font-serif italic flex items-center gap-1">
                Fresh &amp; Natural <Leaf className="w-4 h-4 text-green-600" />
              </span>
            </h1>

            {/* Cart */}
            <button
              type="button"
              aria-label="Open cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] leading-none rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Second row: Search below */}
          <div className="mt-3">
            <div className="relative flex items-center">
              <AnimatePresence initial={false}>
                {open && (
                  <motion.input
                    key="mobile-search"
                    type="text"
                    placeholder="Search vegetables..."
                    onChange={handleChange}
                    autoFocus
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="w-full px-3 py-2 border rounded-lg outline-none shadow-sm focus:ring-2 focus:ring-green-300"
                  />
                )}
              </AnimatePresence>
              <button
                type="button"
                aria-label={open ? "Close search" : "Open search"}
                onClick={handleSearchClick}
                className={`ml-2 p-2 rounded-lg hover:bg-gray-100 transition ${
                  open ? "" : "border border-gray-200"
                }`}
              >
                {open ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ======= DESKTOP LAYOUT (sm+) ======= */}
        <div className="hidden sm:flex items-center justify-between py-4">
          {/* Brand */}
          <h1 className="leading-tight">
            <span className="block text-3xl font-extrabold tracking-tight">
              <span className="text-[#99c369]">Zylos</span>
              <span className="text-[#679143]">Organics</span>
            </span>
            <span className="block text-sm text-green-700 mt-0.5 font-serif italic flex items-center gap-1">
              Fresh &amp; Natural <Leaf className="w-4 h-4 text-green-600" />
            </span>
          </h1>

          {/* Search + Cart */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative flex items-center">
              <AnimatePresence initial={false}>
                {open && (
                  <motion.input
                    key="desktop-search"
                    type="text"
                    placeholder="Search vegetables..."
                    onChange={handleChange}
                    autoFocus
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 260, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="px-3 py-2 border rounded-lg outline-none shadow-sm focus:ring-2 focus:ring-green-300"
                  />
                )}
              </AnimatePresence>
              <button
                type="button"
                aria-label={open ? "Close search" : "Open search"}
                onClick={handleSearchClick}
                className={`ml-2 p-2 rounded-lg hover:bg-gray-100 transition ${
                  open ? "" : "border border-gray-200"
                }`}
              >
                {open ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
              </button>
            </div>

            {/* Cart */}
            <button
              type="button"
              aria-label="Open cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] leading-none rounded-full w-5 h-5 flex items-center justify-center">
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

export default React.memo(HeaderComponent);
