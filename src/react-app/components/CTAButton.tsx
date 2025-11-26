interface CTAButtonProps {
  text: string;
  className?: string;
}

export default function CTAButton({ text, className = '' }: CTAButtonProps) {
  const handleClick = () => {
    window.open('https://abbvie.zoom.us/meeting/register/Mdkh6HN7QCqkbm0CEXrBmg', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-gradient-to-r from-[#C9A961] via-[#D4B76E] to-[#C9A961] text-black font-bold py-4 md:py-5 px-8 md:px-16 rounded-lg shadow-2xl hover:shadow-[#C9A961]/50 hover:scale-105 transition-all duration-300 text-base md:text-xl tracking-widest ${className}`}
      aria-label="Inscrever-se na aula gratuita"
    >
      {text}
    </button>
  );
}
