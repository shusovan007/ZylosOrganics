import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { vegetables } from "@/data/vegetables";
import { Vegetable } from "@/data/vegetables";

interface ProductGridProps {
  onAddToCart: (vegetable: Vegetable, quantity: number) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const getQuantity = (id: number) => quantities[id] || 1;

  const updateQuantity = (id: number, change: number) => {
    const currentQty = getQuantity(id);
    const newQty = Math.max(1, Math.min(10, currentQty + change));
    setQuantities(prev => ({ ...prev, [id]: newQty }));
  };

  const handleAddToCart = (vegetable: Vegetable) => {
    const quantity = getQuantity(vegetable.id);
    onAddToCart(vegetable, quantity);
    // Reset quantity to 1 after adding to cart
    setQuantities(prev => ({ ...prev, [vegetable.id]: 1 }));
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
          {vegetables.map((vegetable) => (
            <Card key={vegetable.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={vegetable.image} 
                alt={vegetable.name}
                className="w-full h-48 object-cover"
              />
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
                    <span className="w-12 text-center text-sm font-medium">
                      {getQuantity(vegetable.id)}
                    </span>
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
                  className="w-full bg-organic-green hover:bg-organic-green/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
