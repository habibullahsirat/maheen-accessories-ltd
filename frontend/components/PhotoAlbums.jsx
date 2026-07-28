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

const ChevronLeft = (p) => (
  <Icon {...p}>
    <path d="m15 18-6-6 6-6" />
  </Icon>
);
const ChevronRight = (p) => (
  <Icon {...p}>
    <path d="m9 18 6-6-6-6" />
  </Icon>
);

const ArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </Icon>
);

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
        {line2 ? (
          <>
            <br />
            {line2}
          </>
        ) : null}
      </h2>
    </div>
    {right}
  </div>
);

const albumImages = [
  "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop",
];

export default function PhotoAlbums() {
  return (
    <>
      <section className="text-center w-full bg-white py-28 overflow-hidden">
        <SectionHeading
          eyebrow="02 // Photo Albums"
          line1="Collection of photos"
          italic="All of Our"
          line2="Best Works"
          center
        />

        <div className="relative mt-16 flex items-center justify-center gap-4 px-6">
          <button className="hidden md:flex w-16 h-16 rounded-full bg-white shadow items-center justify-center shrink-0">
            <ChevronLeft />
          </button>

          <div className="flex items-center gap-4 overflow-x-auto max-w-[1400px] scrollbar-hide">
            {albumImages.map((img, i) => (
              <div
                key={i}
                className={`relative shrink-0 rounded-[22px] overflow-hidden shadow-xl ${
                  i === 2 ? "w-[420px] h-[472px]" : "w-[280px] h-[380px]"
                }`}
              >
                <img
                  src={img}
                  alt="portfolio"
                  className="w-full h-full object-cover"
                />
                {i === 2 && (
                  <>
                    <div className="absolute left-8 bottom-8 text-white">
                      <p className="font-sora text-[24px]">Customize Button</p>
                      <p className="font-sora text-[12px] tracking-[1.1px] uppercase">
                        By Maheen Accessories Limited.
                      </p>
                    </div>
                    <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight className="text-[#9747FF]" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <button className="hidden md:flex w-16 h-16 rounded-full bg-white shadow items-center justify-center shrink-0">
            <ChevronRight />
          </button>
        </div>

        <p className="font-display italic text-center text-[10vw] md:text-[130px] leading-none text-black/10 mt-10 select-none uppercase">
          Portfolio
        </p>
      </section>
    </>
  );
}
