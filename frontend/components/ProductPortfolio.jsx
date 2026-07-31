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

// const products = [
//   "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1622037022824-0c71d511ee4d?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=700&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139929-0f0bdf9d5d0e?q=80&w=700&auto=format&fit=crop",
// ];

// export default function ProductPortfolio() {
//   return (
//     <>
//       <section className="max-w-[1276px] mx-auto px-6 py-28">
//         <SectionHeading
//           eyebrow="06 // Our Portfolio"
//           line1="Maheen Creates"
//           italic="All of Your"
//           line2="beautiful Products"
//           center
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
//           {products.map((img, i) => (
//             <div key={i} className="flex flex-col gap-3">
//               <div className="w-full aspect-[610/620] overflow-hidden bg-black/5">
//                 <img
//                   src={img}
//                   alt="product"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="font-sora text-[24px] text-black">XYZ</span>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-16">
//           <CornerBorderButton>Explore Now</CornerBorderButton>
//         </div>
//       </section>
//     </>
//   );
// }

// Version 2
// import Image from "next/image";

// const portfolioItems = [
//   {
//     id: 1,
//     image: "/portfolio/1.jpg",
//     title: "Metal Logo & Badge",
//     author: "Maheen Accessories",
//     large: true,
//   },
//   {
//     id: 2,
//     image: "/portfolio/2.jpg",
//     title: "Metal Button",
//     author: "Maheen Accessories",
//     large: false,
//   },
//   {
//     id: 3,
//     image: "/portfolio/3.jpg",
//     title: "Metal Name Plate",
//     author: "Maheen Accessories",
//     large: true,
//   },
//   {
//     id: 4,
//     image: "/portfolio/4.jpg",
//     title: "Suspender Buckle",
//     author: "Maheen Accessories",
//     large: true,
//   },
//   {
//     id: 5,
//     image: "/portfolio/5.jpg",
//     title: "Printed Elastic",
//     author: "Maheen Accessories",
//     large: true,
//   },
//   {
//     id: 6,
//     image: "/portfolio/6.jpg",
//     title: "Cotton Ribbon",
//     author: "Maheen Accessories",
//     large: true,
//   },
//   {
//     id: 7,
//     image: "/portfolio/7.jpg",
//     title: "Garment Label",
//     author: "Maheen Accessories",
//     large: false,
//   },
//   {
//     id: 8,
//     image: "/portfolio/8.jpg",
//     title: "Metal Snap Button",
//     author: "Maheen Accessories",
//     large: false,
//   },
// ];

// export default function Portfolio() {
//   return (
//     <section className="mx-auto max-w-[1280px] px-5 py-24">
//       {/* Heading */}
//       <div className="text-center">
//         <p className="bg-gradient-to-r from-[#8B68CE] to-[#9AD2ED] bg-clip-text text-[18px] font-bold uppercase text-transparent">
//           06// Our Portfolio
//         </p>

//         <h2 className="mt-3 text-[42px] font-light leading-tight lg:text-[58px]">
//           Maheen Creates <span className="font-serif italic">All of Your</span>
//           <br />
//           beautiful Products
//         </h2>
//       </div>

//       {/* Masonry */}
//       <div className="mt-20 columns-1 gap-10 md:columns-2">
//         {portfolioItems.map((item) => (
//           <div key={item.id} className="mb-10 break-inside-avoid">
//             <div
//               className={`relative overflow-hidden ${
//                 item.large ? "h-[720px]" : "h-[360px]"
//               }`}
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover transition duration-500 hover:scale-105"
//               />
//             </div>

//             <h3 className="mt-6 text-[26px] font-medium">{item.title}</h3>

//             <p className="mt-2 text-sm text-gray-500">By {item.author}</p>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <div className="mt-20 flex justify-center">
//         <button className="group relative flex h-[56px] items-center gap-3 px-10 text-[15px] tracking-wide transition hover:bg-black hover:text-white">
//           <span>Explore Now</span>

//           <svg
//             className="h-4 w-4 transition group-hover:translate-x-1"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M5 12H19" />
//             <path d="M12 5L19 12L12 19" />
//           </svg>

//           {/* Corners */}
//           <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-black group-hover:border-white"></span>
//           <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-black group-hover:border-white"></span>
//           <span className="absolute left-0 bottom-0 h-3 w-3 border-l border-b border-black group-hover:border-white"></span>
//           <span className="absolute right-0 bottom-0 h-3 w-3 border-r border-b border-black group-hover:border-white"></span>
//         </button>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/portfolio`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch portfolio");
        }

        const data = await res.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-[1280px] px-5 py-24">
        <div className="text-center">
          <p className="bg-gradient-to-r from-[#8B68CE] to-[#9AD2ED] bg-clip-text text-[18px] font-bold uppercase text-transparent">
            06// Our Portfolio
          </p>

          <h2 className="mt-3 text-[42px] font-light leading-tight lg:text-[58px]">
            Maheen Creates{" "}
            <span className="font-serif italic">All of Your</span>
            <br />
            beautiful Products
          </h2>
        </div>

        <div className="mt-20 flex justify-center">
          <p className="text-gray-500">Loading portfolio...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      {/* Heading */}
      <div className="text-center">
        <p className="bg-gradient-to-r from-[#8B68CE] to-[#9AD2ED] bg-clip-text text-[18px] font-bold uppercase text-transparent">
          06// Our Portfolio
        </p>

        <h2 className="mt-3 text-[42px] font-light leading-tight lg:text-[58px]">
          Maheen Creates <span className="font-serif italic">All of Your</span>
          <br />
          beautiful Products
        </h2>
      </div>

      {/* Masonry Layout */}
      <div className="mt-20 columns-1 gap-10 md:columns-2">
        {portfolioItems.map((item, index) => {
          // Match the previous static layout
          const isLarge = ![1, 6, 7].includes(index);

          return (
            <div key={item._id} className="mb-10 break-inside-avoid">
              <div
                className={`relative overflow-hidden ${
                  isLarge ? "h-[720px]" : "h-[360px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                  unoptimized
                />
              </div>

              <h3 className="mt-6 text-[26px] font-medium">{item.title}</h3>

              <p className="mt-2 text-sm text-gray-500">By {item.author}</p>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="mt-20 flex justify-center">
        <button className="group relative flex h-[56px] items-center gap-3 px-10 text-[15px] tracking-wide transition hover:bg-black hover:text-white">
          <span>Explore Now</span>

          <svg
            className="h-4 w-4 transition group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M5 12H19" />
            <path d="M12 5L19 12L12 19" />
          </svg>

          {/* Corners */}
          <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-black group-hover:border-white"></span>
          <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-black group-hover:border-white"></span>
          <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-black group-hover:border-white"></span>
          <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-black group-hover:border-white"></span>
        </button>
      </div>
    </section>
  );
}
