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

// const ChevronLeft = (p) => (
//   <Icon {...p}>
//     <path d="m15 18-6-6 6-6" />
//   </Icon>
// );
// const ChevronRight = (p) => (
//   <Icon {...p}>
//     <path d="m9 18 6-6-6-6" />
//   </Icon>
// );

// const ArrowUpRight = (p) => (
//   <Icon {...p}>
//     <path d="M7 17 17 7M7 7h10v10" />
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

// const albumImages = [
//   "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=900&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop",
// ];

// export default function PhotoAlbums() {
//   return (
//     <>
//       <section className="text-center w-full bg-white py-28 overflow-hidden">
//         <SectionHeading
//           eyebrow="02 // Photo Albums"
//           line1="Collection of photos"
//           italic="All of Our"
//           line2="Best Works"
//           center
//         />

//         <div className="relative mt-16 flex items-center justify-center gap-4 px-6">
//           <button className="hidden md:flex w-16 h-16 rounded-full bg-white shadow items-center justify-center shrink-0">
//             <ChevronLeft />
//           </button>

//           <div className="flex items-center gap-4 overflow-x-auto max-w-[1400px] scrollbar-hide">
//             {albumImages.map((img, i) => (
//               <div
//                 key={i}
//                 className={`relative shrink-0 rounded-[22px] overflow-hidden shadow-xl ${
//                   i === 2 ? "w-[420px] h-[472px]" : "w-[280px] h-[380px]"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt="portfolio"
//                   className="w-full h-full object-cover"
//                 />
//                 {i === 2 && (
//                   <>
//                     <div className="absolute left-8 bottom-8 text-white">
//                       <p className="font-sora text-[24px]">Customize Button</p>
//                       <p className="font-sora text-[12px] tracking-[1.1px] uppercase">
//                         By Maheen Accessories Limited.
//                       </p>
//                     </div>
//                     <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white flex items-center justify-center">
//                       <ArrowUpRight className="text-[#9747FF]" />
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>

//           <button className="hidden md:flex w-16 h-16 rounded-full bg-white shadow items-center justify-center shrink-0">
//             <ChevronRight />
//           </button>
//         </div>

//         <p className="font-display italic text-center text-[10vw] md:text-[130px] leading-none text-black/10 mt-10 select-none uppercase">
//           Portfolio
//         </p>
//       </section>
//     </>
//   );
// }

// Version 2
// import { useState } from "react";
// import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

// const albums = [
//   {
//     id: 1,
//     side: "https://picsum.photos/seed/ribbon-tag/600/800",
//     main: "https://picsum.photos/seed/metal-tags-brass/1000/700",
//     title: "Customize Button",
//     author: "BY MAHEEN ACCESSORIES LIMITED.",
//   },
//   {
//     id: 2,
//     side: "https://picsum.photos/seed/tape-rolls/600/800",
//     main: "https://picsum.photos/seed/leather-buckle/1000/700",
//     title: "Leather Buckle Set",
//     author: "BY MAHEEN ACCESSORIES LIMITED.",
//   },
//   {
//     id: 3,
//     side: "https://picsum.photos/seed/thread-spool/600/800",
//     main: "https://picsum.photos/seed/zipper-pull/1000/700",
//     title: "Zipper Pull Hardware",
//     author: "BY MAHEEN ACCESSORIES LIMITED.",
//   },
// ];

// export default function PhotoAlbums() {
//   const [index, setIndex] = useState(0);

//   const total = albums.length;
//   const prevIndex = (index - 1 + total) % total;
//   const nextIndex = (index + 1) % total;

//   const goPrev = () => setIndex(prevIndex);
//   const goNext = () => setIndex(nextIndex);

//   const current = albums[index];

//   return (
//     <section className="relative w-full overflow-hidden bg-white py-24">
//       {/* Giant background watermark text */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center select-none">
//         <span
//           className="font-serif font-normal text-gray-300/70 leading-none whitespace-nowrap"
//           style={{ fontSize: "13vw", letterSpacing: "0.05em" }}
//         >
//           PORTFOLIO
//         </span>
//       </div>

//       {/* Header */}
//       <div className="relative z-10 mx-auto mb-16 max-w-3xl px-6 text-center">
//         <p className="mb-4 text-sm font-semibold tracking-wide text-gray-800">
//           <span className="text-indigo-400">02 //</span> PHOTO ALBUMS
//         </p>
//         <h2 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl">
//           Collection of photos{" "}
//           <span className="italic font-serif">All of Our</span>
//           <br />
//           Best Works
//         </h2>
//       </div>

