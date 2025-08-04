import { Button } from "@/components/ui/button";
import { X, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { CartItem } from "@/hooks/use-cart";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  total: number;
  onUpdateQuantity: (id: number, change: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

export default function CartSidebar({ 
  isOpen, 
  onClose, 
  cartItems, 
  total, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout 
}: CartSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 max-w-full bg-white shadow-2xl transform transition-transform duration-300 z-50 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">Shopping Cart</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm">Add some fresh vegetables to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">₹{item.price} per kg</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="h-6 w-6 p-0"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="text-sm font-medium min-w-[3rem] text-center">
                        {item.quantity} kg
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="h-6 w-6 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-700 ml-4"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-organic-green">₹{total}</span>
            </div>
            <Button 
              onClick={onCheckout}
              className="w-full bg-warm-orange hover:bg-warm-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
