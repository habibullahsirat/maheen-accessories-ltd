"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

const ChevronLeft = (p) => (
  <Icon {...p}>
    <path d="m15 18-6-6 6-6" />
  </Icon>
);

const ChevronRight = (p) => (
  <Icon {...p}>
    <path d="m9 18 6-6-6-6" />
  </Icon>
);

export default function Testimonial() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [heroBg, setHeroBg] = useState("");
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [feedbackRes, heroRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_ADMIN_API}/api/feedback`),
          fetch(`${process.env.NEXT_PUBLIC_ADMIN_API}/api/hero`),
        ]);

        const feedbackData = await feedbackRes.json();
        const heroData = await heroRes.json();

        setFeedbacks(feedbackData);

        if (heroData.length > 0) {
          // Latest hero item
          const latestHero = heroData.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )[0];

          setHeroBg(latestHero.image);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;

  if (!feedbacks.length) return null;

  const feedback = feedbacks[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(270deg, rgba(0,0,0,0) 0%, #000 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="bg-[#1E1E1E]/80 rounded-md p-12 max-w-[720px]">
          {/* Rating */}
          <div className="flex gap-1 text-[#9AD2ED] mb-6 text-xl">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>{index < feedback.rating ? "★" : "☆"}</span>
            ))}
          </div>

          {/* Review */}
          <p className="font-sora font-light text-[20px] leading-[1.7] text-[#DDDDDD] whitespace-pre-line mb-10">
            {feedback.review}
          </p>

          {/* User */}
          <div className="flex items-center gap-4 pt-6 border-t border-[#3C3C3C]">
            <div className="relative w-[70px] h-[70px] rounded-full border-4 border-white/25 overflow-hidden">
              <Image
                src={feedback.image}
                alt={feedback.name}
                fill
                className="object-cover"
                sizes="70px"
              />
            </div>

            <div>
              <h4 className="font-sora text-white text-[24px]">
                {feedback.name}
              </h4>

              <p className="font-sora font-light text-[16px] text-[#DDDDDD]">
                {feedback.location}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={prevSlide}
            className="w-[54px] h-[54px] rounded-full border border-dashed border-white flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            onClick={nextSlide}
            className="w-[54px] h-[54px] rounded-full border border-dashed border-white bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
