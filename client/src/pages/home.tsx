import { useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import CartSidebar from "@/components/cart-sidebar";
import CheckoutModal from "@/components/checkout-modal";
import Footer from "@/components/footer";
import { useCart } from "@/hooks/use-cart";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const cart = useCart();

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);
  const handleOpenCheckout = () => setIsCheckoutOpen(true);
  const handleCloseCheckout = () => setIsCheckoutOpen(false);

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-soft-white">
      <Header
        cartItemCount={cart.totalQuantity}
        onCartClick={handleOpenCart}
      />

      <main>
        <Hero onShopNowClick={scrollToProducts} />

        {/* Wrapper for Search + Product Grid */}
        <div className="w-full max-w-7xl mx-auto px-4" id="products">
          <ProductGrid onAddToCart={cart.addItem} />
        </div>
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cart.items}
        total={cart.total}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onCheckout={handleOpenCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        cartItems={cart.items}
        total={cart.total}
        onOrderComplete={() => {
          cart.clearCart();
          handleCloseCheckout();
          handleCloseCart();
        }}
      />
    </div>
  );
}
