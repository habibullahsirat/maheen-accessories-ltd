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

export default function Testimonial() {
  return (
    <>
      <section
        className="relative w-full py-24 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(0,0,0,0) 0%, #000 100%), url(https://images.unsplash.com/photo-1610030181087-540f6f076d63?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="bg-[#1E1E1E]/80 rounded-md p-12 max-w-[720px]">
            <div className="flex gap-1 text-[#9AD2ED] mb-6">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <p className="font-sora font-light text-[20px] leading-[1.7] text-[#DDDDDD] mb-10">
              &ldquo;Superior buttons and exceptional service. Thank you, Maheen
              Accessories!&ldquo;
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-[#3C3C3C]">
              <div className="w-[70px] h-[70px] rounded-full border-4 border-white/25 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/61.jpg"
                  alt="Mir Mahatuduh Hasan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-sora text-white text-[24px]">
                  Mir Mahatuduh Hasan
                </h4>
                <p className="font-sora font-light text-[16px] text-[#DDDDDD]">
                  Chicago
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <button className="w-[54px] h-[54px] rounded-full border border-dashed border-white flex items-center justify-center text-white">
              <ChevronLeft size={17} />
            </button>
            <button className="w-[54px] h-[54px] rounded-full border border-dashed border-white bg-white/10 flex items-center justify-center text-white">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
