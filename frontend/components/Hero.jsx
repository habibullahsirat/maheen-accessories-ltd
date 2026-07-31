"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Icon = ({ children, size = 20, className = "", strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const ArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </Icon>
);

const CornerBorderButton = ({ children, dark = false }) => (
  <button
    className={`relative font-sora text-[14px] tracking-[0.8px] capitalize px-8 py-4 flex items-center gap-3 ${
      dark ? "text-white" : "text-black"
    }`}
    style={{ background: "rgba(0,0,0,0.08)" }}
  >
    <span
      className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${
        dark ? "border-white" : "border-black"
      }`}
    />
    <span
      className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${
        dark ? "border-white" : "border-black"
      }`}
    />
    {children}
    <ArrowUpRight size={16} />
  </button>
);

export default function Hero() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        // const res = await fetch("http://localhost:3000/api/hero");
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/hero`,
        );
        const data = await res.json();
        setHeroes(data || []);
      } catch (error) {
        console.error("Failed to fetch heroes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  // Auto slider
  useEffect(() => {
    if (heroes.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroes]);

  if (loading) {
    return (
      <section className="w-full min-h-[720px] bg-black flex items-center justify-center">
        <p className="text-white text-lg">Loading...</p>
      </section>
    );
  }

  if (!heroes.length) return null;

  const hero = heroes[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroes.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroes.length) % heroes.length);
  };

  return (
    <section className="relative w-full min-h-[720px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero.image}
        alt={hero.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1466px] w-full mx-auto px-6 py-24 flex flex-col gap-6">
        <p className="font-sora text-white uppercase text-[16px] tracking-[3px]">
          {hero.subtitle}
        </p>

        <h1 className="font-hero font-bold text-white text-[44px] md:text-[70px] leading-[1.05] tracking-[-1.2px] max-w-[820px]">
          {hero.title}
        </h1>

        <p className="font-sora font-light text-[#DDDDDD] text-[18px] md:text-[22px] leading-[1.55] max-w-[830px]">
          {hero.description}
        </p>

        <div className="flex items-center gap-8 mt-4">
          <Link
            href={hero.cta?.href || "#"}
            className="bg-[#9AD2ED] text-[#151515] font-sora text-[15px] tracking-[0.9px] capitalize px-8 py-4 flex items-center gap-3"
          >
            {hero.cta?.text || "Learn More"}
            <ArrowUpRight size={18} />
          </Link>

          <CornerBorderButton dark>Explore Now</CornerBorderButton>
        </div>
      </div>

      {/* Slider Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-9 z-20">
        <button
          onClick={prevSlide}
          className="font-sora text-white text-[12px] tracking-widest uppercase hover:text-[#9AD2ED] transition"
        >
          Prev
        </button>

        <div className="flex items-center gap-7">
          <span className="w-24 h-px bg-white/30" />

          <div className="flex items-center gap-5">
            {heroes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="flex items-center justify-center"
              >
                {index === current ? (
                  <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 hover:bg-white transition" />
                )}
              </button>
            ))}
          </div>

          <span className="w-24 h-px bg-white/30" />
        </div>

        <button
          onClick={nextSlide}
          className="font-sora text-white text-[12px] tracking-widest uppercase hover:text-[#9AD2ED] transition"
        >
          Next
        </button>
      </div>
    </section>
  );
}
