export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[720px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 100%), url(https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1600&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1466px] w-full mx-auto px-6 py-24 flex flex-col gap-6">
        <p className="font-sora text-white uppercase text-[16px] tracking-[3px]">
          Photography Agency
        </p>
        <h1 className="font-hero font-bold text-white text-[44px] md:text-[70px] leading-[1.05] tracking-[-1.2px] max-w-[820px]">
          Innovative Solutions for Every Need
        </h1>
        <p className="font-sora font-light text-[#DDDDDD] text-[18px] md:text-[22px] leading-[1.55] max-w-[830px]">
          At Maheen Accessories Ltd, we provide top-notch products that meet
          world-class standards. Our advanced infrastructure and expert team
          cater to diverse customer needs. Discover our high-quality buttons,
          ribbons, and bows designed to elevate your creations.
        </p>

        <div className="flex items-center gap-8 mt-4">
          <button className="bg-[#9AD2ED] text-[#151515] font-sora text-[15px] tracking-[0.9px] capitalize px-8 py-4 flex items-center gap-3">
            Book Kimono <ArrowUpRight size={18} />
          </button>
          <CornerBorderButton dark>Explore Now</CornerBorderButton>
        </div>
      </div>

      {/* slide indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-9">
        <span className="font-sora text-white text-[12px] tracking-widest uppercase">
          Prev
        </span>
        <div className="flex items-center gap-7">
          <span className="w-24 h-px bg-white/30" />
          <div className="flex items-center gap-5">
            <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
          <span className="w-24 h-px bg-white/30" />
        </div>
        <span className="font-sora text-white text-[12px] tracking-widest uppercase">
          Next
        </span>
      </div>
    </section>
  );
}
