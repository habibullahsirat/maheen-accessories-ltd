// const Icon = ({ children, size = 20, className = "", strokeWidth = 1.8 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={strokeWidth}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     {children}
//   </svg>
// );

// const ShieldCheck = (p) => (
//   <Icon {...p}>
//     <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z" />
//     <path d="m9 12 2 2 4-4" />
//   </Icon>
// );
// const Leaf = (p) => (
//   <Icon {...p}>
//     <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 11-11 1 6-1 10-4 12" />
//     <path d="M6.53 15.47C9 13 12 12 16 10" />
//   </Icon>
// );
// const HeartHandshake = (p) => (
//   <Icon {...p}>
//     <path d="M12 6c-1.5-2-4-3-6-1.5C3.5 6 3 9 5 11l7 7 7-7c2-2 1.5-5-1-6.5C16 3 13.5 4 12 6Z" />
//   </Icon>
// );
// const FlaskConical = (p) => (
//   <Icon {...p}>
//     <path d="M9 2h6M10 2v6l-6 10a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V2" />
//   </Icon>
// );
// const FileCheck2 = (p) => (
//   <Icon {...p}>
//     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
//     <path d="M14 2v6h6M9 15l2 2 4-4" />
//   </Icon>
// );
// const Users2 = (p) => (
//   <Icon {...p}>
//     <circle cx="9" cy="7" r="4" />
//     <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87" />
//   </Icon>
// );

// const Eyebrow = ({ children }) => (
//   <p
//     className="font-sora font-bold uppercase tracking-wide text-[18px] leading-[32px]"
//     style={{
//       backgroundImage: "linear-gradient(0deg,#8B68CE 15.91%,#9AD2ED 90.91%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text",
//     }}
//   >
//     {children}
//   </p>
// );

// const SectionHeading = ({ eyebrow, line1, italic, line2, right, center }) => (
//   <div
//     className={`flex flex-col md:flex-row ${
//       center
//         ? "items-center text-center"
//         : "items-start md:items-end justify-between"
//     } gap-8`}
//   >
//     <div>
//       <Eyebrow>{eyebrow}</Eyebrow>
//       <h2 className="font-sora font-normal text-[36px] md:text-[50px] leading-[1.15] tracking-[-1.06px] text-black mt-2">
//         {line1} <span className="font-display italic">{italic}</span>
//         {line2 ? (
//           <>
//             <br />
//             {line2}
//           </>
//         ) : null}
//       </h2>
//     </div>
//     {right}
//   </div>
// );

// const policies = [
//   {
//     n: "01",
//     title: "Occupational Health and Safety Policy",
//     icon: ShieldCheck,
//   },
//   { n: "02", title: "Product Quality Policy", icon: FileCheck2 },
//   { n: "03", title: "Environmental Policy", icon: Leaf },
//   { n: "04", title: "Social Compliance Policy", icon: Users2 },
//   { n: "05", title: "Workplace Harassment Policy", icon: HeartHandshake },
//   { n: "06", title: "Chemical Use Policy", icon: FlaskConical },
// ];

// export default function Policies() {
//   return (
//     <>
//       <section className="max-w-[1466px] mx-auto px-6 py-28">
//         <SectionHeading
//           eyebrow="05 // Policies"
//           line1="Our Smart"
//           italic="Policies"
//           right={
//             <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
//               We&apos;re deeply passionate about keeping every promise,
//               conveying our commitment to quality in everything we deliver.
//             </p>
//           }
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//           {policies.map((p) => (
//             <div
//               key={p.n}
//               className="bg-black/5 aspect-[313/361] flex flex-col justify-center gap-4 px-8 relative"
//             >
//               <p.icon size={44} strokeWidth={1} className="text-black" />
//               <div className="flex flex-col gap-3">
//                 <span className="font-sora text-[20px] font-light">{p.n}</span>
//                 <h4 className="font-sora font-bold text-[19px] leading-[1.5] text-black">
//                   {p.title}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// Dynamic Version

"use client";

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
    async function fetchPolicies() {
      try {
        const res = await fetch("http://localhost:3000/api/policy");
        const data = await res.json();
        setPolicies(data);
      } catch (error) {
        console.error("Failed to fetch policies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPolicies();
  }, []);

  if (loading) {
    return (
      <section className="max-w-[1466px] mx-auto px-6 py-28">
        <p className="text-center text-gray-500">Loading...</p>
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
            We're deeply passionate about keeping every promise, conveying our
            commitment to quality in everything we deliver.
          </p>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {policies.map((policy, index) => (
          <div
            key={policy._id}
            className="group relative overflow-hidden aspect-[313/361]"
          >
            {/* Background Image (Always Visible) */}
            <img
              src={policy.image}
              alt={policy.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/65 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
              {/* Serial */}
              <span className="font-sora text-[20px] font-light">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-sora font-bold text-[22px] leading-[1.4]">
                {policy.title}
              </h3>

              {/* Hidden Content */}
              <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-52 group-hover:opacity-100">
                <p className="mt-5 text-[15px] leading-7 text-white/90">
                  {policy.description}
                </p>

                <Link
                  href={policy.cta.href}
                  className="inline-flex items-center gap-2 mt-6 font-sora font-semibold text-sm uppercase tracking-wide"
                >
                  {policy.cta.text}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
