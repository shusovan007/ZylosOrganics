import { Button } from "@/components/ui/button";

interface HeroProps {
  onShopNowClick: () => void;
}

export default function Hero({ onShopNowClick }: HeroProps) {
  return (
    <section className="gradient-organic text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">Farm Fresh Organic Vegetables</h2>
        <p className="text-xl lg:text-2xl mb-4 font-light">Grown with love, delivered with care</p>
        <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto font-light">
          Discover our premium selection of organic vegetables, locally sourced and sustainably grown. 
          From crisp lettuce to vibrant tomatoes, we bring nature's best directly to your table.
        </p>
        <Button 
          onClick={onShopNowClick}
          className="bg-warm-orange hover:bg-warm-orange/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          size="lg"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
}
