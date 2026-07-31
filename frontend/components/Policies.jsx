"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Eyebrow = ({ children }) => (
  <p
    className="font-sora font-bold uppercase tracking-wide text-[18px] leading-[32px]"
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

const SectionHeading = ({ eyebrow, line1, italic, line2, right, center }) => (
  <div
    className={`flex flex-col md:flex-row ${
      center
        ? "items-center text-center"
        : "items-start md:items-end justify-between"
    } gap-8`}
  >
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="font-sora font-normal text-[36px] md:text-[50px] leading-[1.15] tracking-[-1.06px] text-black mt-2">
        {line1} <span className="font-display italic">{italic}</span>
        {line2 && (
          <>
            <br />
            {line2}
          </>
        )}
      </h2>
    </div>

    {right}
  </div>
);

export default function Policies() {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        // const res = await fetch("http://localhost:3000/api/policy");
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/heroes`,
        );
        const data = await res.json();
        setPolicies(data);
      } catch (error) {
        console.error("Failed to fetch policies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  if (loading) {
    return (
      <section className="max-w-[1466px] mx-auto px-6 py-28">
        <p className="text-center font-sora">Loading...</p>
      </section>
    );
  }

  return (
    <section className="max-w-[1466px] mx-auto px-6 py-28">
      <SectionHeading
        eyebrow="05 // Policies"
        line1="Our Smart"
        italic="Policies"
        right={
          <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
            We&apos;re deeply passionate about keeping every promise, conveying
            our commitment to quality in everything we deliver.
          </p>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {policies.map((policy, index) => (
          <div
            key={policy._id}
            className="group relative overflow-hidden bg-[#F6F6F6] aspect-[313/361] p-8 transition-all duration-500"
          >
            {/* Default Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 group-hover:opacity-0">
              <div>
                <Image
                  src={policy.image}
                  alt={policy.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <div className="space-y-3">
                <span className="block font-sora text-[20px] font-light text-black">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h3 className="font-sora font-bold text-[20px] leading-[1.5] text-black">
                  {policy.title}
                </h3>
              </div>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-black text-white p-8 flex flex-col justify-between opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <div>
                <Image
                  src={policy.image}
                  alt={policy.title}
                  width={56}
                  height={56}
                  className="object-contain brightness-0 invert"
                />
              </div>

              <div className="space-y-4">
                <span className="block font-sora text-[20px] font-light">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h3 className="font-sora font-bold text-[20px] leading-[1.5]">
                  {policy.title}
                </h3>

                <p className="font-sora text-[15px] leading-[1.7] text-white/80">
                  {policy.description}
                </p>

                {policy.cta?.text && (
                  <Link
                    href={policy.cta.href || "/"}
                    className="inline-flex items-center gap-2 font-sora font-semibold text-white hover:text-[#9AD2ED] transition-colors"
                  >
                    {policy.cta.text}
                    <span>→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
