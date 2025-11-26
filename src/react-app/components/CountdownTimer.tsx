import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    // Target: November 27, 2025, 20:00 São Paulo time (UTC-3)
    const targetDate = new Date('2025-11-27T20:00:00-03:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-[#C9A961] to-[#A68948] rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[100px] shadow-2xl border border-[#C9A961]/20">
        <div className="text-3xl md:text-5xl font-bold text-black tabular-nums">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs md:text-sm font-semibold text-[#C9A961] mt-2 tracking-widest">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full py-8 md:py-12">
      <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-6 md:mb-8 tracking-wide">
        A AULA COMEÇA EM:
      </h3>
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeBox value={timeLeft.days} label="DIAS" />
        <TimeBox value={timeLeft.hours} label="HORAS" />
        <TimeBox value={timeLeft.minutes} label="MINUTOS" />
        <TimeBox value={timeLeft.seconds} label="SEGUNDOS" />
      </div>
    </div>
  );
}
