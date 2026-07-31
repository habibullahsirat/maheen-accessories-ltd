"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Eyebrow = ({ children }) => (
  <p className="font-sora font-bold uppercase tracking-wide text-[16px] leading-[24px] text-[#8B68CE]">
    {children}
  </p>
);

const SectionHeading = ({ eyebrow, line1, italic, right }) => (
  <div className="flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-end">
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-3 font-sora text-[36px] md:text-[52px] font-normal leading-[1.1] text-black">
        {line1} <span className="italic font-serif font-normal">{italic}</span>
      </h2>
    </div>

    {right}
  </div>
);

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        // const res = await fetch("http://localhost:3000/api/service");
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/service`,
        );
        const data = await res.json();
        setServices(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-32">
        <p className="text-center text-black">Loading...</p>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Decorative wavy lines background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-70">
        <svg
          viewBox="0 0 1920 500"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {Array.from({ length: 25 }).map((_, i) => {
            const offset = i * 6;
            return (
              <path
                key={i}
                d={`M -50 ${260 + offset} C 400 ${100 + offset}, 700 ${420 + offset}, 960 ${260 + offset} C 1220 ${100 + offset}, 1520 ${420 + offset}, 1970 ${260 + offset}`}
                stroke="#1a1a1a"
                strokeWidth="1"
                fill="none"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1466px] mx-auto px-6">
        <SectionHeading
          eyebrow="01 // Services"
          line1="Our Core"
          italic="Services"
          right={
            <p className="font-sora font-normal text-black text-[16px] leading-[1.6] max-w-[500px]">
              We specialize in developing products that meet{" "}
              <span className="font-bold">world-class standards,</span> ensuring
              every detail is perfect to bring your vision to life.
            </p>
          }
        />

        <div className="flex flex-col md:flex-row gap-4 mt-16">
          {services.map((service, index) => (
            <div key={service._id} className="flex-1">
              {/* Card Image */}
              <div className="relative h-[380px] rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Number + Title below the image */}
              <div className="mt-6">
                <h3 className="font-bold text-[40px] leading-none text-[#3D3D3D]">
                  {String(index + 1).padStart(2, "0")}
                </h3>

                <h4 className="mt-2 font-sora text-[20px] font-medium text-black">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
