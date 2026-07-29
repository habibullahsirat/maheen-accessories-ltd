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

// Version 2

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

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
//         {line2 && (
//           <>
//             <br />
//             {line2}
//           </>
//         )}
//       </h2>
//     </div>

//     {right}
//   </div>
// );

// export default function Services() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/service");
//         const data = await res.json();
//         setServices(data || []);
//       } catch (error) {
//         console.error("Failed to fetch services:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (loading) {
//     return (
//       <section className="max-w-[1466px] mx-auto px-6 py-28">
//         <p className="text-center">Loading...</p>
//       </section>
//     );
//   }

//   return (
//     <section className="max-w-[1466px] mx-auto px-6 py-28">
//       <SectionHeading
//         eyebrow="01 // Services"
//         line1="Our Core"
//         italic="Services"
//         right={
//           <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px]">
//             We specialize in developing products that meet world-class
//             standards, ensuring every detail is perfect to bring your vision to
//             life.
//           </p>
//         }
//       />

//       <div className="flex flex-col md:flex-row gap-3 mt-16">
//         {services.map((service, index) => (
//           <div
//             key={service._id}
//             className="relative flex-1 rounded-[20px] overflow-hidden min-h-[360px] flex items-end p-8"
//           >
//             {/* Background Image */}
//             <Image
//               src={service.image}
//               alt={service.title}
//               fill
//               className="object-cover"
//               sizes="(max-width:768px) 100vw, 33vw"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#9AD2ED]/45" />

//             {/* Content */}
//             <div className="relative z-10 flex flex-col gap-3">
//               <span className="font-hero text-[40px] leading-none text-[#4A4A4A]">
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               <h3 className="font-sora font-semibold text-[24px] text-black">
//                 {service.title}
//               </h3>

//               {/* <a
//                 href="#"
//                 className="font-sora text-[13px] font-semibold uppercase tracking-wide mt-2 flex items-center gap-2"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(90deg,#8B68CE 0%,#9AD2ED 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Discover Work
//                 <ArrowUpRight size={14} className="text-[#8B68CE]" />
//               </a> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// Version 3
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

const SectionHeading = ({ eyebrow, line1, italic, right }) => (
  <div className="flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-end">
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-3 font-sora text-[36px] md:text-[52px] font-normal leading-[1.1] text-white">
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
        const res = await fetch("http://localhost:3000/api/service");
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
      <section className="bg-black py-32">
        <p className="text-center text-white">Loading...</p>
      </section>
    );
  }

  return (
    // <section className="relative overflow-hidden bg-black py-28">
    //   {/* LEFT WAVE */}
    //   <div className="absolute left-0 bottom-0 w-[45%] h-[320px] opacity-20 pointer-events-none">
    //     <Image
    //       src="/images/wave-left.svg"
    //       alt=""
    //       fill
    //       priority
    //       className="object-contain object-left-bottom"
    //     />
    //   </div>

    //   {/* RIGHT WAVE */}
    //   <div className="absolute right-0 bottom-0 w-[45%] h-[320px] opacity-20 pointer-events-none">
    //     <Image
    //       src="/images/wave-right.svg"
    //       alt=""
    //       fill
    //       priority
    //       className="object-contain object-right-bottom"
    //     />
    //   </div>

    //   {/* CONTENT */}
    //   <div className="relative z-10 max-w-[1466px] mx-auto px-6">
    //     <SectionHeading
    //       eyebrow="01 // Services"
    //       line1="Our Core"
    //       italic="Services"
    //       right={
    //         <p className="max-w-[620px] text-[18px] leading-[32px] text-white/70 font-light">
    //           We specialize in developing products that meet world-class
    //           standards, ensuring every detail is perfect to bring your vision
    //           to life.
    //         </p>
    //       }
    //     />

    //     <div className="mt-20 flex flex-col md:flex-row gap-4">
    //       {services.map((service, index) => (
    //         <div
    //           key={service._id}
    //           className="relative h-[470px] flex-1 overflow-hidden rounded-[22px]"
    //         >
    //           {/* IMAGE */}
    //           <Image
    //             src={service.image}
    //             alt={service.title}
    //             fill
    //             priority={index === 0}
    //             sizes="(max-width:768px) 100vw, 33vw"
    //             className="object-cover"
    //           />

    //           {/* LIGHT OVERLAY */}
    //           <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40" />

    //           {/* CONTENT */}
    //           <div className="absolute left-10 bottom-10 z-10">
    //             <h3 className="text-[56px] font-bold leading-none text-[#3D3D3D]">
    //               {String(index + 1).padStart(2, "0")}
    //             </h3>

    //             <p className="mt-2 text-[20px] font-medium text-black">
    //               {service.title}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <Image
        src="/service-section-bg.png"
        alt="Service Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Optional dark overlay if the background is too bright */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      <div className="relative z-10 max-w-[1466px] mx-auto px-6">
        <SectionHeading
          eyebrow="01 // Services"
          line1="Our Core"
          italic="Services"
          right={
            <p className="font-sora font-light text-white/70 text-[18px] leading-[1.55] max-w-[620px]">
              We specialize in developing products that meet world-class
              standards, ensuring every detail is perfect to bring your vision
              to life.
            </p>
          }
        />

        <div className="flex flex-col md:flex-row gap-3 mt-16">
          {services.map((service, index) => (
            <div
              key={service._id}
              className="relative flex-1 h-[430px] rounded-[20px] overflow-hidden"
            >
              {/* Card Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute left-10 bottom-10 z-10">
                <h3 className="font-bold text-[56px] leading-none text-[#4A4A4A]">
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
