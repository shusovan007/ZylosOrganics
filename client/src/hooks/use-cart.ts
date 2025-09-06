import { useState, useCallback, useMemo } from "react";
import { Vegetable } from "@/data/vegetables";

export interface CartItem extends Vegetable {
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((vegetable: Vegetable, quantity: number) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.id === vegetable.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === vegetable.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...vegetable, quantity }];
      }
    });
  }, []);

  const updateQuantity = useCallback((id: number, change: number) => {
    setItems(prev => 
      prev.map(item => {
        if (item.id === id) {
        const minval=item.inPcs || item.inBunch ?1:0.5;
      
          const newQuantity = Math.max(minval, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [items]);

  const totalQuantity = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    total,
    totalQuantity,
  };
}
