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

const ArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </Icon>
);

const features = [
  "Creative Custom Design",
  "20+ Years Experience",
  "Globally Awarded",
  "Best Quality With Price",
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="max-w-[1466px] mx-auto px-6 py-28">
        <Eyebrow>04 // Our Features</Eyebrow>
        <h2 className="font-sora text-[36px] md:text-[50px] tracking-[-1.06px] text-black mt-2">
          Why choose Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 mt-14 items-center">
          <div className="flex-1 flex flex-col">
            {features.map((f, i) => (
              <div
                key={f}
                className="flex items-center gap-6 py-6 border-t border-black/15"
              >
                <ArrowUpRight
                  size={26}
                  className={i === 0 ? "text-[#8B68CE]" : "text-black"}
                />
                <span
                  className={`font-sora text-[22px] ${i === 0 ? "" : "text-black"}`}
                  style={
                    i === 0
                      ? {
                          backgroundImage:
                            "linear-gradient(90deg,#8B68CE 0%,#9AD2ED 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : {}
                  }
                >
                  {f}
                </span>
              </div>
            ))}
          </div>

          <div className="flex-1 relative rounded-[10px] overflow-hidden min-h-[420px] w-full">
            <img
              src="/factory.jpg"
              alt="factory"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-6 bottom-6 bg-[#151515] text-white p-6 max-w-[300px] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED]" />
                <span className="font-hero uppercase tracking-widest text-sm">
                  Maheen Accessories Ltd.
                </span>
              </div>
              <p className="font-sora font-light text-[14px] leading-[1.5] text-[#DDDDDD]">
                Maheen Accessories Ltd has been serving for 20 years, since its
                establishment in 2005, building a reputation for quality
                accessories and exceptional service.
              </p>
              <a
                href="#"
                className="font-sora text-[13px] mt-4 inline-flex items-center gap-2"
              >
                Read More <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="absolute right-0 bottom-0 flex">
              <div className="bg-white px-8 py-6 flex flex-col items-center">
                <span className="font-sora text-[36px]">500+</span>
                <span className="font-sora text-[16px]">Designs</span>
              </div>
              <div className="bg-[#9AD2ED] px-8 py-6 flex flex-col items-center">
                <span className="font-sora text-[36px]">3000k</span>
                <span className="font-sora text-[16px]">Order Covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
