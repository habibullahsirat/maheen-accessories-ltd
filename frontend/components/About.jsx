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

// const CornerBorderButton = ({ children, dark = false }) => (
//   <button
//     className={`relative font-sora text-[14px] tracking-[0.8px] capitalize px-8 py-4 flex items-center gap-3 ${
//       dark ? "text-white" : "text-black"
//     }`}
//     style={{ background: "rgba(0,0,0,0.08)" }}
//   >
//     <span
//       className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${
//         dark ? "border-white" : "border-black"
//       }`}
//     />
//     <span
//       className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${
//         dark ? "border-white" : "border-black"
//       }`}
//     />
//     {children}
//     <ArrowUpRight size={16} />
//   </button>
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

// export default function About() {
//   const [about, setAbout] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAbout = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/about", {
//           cache: "no-store",
//         });

//         const data = await res.json();

//         // API returns an array
//         setAbout(data[0] || null);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAbout();
//   }, []);

//   if (loading) {
//     return <section className="py-24 text-center">Loading...</section>;
//   }

//   if (!about) {
//     return (
//       <section className="py-24 text-center">
//         No about information found.
//       </section>
//     );
//   }

//   return (
//     <section className="max-w-[1466px] mx-auto px-6 py-28">
//       <SectionHeading
//         eyebrow="03 // About Company"
//         line1="Maheen Creates"
//         italic="What You need"
//         right={<CornerBorderButton>Explore Now</CornerBorderButton>}
//       />

//       <p className="font-sora text-black text-[24px] md:text-[32px] leading-[1.6] tracking-[-1px] mt-10 max-w-[730px]">
//         {about.subtitle}
//       </p>

//       <div className="flex flex-col lg:flex-row gap-16 mt-16 items-center">
//         {/* Image */}
//         <div className="relative flex-1 rounded-[16px] overflow-hidden min-h-[420px] h-[520px]">
//           <Image
//             src={about.image}
//             alt={about.title}
//             fill
//             priority
//             className="object-cover"
//           />

//           {/* <button
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[170px] h-[170px] rounded-full flex items-center justify-center text-white font-sora text-[14px] tracking-[0.8px] capitalize"
//             style={{
//               background:
//                 "linear-gradient(122.37deg,#9AD2ED 16.6%,#8B68CE 93.82%)",
//             }}
//           >
//             {about.cta?.text || "Explore Us"}
//             <ArrowUpRight size={16} className="ml-2" />
//           </button> */}
//           <a
//             href={about.cta?.href || "#"}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[170px] h-[170px] rounded-full flex items-center justify-center text-white font-sora text-[14px] tracking-[0.8px] capitalize"
//             style={{
//               background:
//                 "linear-gradient(122.37deg,#9AD2ED 16.6%,#8B68CE 93.82%)",
//             }}
//           >
//             {about.cta?.text || "Explore Us"}
//             <ArrowUpRight size={16} className="ml-2" />
//           </a>
//         </div>

//         {/* Content */}
//         <div className="flex-1 flex flex-col gap-8">
//           <div className="flex items-center gap-6">
//             <h3 className="font-sora uppercase text-[28px] font-medium">
//               {about.title}
//             </h3>

//             <span className="flex-1 h-px bg-black" />
//           </div>

//           <p className="font-sora font-light text-[20px] leading-[1.55] text-black/70">
//             {about.subtitle}
//           </p>

//           <p className="font-sora font-light text-[15px] leading-[1.9] text-black/70 text-justify whitespace-pre-line">
//             {about.description}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// // export default function About() {
// //   return (
// //     <>
// //       <section className="max-w-[1466px] mx-auto px-6 py-28">
// //         <SectionHeading
// //           eyebrow="03 // About Company"
// //           line1="Maheen Creates"
// //           italic="What You need"
// //           right={<CornerBorderButton>Explore Now</CornerBorderButton>}
// //         />
// //         <p className="font-sora text-black text-[24px] md:text-[32px] leading-[1.6] tracking-[-1px] mt-10 max-w-[730px]">
// //           precision, passion, and a touch of creativity.
// //         </p>

// //         <div className="flex flex-col lg:flex-row gap-16 mt-16 items-center">
// //           <div className="relative flex-1 rounded-[16px] overflow-hidden min-h-[420px]">
// //             <img
// //               src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=900&auto=format&fit=crop"
// //               alt="workshop"
// //               className="w-full h-full object-cover"
// //             />
// //             <button
// //               className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[170px] h-[170px] rounded-full flex items-center justify-center text-white font-sora text-[14px] tracking-[0.8px] capitalize"
// //               style={{
// //                 background:
// //                   "linear-gradient(122.37deg,#9AD2ED 16.6%,#8B68CE 93.82%)",
// //               }}
// //             >
// //               Explore Us <ArrowUpRight size={16} className="ml-2" />
// //             </button>
// //           </div>

// //           <div className="flex-1 flex flex-col gap-8">
// //             <div className="flex items-center gap-6">
// //               <h3 className="font-sora uppercase text-[28px] font-medium">
// //                 About Maheen
// //               </h3>
// //               <span className="flex-1 h-px bg-black" />
// //             </div>
// //             <p className="font-sora font-light text-[20px] leading-[1.55] text-black/70">
// //               Crafting Excellence | Elevating Creations | Defining Style
// //             </p>
// //             <p className="font-sora font-light text-[15px] leading-[1.9] text-black/70 text-justify">
// //               At Maheen Accessories Ltd, we are committed to providing top-notch
// //               products that meet world-class standards. With state-of-the-art
// //               infrastructure and an expert management team, we cater to the
// //               growing and diversified demands of our customers. Discover our
// //               range of high-quality buttons, ribbons, and bows designed to
// //               elevate your creations.
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

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
