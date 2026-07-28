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

const Instagram = (p) => (
  <Icon {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </Icon>
);

const igImages = [
  "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=500&auto=format&fit=crop",
];

export default function InstagramStrip() {
  return (
    <>
      <section className="relative w-full">
        <div className="grid grid-cols-2 sm:grid-cols-5">
          {igImages.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={img}
                alt="instagram"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/60 backdrop-blur px-10 py-7 flex flex-col items-center gap-2">
          <Instagram size={26} />
          <span className="font-sora text-[13px] uppercase tracking-wide">
            Follow Us on Instagram
          </span>
        </button>
      </section>
    </>
  );
}
