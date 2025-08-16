// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
// import { vegetables } from "@/data/vegetables";
// import { Vegetable } from "@/data/vegetables";

// interface ProductGridProps {
//   onAddToCart: (vegetable: Vegetable, quantity: number) => void;
// }

// export default function ProductGrid({ onAddToCart }: ProductGridProps) {
//   const [quantities, setQuantities] = useState<Record<number, number>>({});
//   const [addedQuantities, setAddedQuantities] = useState<Record<number, number>>({});
//   const [clickedButtons, setClickedButtons] = useState<Record<number, boolean>>({});

//   const getQuantity = (id: number) => quantities[id] || 1;

//   const updateQuantity = (id: number, change: number) => {
//     const currentQty = getQuantity(id);
//     const newQty = Math.max(1, Math.min(10, currentQty + change));
//     setQuantities(prev => ({ ...prev, [id]: newQty }));
//   };

//   const handleAddToCart = (vegetable: Vegetable) => {
//     const quantity = getQuantity(vegetable.id);
//     onAddToCart(vegetable, quantity);

//     // Show badge for this product
//     setAddedQuantities(prev => ({ ...prev, [vegetable.id]: quantity }));

//     // Button click feedback
//     setClickedButtons(prev => ({ ...prev, [vegetable.id]: true }));

//     // Hide badge after 2.5 seconds
//     setTimeout(() => {
//       setAddedQuantities(prev => {
//         const updated = { ...prev };
//         delete updated[vegetable.id];
//         return updated;
//       });
//     }, 1200);

//     // Reset button state after 1 second
//     setTimeout(() => {
//       setClickedButtons(prev => ({ ...prev, [vegetable.id]: false }));
//     }, 1200);

//     // Reset selector back to 1
//     setQuantities(prev => ({ ...prev, [vegetable.id]: 1 }));
//   };

