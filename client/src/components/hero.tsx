import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onShopNowClick: () => void;
}

//for local

// const slideshowImages = [
//   "./public/images/slideShow/slideshow1.jpg",
//   "./public/images/slideShow/slideshow2.jpg",
//   "./public/images/slideShow/slideshow3.jpg",
//   "./public/images/slideShow/slideshow4.jpg",
//   "./public/images/slideShow/slideshow5.jpg"
// ];

//for deployment

// const slideshowImages = [
//   "/images/slideShow/slideshow1.jpg",
//   "/images/slideShow/slideshow2.jpg",
//   "/images/slideShow/slideshow3.jpg",
//   "/images/slideShow/slideshow4.jpg",
//   "/images/slideShow/slideshow5.jpg"
// ];

const slideshowImages = [
  "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/slideshow1.jpg",
  "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/slideshow2.jpg",
  "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/slideshow3.jpg",
  "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/slideshow4.jpg",
  "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/slideshow5.jpg"
];

export default function Hero({ onShopNowClick }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % slideshowImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Fresh vegetables ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
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

      {/* Slideshow indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex 
                ? 'bg-warm-orange' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
