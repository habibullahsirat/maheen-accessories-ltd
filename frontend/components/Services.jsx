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

// const ArrowUpRight = (p) => (
//   <Icon {...p}>
//     <path d="M7 17 17 7M7 7h10v10" />
//   </Icon>
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

// const services = [
//   {
//     n: "01",
//     title: "Button Manufacturing",
//     img: "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     n: "02",
//     title: "Ribbon Fabrication",
//     img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     n: "03",
//     title: "Bow Manufacturing",
//     img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// export default function Services() {
//   return (
//     <>
//       <section className="max-w-[1466px] mx-auto px-6 py-28">
//         <SectionHeading
//           eyebrow="01 // Services"
//           line1="Our Core"
//           italic="Services"
//           right={
//             <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px]">
//               We specialize in developing products that meet world-class
//               standards, ensuring every detail is perfect to bring your vision
//               to life.
//             </p>
//           }
//         />

//         <div className="flex flex-col md:flex-row gap-3 mt-16">
//           {services.map((s) => (
//             <div
//               key={s.n}
//               className="relative flex-1 rounded-[20px] overflow-hidden min-h-[360px] flex items-end p-8"
//               style={{
//                 backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(154,210,237,0.45) 100%), url(${s.img})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="flex flex-col gap-3">
//                 <span className="font-hero text-[40px] leading-none text-[#4A4A4A]">
//                   {s.n}
//                 </span>
//                 <h3 className="font-sora font-semibold text-[24px] text-black">
//                   {s.title}
//                 </h3>
//                 <p className="font-sora text-[13px] text-[#4A4A4A] max-w-[220px]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//                   elit tellus.
//                 </p>
//                 <a
//                   href="#"
//                   className="font-sora text-[13px] font-semibold uppercase tracking-wide mt-2 flex items-center gap-2"
//                   style={{
//                     backgroundImage:
//                       "linear-gradient(90deg,#8B68CE 0%,#9AD2ED 100%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}
//                 >
//                   Discover Work{" "}
//                   <ArrowUpRight size={14} className="text-[#8B68CE]" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import Image from "next/image";
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

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/service");
        const data = await res.json();
        setServices(data || []);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="max-w-[1466px] mx-auto px-6 py-28">
        <p className="text-center">Loading...</p>
      </section>
    );
  }

  return (
    <section className="max-w-[1466px] mx-auto px-6 py-28">
      <SectionHeading
        eyebrow="01 // Services"
        line1="Our Core"
        italic="Services"
        right={
          <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px]">
            We specialize in developing products that meet world-class
            standards, ensuring every detail is perfect to bring your vision to
            life.
          </p>
        }
      />

      <div className="flex flex-col md:flex-row gap-3 mt-16">
        {services.map((service, index) => (
          <div
            key={service._id}
            className="relative flex-1 rounded-[20px] overflow-hidden min-h-[360px] flex items-end p-8"
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 33vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#9AD2ED]/45" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3">
              <span className="font-hero text-[40px] leading-none text-[#4A4A4A]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-sora font-semibold text-[24px] text-black">
                {service.title}
              </h3>

              <a
                href="#"
                className="font-sora text-[13px] font-semibold uppercase tracking-wide mt-2 flex items-center gap-2"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#8B68CE 0%,#9AD2ED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Discover Work
                <ArrowUpRight size={14} className="text-[#8B68CE]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
