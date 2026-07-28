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

const CornerBorderButton = ({ children, dark = false }) => (
  <button
    className={`relative font-sora text-[14px] tracking-[0.8px] capitalize px-8 py-4 flex items-center gap-3 ${
      dark ? "text-white" : "text-black"
    }`}
    style={{ background: "rgba(0,0,0,0.08)" }}
  >
    <span
      className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${
        dark ? "border-white" : "border-black"
      }`}
    />
    <span
      className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${
        dark ? "border-white" : "border-black"
      }`}
    />
    {children}
    <ArrowUpRight size={16} />
  </button>
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

const products = [
  "https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139834-6b1851ce9a55?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622037022824-0c71d511ee4d?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139962-020c76b18d18?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139929-0f0bdf9d5d0e?q=80&w=700&auto=format&fit=crop",
];

export default function ProductPortfolio() {
  return (
    <>
      <section className="max-w-[1276px] mx-auto px-6 py-28">
        <SectionHeading
          eyebrow="06 // Our Portfolio"
          line1="Maheen Creates"
          italic="All of Your"
          line2="beautiful Products"
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
          {products.map((img, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-full aspect-[610/620] overflow-hidden bg-black/5">
                <img
                  src={img}
                  alt="product"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-sora text-[24px] text-black">XYZ</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <CornerBorderButton>Explore Now</CornerBorderButton>
        </div>
      </section>
    </>
  );
}