//   return (
//     <section id="products" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Fresh Vegetables</h3>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Hand-picked daily from our certified organic farms, delivered fresh to your doorstep
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {vegetables.map((vegetable) => (
//             <Card key={vegetable.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <img 
//                 src={vegetable.image} 
//                 alt={vegetable.name}
//                 className="w-full h-48 object-cover"
//               />
//               <CardContent className="p-6">
//                 <h4 className="text-xl font-semibold text-gray-900 mb-2">{vegetable.name}</h4>
//                 <p className="text-gray-600 text-sm mb-4">{vegetable.description}</p>
                
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-2xl font-bold text-organic-green">₹{vegetable.price}</span>
//                   <span className="text-sm text-gray-500">per kg</span>
//                 </div>

//                 {/* Temporary badge after add */}
//                <div className="h-8 flex items-center justify-end mb-2 overflow-hidden">
//   {addedQuantities[vegetable.id] && (
//     <div
//       className="flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg
//                  bg-gradient-to-r from-green-500 to-green-600 text-white
//                  text-sm font-medium backdrop-blur-sm
//                  transition-all duration-500 ease-in-out transform
//                  animate-fade-slide"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-4 w-4 text-white"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M7 13L5.4 5M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z" />
//       </svg>
//       <span>
//         Added <strong>{addedQuantities[vegetable.id]} kg</strong> to cart
//       </span>
//     </div>
//   )}
// </div>

//                 <div className="flex items-center space-x-3 mb-4">
//                   <label className="text-sm font-medium text-gray-700">Qty:</label>
//                   <div className="flex items-center border border-gray-300 rounded-lg">
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => updateQuantity(vegetable.id, -1)}
//                       className="px-3 py-1 text-gray-600 hover:text-organic-green h-8"
//                     >
//                       <Minus className="w-4 h-4" />
//                     </Button>
//                     <span className="w-12 text-center text-sm font-medium">
//                       {getQuantity(vegetable.id)}
//                     </span>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => updateQuantity(vegetable.id, 1)}
//                       className="px-3 py-1 text-gray-600 hover:text-organic-green h-8"
//                     >
//                       <Plus className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 <Button 
//                   onClick={() => handleAddToCart(vegetable)}
//                   className={`w-full font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center
//                     ${clickedButtons[vegetable.id] 
//                       ? "bg-green-600 hover:bg-green-600 text-white" 
//                       : "bg-organic-green hover:bg-organic-green/90 text-white"}`}
//                 >
//                   {clickedButtons[vegetable.id] ? (
//                     <>
//                       <Check className="w-4 h-4 mr-2" /> Added
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
//                     </>
//                   )}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { vegetables } from "@/data/vegetables";
import { Vegetable } from "@/data/vegetables";

interface ProductGridProps {
  onAddToCart: (vegetable: Vegetable, quantity: number) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [cartTotals, setCartTotals] = useState<Record<number, number>>({});
  const [clickedButtons, setClickedButtons] = useState<Record<number, boolean>>({});

  const getQuantity = (id: number) => quantities[id] ?? 0;

  const updateQuantity = (id: number, change: number) => {
    const currentQty = getQuantity(id);
    const newQty = Math.max(0, Math.min(10, currentQty + change));
    setQuantities(prev => ({ ...prev, [id]: newQty }));
  };

  const handleAddToCart = (vegetable: Vegetable) => {
    const quantity = getQuantity(vegetable.id);
    if (quantity === 0) return;

    // Update cart totals (accumulate)
    setCartTotals(prev => ({
      ...prev,
      [vegetable.id]: (prev[vegetable.id] ?? 0) + quantity
    }));

    // Notify parent
    onAddToCart(vegetable, quantity);

    // Button feedback
    setClickedButtons(prev => ({ ...prev, [vegetable.id]: true }));
    setTimeout(() => setClickedButtons(prev => ({ ...prev, [vegetable.id]: false })), 1200);

    // Reset selector
    setQuantities(prev => ({ ...prev, [vegetable.id]: 0 }));
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vegetables.map((vegetable) => {
            const qty = getQuantity(vegetable.id);
            const total = cartTotals[vegetable.id] ?? 0;
            const clicked = clickedButtons[vegetable.id];

            return (
              <Card key={vegetable.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                <div className="relative">
                  <img 
                    src={vegetable.image} 
                    alt={vegetable.name}
                    className="w-full h-48 object-cover"
                  />

                 {/* Elegant circle showing total added to cart */}
{total > 0 && (
  <div className="absolute right-3 top-3 z-20 w-10 h-10 flex items-center justify-center 
                  rounded-full bg-gradient-to-r from-green-500 to-green-700 
                  text-white text-sm font-bold shadow-xl border-2 border-white animate-pop-glow">
    {total}
  </div>
)}
                </div>

                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{vegetable.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{vegetable.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-organic-green">₹{vegetable.price}</span>
                    <span className="text-sm text-gray-500">per kg</span>
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <label className="text-sm font-medium text-gray-700">Qty:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(vegetable.id, -1)}
                        className="px-3 py-1 text-gray-600 hover:text-organic-green h-8"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center text-sm font-medium">{qty}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(vegetable.id, 1)}
                        className="px-3 py-1 text-gray-600 hover:text-organic-green h-8"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleAddToCart(vegetable)}
                    disabled={qty === 0}
                    className={`w-full font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center
                      ${qty === 0 
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                        : clicked 
                          ? "bg-green-600 hover:bg-green-600 text-white" 
                          : "bg-organic-green hover:bg-organic-green/90 text-white"}`}
                  >
                    {clicked ? (
                      <>
                        <Check className="w-4 h-4 mr-2" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
          )})}
        </div>
      </div>

      {/* Add some animations */}
      <style>{`
        @keyframes scalePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .animate-scale-pulse { animation: scalePulse 0.4s ease-in-out; }
      `}</style>
    </section>
  );
}


