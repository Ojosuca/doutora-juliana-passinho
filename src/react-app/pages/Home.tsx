import { Calendar, Clock } from 'lucide-react';
import CountdownTimer from '@/react-app/components/CountdownTimer';
import CTAButton from '@/react-app/components/CTAButton';
import FloatingCTA from '@/react-app/components/FloatingCTA';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Load custom fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Playfair+Display:wght@600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-12 md:py-20 max-w-6xl mx-auto">
        {/* Logo/Branding */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block">
            <h2 className="text-xl md:text-2xl font-light text-[#C9A961] tracking-[0.3em] mb-2">
              PARS COMPACTA
            </h2>
            <p className="text-sm md:text-base text-gray-400 tracking-wide">
              Convite para aula médica do projeto
            </p>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white leading-tight mb-12 md:mb-16 tracking-wide px-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          REDESCOBRINDO O CLÁSSICO NO MANEJO<br />DA DOENÇA DE PARKINSON AVANÇADA
        </h1>

        {/* Doctor Profile Card */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#C9A961]/20 rounded-2xl p-6 md:p-10 mb-12 md:mb-16 shadow-2xl max-w-4xl mx-auto backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Doctor Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961] to-[#A68948] rounded-full blur-xl opacity-30"></div>
                <img
                  src="https://mocha-cdn.com/019abe38-f6aa-775d-b128-9d1afeb21bac/image.png_9715.png"
                  alt="Dra. Juliana Passinho, neurocirurgiã funcional especialista em Doença de Parkinson do HC-USP"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#C9A961]/30 shadow-2xl"
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dra. Juliana Passinho
              </h2>
              <p className="text-[#C9A961] font-semibold text-lg md:text-xl mb-4">
                CRM-SP 195547
              </p>
              <p className="text-white font-semibold text-xl md:text-2xl mb-3">
                Neurocirurgiã Funcional
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Doutoranda no HC - USP com o tema de cirurgia para doença de Parkinson
              </p>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Event Details */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#C9A961]/20 rounded-xl p-6 md:p-8 mb-10 md:mb-12 max-w-3xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-[#C9A961]" />
              <div>
                <p className="text-white font-bold text-lg md:text-xl">
                  27 DE NOVEMBRO DE 2025
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#C9A961]/30"></div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#C9A961]" />
              <div>
                <p className="text-white font-bold text-lg md:text-xl">
                  20:00 HORAS
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
            Online via Zoom • Conecte-se para participar no link do Zoom
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center mb-16 md:mb-20">
          <CTAButton text="INSCREVA-SE GRATUITAMENTE" />
        </div>

        {/* Sponsor Footer */}
        <div className="text-center border-t border-[#C9A961]/20 pt-8 md:pt-12">
          <p className="text-[#C9A961] font-semibold text-lg md:text-xl mb-3 tracking-widest">
            PATROCINADO POR
          </p>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="text-4xl md:text-5xl font-bold tracking-wider">
              <span className="text-white">Abb</span>
              <span className="text-[#C9A961]">Vie</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs md:text-sm">
            ABBV-BR-01330-E
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Bottom spacing for floating CTA */}
      <div className="h-20 md:h-24"></div>
    </div>
  );
}
