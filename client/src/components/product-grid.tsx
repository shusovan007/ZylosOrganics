import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { vegetables, Vegetable } from "@/data/vegetables";
import { useVegetableStore } from "@/components/useVegetableStore";

interface ProductGridProps {
  onAddToCart: (vegetable: Vegetable, quantity: number) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [clickedButtons, setClickedButtons] = useState<Record<number, boolean>>({});
  const [openDescriptions, setOpenDescriptions] = useState<Record<number, boolean>>({});
  const { filtered } = useVegetableStore();

  const getQuantity = (id: number) => quantities[id] ?? 0;

  const updateQuantity = (id: number, change: number) => {
    const currentQty = getQuantity(id);
    const newQty = Math.max(0, Math.min(10, currentQty + change));
    setQuantities(prev => ({ ...prev, [id]: newQty }));
  };

  const handleAddToCart = (vegetable: Vegetable) => {
    const quantity = getQuantity(vegetable.id);
    if (quantity === 0) return;

    onAddToCart(vegetable, quantity);

    setClickedButtons(prev => ({ ...prev, [vegetable.id]: true }));
    setTimeout(() => setClickedButtons(prev => ({ ...prev, [vegetable.id]: false })), 1200);

    setQuantities(prev => ({ ...prev, [vegetable.id]: 0 }));
  };

  const toggleDescription = (id: number) => {
    setOpenDescriptions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Fresh Vegetables</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked daily from our certified organic farms, delivered fresh to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((vegetable) => {
            const qty = getQuantity(vegetable.id);
            const clicked = clickedButtons[vegetable.id];
            const descOpen = openDescriptions[vegetable.id];

            return (
              <Card
                key={vegetable.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col text-sm sm:text-base min-h-[400px]"
              >
                <div className="relative h-36 sm:h-48 w-full flex-shrink-0">
                  <img
                    src={vegetable.image}
                    alt={vegetable.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>

                <CardContent className="p-2 sm:p-4 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{vegetable.name}</h4>

                  <div className="mb-2">
                    <Button
  variant="ghost"
  size="icon"
  onClick={() => toggleDescription(vegetable.id)}
  className={`w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200 text-sm sm:text-base`}
>
  <span className="font-medium">
    More Details
  </span>
  <ChevronDown
    className={`w-4 h-4 transition-transform duration-300 ${descOpen ? "rotate-180" : "rotate-0"}`}
  />
</Button>

{descOpen && (
  <p className="text-gray-600 text-xs sm:text-sm mt-2">
    {vegetable.description}
  </p>
)}
                  </div>

                  <div className="flex items-center justify-between mb-2 text-sm sm:text-base">
                    <span className="text-lg sm:text-xl font-bold text-organic-green">
                      ₹{vegetable.price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">per kg</span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-2">
  {/* Only show "Qty:" on small screens and above */}
  <label className="hidden sm:block text-xs sm:text-sm font-medium text-gray-700">Qty:</label>

  <div className="flex items-center border border-gray-300 rounded-md">
    <Button
      variant="ghost"
      size="icon"
      onClick={() => updateQuantity(vegetable.id, -1)}
      className="px-1 py-0 sm:px-2 sm:py-1 text-gray-600 hover:text-organic-green h-6 sm:h-8"
    >
      <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
    </Button>
    <span className="w-6 text-center text-xs sm:text-sm font-medium">{qty}</span>
    <Button
      variant="ghost"
      size="icon"
      onClick={() => updateQuantity(vegetable.id, 1)}
      className="px-1 py-0 sm:px-2 sm:py-1 text-gray-600 hover:text-organic-green h-6 sm:h-8"
    >
      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
    </Button>
  </div>
</div>

                  {/* Add to cart button */}
                  <Button
                    onClick={() => handleAddToCart(vegetable)}
                    disabled={qty === 0}
                    className={`relative w-full font-semibold py-2 px-2 sm:px-4 rounded-lg transition-all duration-300 flex items-center justify-center
                      ${qty === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-organic-green text-white"
                      }`}
                  >
                    {clicked && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <span
                            key={i}
                            className={`absolute w-2 h-2 bg-white rounded-full sparkle sparkle-${i}`}
                          ></span>
                        ))}
                      </>
                    )}

                    {/* Show icon only on small screens */}
                    <span className="sm:hidden">
                      <ShoppingCart className="w-5 h-5" />
                    </span>

                    {/* Show full text on larger screens */}
                    <span className="hidden sm:flex items-center">
                      {clicked ? (
                        <>
                          <Check className="w-4 h-4 mr-1 sm:mr-2" /> Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-1 sm:mr-2" /> Add to Cart
                        </>
                      )}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Sparkle animations */}
      <style>{`
        @keyframes sparkle {
          0% { transform: translate(0,0) scale(0); opacity: 1; }
          50% { transform: translate(var(--x), var(--y)) scale(1); opacity: 1; }
          100% { transform: translate(var(--x), var(--y)) scale(0); opacity: 0; }
        }

        ${[...Array(6)].map((_, i) => `
          .sparkle-${i} {
            --x: ${Math.floor(Math.random()*60-30)}px;
            --y: ${Math.floor(Math.random()*-60)}px;
            animation: sparkle 0.8s ease-out forwards;
          }
        `).join("\n")}
      `}</style>
    </section>
  );
}
