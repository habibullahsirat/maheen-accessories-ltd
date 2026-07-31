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