//       {/* Carousel */}
//       <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-center px-4">
//         {/* Left arrow */}
//         <button
//           onClick={goPrev}
//           aria-label="Previous"
//           className="mr-4 hidden shrink-0 items-center justify-center text-gray-900 transition hover:-translate-x-1 sm:flex"
//         >
//           <ArrowLeft size={28} strokeWidth={1.5} />
//         </button>

//         {/* Track */}
//         <div className="flex w-full items-center justify-center gap-0 overflow-hidden">
//           {/* Left peek image */}
//           <div className="hidden h-[300px] w-1/4 shrink-0 -mr-6 overflow-hidden rounded-2xl md:block">
//             <img
//               src={albums[prevIndex].side}
//               alt=""
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Main card */}
//           <div className="relative z-10 h-[460px] w-full max-w-2xl shrink-0 overflow-hidden rounded-2xl shadow-xl">
//             <img
//               src={current.main}
//               alt={current.title}
//               className="h-full w-full object-cover"
//             />

//             {/* Next chip button, top right */}
//             <button
//               onClick={goNext}
//               aria-label="Next"
//               className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md transition hover:bg-white"
//             >
//               <ChevronRight size={20} strokeWidth={2} />
//             </button>

//             {/* Bottom-left caption overlay */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/10 via-transparent to-transparent px-6 pb-6 pt-10">
//               <p className="text-lg font-medium text-gray-900">
//                 {current.title}
//               </p>
//               <p className="mt-0.5 text-xs font-medium tracking-wide text-gray-500">
//                 {current.author}
//               </p>
//             </div>
//           </div>

//           {/* Right peek image */}
//           <div className="hidden h-[300px] w-1/4 shrink-0 -ml-6 overflow-hidden rounded-2xl md:block">
//             <img
//               src={albums[nextIndex].side}
//               alt=""
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Right arrow */}
//         <button
//           onClick={goNext}
//           aria-label="Next"
//           className="ml-4 hidden shrink-0 items-center justify-center text-gray-900 transition hover:translate-x-1 sm:flex"
//         >
//           <ArrowRight size={28} strokeWidth={1.5} />
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="relative z-10 mt-8 flex justify-center gap-2">
//         {albums.map((a, i) => (
//           <button
//             key={a.id}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             className={`h-1.5 rounded-full transition-all ${
//               i === index ? "w-6 bg-gray-900" : "w-1.5 bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

//Version 3
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function PhotoAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        // const res = await fetch("http://localhost:3000/api/album", {
        //   cache: "no-store",
        // });
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/album`,
        );

        const data = await res.json();
        setAlbums(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <section className="py-24 text-center">Loading...</section>;
  }

  if (!albums.length) {
    return <section className="py-24 text-center">No photos found.</section>;
  }

  const total = albums.length;

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const goPrev = () => setIndex(prevIndex);
  const goNext = () => setIndex(nextIndex);

  const current = albums[index];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center select-none">
        <span
          className="font-serif font-normal text-gray-300/70 leading-none whitespace-nowrap"
          style={{
            fontSize: "13vw",
            letterSpacing: "0.05em",
          }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto mb-16 max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold tracking-wide text-gray-800">
          <span className="text-indigo-400">02 //</span> PHOTO ALBUMS
        </p>

        <h2 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl">
          Collection of photos <span className="italic">All of Our</span>
          <br />
          Best Works
        </h2>
      </div>

      {/* Slider */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-center px-4">
        {/* Left Arrow */}
        <button onClick={goPrev} className="mr-4 hidden sm:flex">
          <ArrowLeft size={28} strokeWidth={1.5} />
        </button>

        <div className="flex w-full items-center justify-center overflow-hidden">
          {/* Left Preview */}
          <div className="relative hidden h-[300px] w-1/4 -mr-6 overflow-hidden rounded-2xl md:block">
            <Image
              src={albums[prevIndex].image}
              alt={albums[prevIndex].title}
              fill
              className="object-cover"
            />
          </div>

          {/* Main Image */}
          <div className="relative z-10 h-[460px] w-full max-w-2xl overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              className="object-cover"
            />

            {/* Top Right Button */}
            <button
              onClick={goNext}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
            >
              <ChevronRight size={20} />
            </button>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/40 via-black/10 to-transparent px-6 pb-6 pt-10">
              <p className="text-xl font-semibold text-white">
                {current.title}
              </p>
            </div>
          </div>

          {/* Right Preview */}
          <div className="relative hidden h-[300px] w-1/4 -ml-6 overflow-hidden rounded-2xl md:block">
            <Image
              src={albums[nextIndex].image}
              alt={albums[nextIndex].title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={goNext} className="ml-4 hidden sm:flex">
          <ArrowRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Dots */}
      <div className="relative z-10 mt-8 flex justify-center gap-2">
        {albums.map((album, i) => (
          <button
            key={album._id}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gray-900" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
