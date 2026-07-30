"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Eyebrow = ({ children }) => (
  <p
    className="font-sora font-bold uppercase text-[18px] leading-[32px]"
    style={{
      backgroundImage: "linear-gradient(0deg,#8B68CE 15.91%,#9AD2ED 90.91%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </p>
);

const Icon = ({ children, size = 18, className = "", strokeWidth = 1.8 }) => (
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

const ArrowUpRight = (props) => (
  <Icon {...props}>
    <path d="M7 17L17 7" />
    <path d="M9 7H17V15" />
  </Icon>
);

const CornerBorderButton = ({ children }) => {
  return (
    <button
      className="
        relative
        w-[194px]
        h-[50px]
        flex
        items-center
        justify-center
        gap-3
        bg-black/[0.05]
        font-sora
        text-[14px]
        tracking-[0.8px]
        capitalize
        transition-all
        duration-300
        hover:bg-black/[0.08]
      "
    >
      <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-black" />

      <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-black" />

      <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-black" />

      <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-black" />

      <span>{children}</span>

      <ArrowUpRight size={15} />
    </button>
  );
};

const SectionHeading = ({ right }) => (
  <div className="flex justify-between items-start gap-20">
    <div className="max-w-[734px]">
      <Eyebrow>03 // ABOUT COMPANY</Eyebrow>

      <h2 className="mt-3 font-sora font-normal text-[50px] leading-[60px] tracking-[-1.06px] text-black">
        Maheen Creates{" "}
        <span
          className="font-playfair italic text-[48.4px]"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          What You need
        </span>
        <br />
        <span className="text-[35.4px] leading-[71px] tracking-[-1.25px]">
          precision, passion, and a touch of creativity.
        </span>
      </h2>
    </div>

    {right}
  </div>
);

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about`,
        );

        const data = await res.json();

        setAbout(data[0] || null);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) {
    return <section className="py-40 text-center">Loading...</section>;
  }

  if (!about) {
    return (
      <section className="py-40 text-center">
        No about information found.
      </section>
    );
  }

  return (
    <section className="relative max-w-[1466px] mx-auto pt-[80px] pb-[80px]">
      <SectionHeading
        right={<CornerBorderButton>Explore Now</CornerBorderButton>}
      />

      <div className="flex justify-between items-start mt-[110px] gap-[80px]">
        {/* Left Image */}
        <div className="relative w-[673px] h-[433px] flex-shrink-0">
          {/* Blur Background */}
          <div
            className="absolute w-[373px] h-[373px] rounded-full z-0"
            style={{
              right: "-110px",
              bottom: "-70px",
              background: "rgba(154,210,237,0.25)",
              filter: "blur(48.85px)",
            }}
          />

          {/* Main Image */}
          <div className="relative w-full h-full overflow-hidden z-10">
            <Image
              src={about.image}
              alt={about.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Circle CTA */}
          <a
            href={about.cta?.href || "#"}
            className="
              absolute
              z-20
              w-[170px]
              h-[170px]
              rounded-full
              flex
              items-center
              justify-center
              gap-2
              text-white
              font-sora
              text-[14px]
              tracking-[0.8px]
              capitalize
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              right: "-72px",
              bottom: "-42px",
              background:
                "linear-gradient(122.37deg,#9AD2ED 16.6%,#8B68CE 93.82%)",
            }}
          >
            <span>Explore Us</span>

            <ArrowUpRight size={15} className="text-white" />
          </a>
        </div>

        {/* Right Content */}
        <div className="w-[714px] flex flex-col gap-[34px]">
          {/* Heading */}
          <div className="flex items-center gap-[25px]">
            <h3 className="font-sora font-normal uppercase text-[30px] leading-[40px] text-black whitespace-nowrap">
              {about.title}
            </h3>

            <div className="flex-1 h-px bg-black max-w-[150px]" />
          </div>

          {/* Subtitle */}
          <p
            className="
              font-sora
              font-light
              text-[22px]
              leading-[34px]
              text-black/70
            "
          >
            {about.subtitle}
          </p>

          {/* Description */}
          <p
            className="
              font-sora
              font-light
              text-[15px]
              leading-[28px]
              text-black/70
              text-justify
              whitespace-pre-line
            "
          >
            {about.description}
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
