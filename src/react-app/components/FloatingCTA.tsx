import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slide up animation after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://abbvie.zoom.us/meeting/register/Mdkh6HN7QCqkbm0CEXrBmg', '_blank');
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Mobile: Full width bar */}
      <div className="md:hidden">
        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-[#C9A961] via-[#D4B76E] to-[#C9A961] text-black font-bold py-4 px-6 shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300 animate-pulse"
        >
          <span className="text-lg tracking-wide">INSCREVER-SE AGORA</span>
        </button>
      </div>

      {/* Desktop: Centered floating pill */}
      <div className="hidden md:flex justify-center pb-6">
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-[#C9A961] via-[#D4B76E] to-[#C9A961] text-black font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[#C9A961]/50 hover:scale-105 transition-all duration-300 animate-pulse"
        >
          <span className="text-xl tracking-wide">INSCREVER-SE AGORA</span>
        </button>
      </div>
    </div>
  );
}
