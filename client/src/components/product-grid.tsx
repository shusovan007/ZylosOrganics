// src/components/ProductGrid.tsx
import React, { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { vegetables, Vegetable, useVegetableStore } from "@/components/useVegetableStore";

interface ProductGridProps {
  onAddToCart: (vegetable: Vegetable, quantity: number) => void;
}

function ProductGridComponent({ onAddToCart }: ProductGridProps) {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [clickedButtons, setClickedButtons] = useState<Record<number, boolean>>({});
  const [openDescriptions, setOpenDescriptions] = useState<Record<number, boolean>>({});
  const { query } = useVegetableStore();

  // ✅ Memoized filtering
  const filtered = useMemo(() => {
    return vegetables.filter((veg) =>
      veg.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const getQuantity = useCallback((id: number) => quantities[id] ?? 0, [quantities]);

  const updateQuantity = useCallback((id: number, change: number) => {
    setQuantities((prev) => {
      const currentQty = prev[id] ?? 0;
      const newQty = Math.max(0, Math.min(1000, currentQty + change));
      return { ...prev, [id]: newQty };
    });
  }, []);

  const handleAddToCart = useCallback(
    (vegetable: Vegetable) => {
      const quantity = getQuantity(vegetable.id);
      if (quantity === 0) return;

      onAddToCart(vegetable, quantity);

      setClickedButtons((prev) => ({ ...prev, [vegetable.id]: true }));
      setTimeout(
        () => setClickedButtons((prev) => ({ ...prev, [vegetable.id]: false })),
        1200
      );

      setQuantities((prev) => ({ ...prev, [vegetable.id]: 0 }));
    },
    [getQuantity, onAddToCart]
  );

  const toggleDescription = useCallback((id: number) => {
    setOpenDescriptions((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
    Our Fresh <span className="text-green-700">Vegetables</span>
  </h2>
  <p className="mt-2 text-gray-600 text-base md:text-lg">
    Hand-picked daily from our certified organic farms, delivered fresh to your doorstep
  </p>
</div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((vegetable) => {
            const qty = getQuantity(vegetable.id);
            const clicked = clickedButtons[vegetable.id];
            const descOpen = openDescriptions[vegetable.id];

            return (
              <Card key={vegetable.id} className="rounded-2xl shadow-md overflow-hidden">
                <img
  src={vegetable.image} // fallback image
  srcSet={`
    ${vegetable.image}?w=480 480w,
    ${vegetable.image}?w=768 768w,
    ${vegetable.image}?w=1200 1200w
  `}
  sizes="(max-width: 480px) 480px,
         (max-width: 768px) 768px,
         1200px"
  alt={vegetable.name}
  width={1200} 
  height={300} 
  loading="lazy"
   style={{ willChange: "transform, opacity" }}
  className="w-full h-48 object-cover"
/>
                <CardContent className="p-4">
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold break-words">
  {vegetable.name}
</h3>

{/* Toggle Native Name */}
<button
  className="flex items-center text-sm text-green-600 mt-2"
  onClick={() => toggleDescription(vegetable.id)}
>
  
  <span className="ml-1">Native Name</span>
  <ChevronDown
    className={`w-4 h-4 transition-transform ${descOpen ? "rotate-180" : ""}`}
  />
</button>

{descOpen && (
  <p className="mt-2 text-gray-600 text-sm">{vegetable.description}</p>
)}

<p className="text-gray-500 mt-3 text-sm sm:text-base">
  ₹{vegetable.price} / kg
</p>
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 mt-3">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(vegetable.id, -0.5)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-lg">{qty}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(vegetable.id, 0.5)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

               {/* Add to Cart Button */}
<Button
  className="w-full mt-3 flex items-center justify-center gap-2"
  onClick={() => handleAddToCart(vegetable)}
>
  {clicked ? (
    <Check className="w-5 h-5 text-green-600" />
  ) : (
    <ShoppingCart className="w-5 h-5" />
  )}
  {/* Show text only on medium+ screens */}
  <span className="hidden md:inline">
    {clicked ? "Added" : "Add to Cart"}
  </span>
</Button>

                 
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(ProductGridComponent);
