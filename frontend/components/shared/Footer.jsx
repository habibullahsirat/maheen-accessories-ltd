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

const Send = (p) => (
  <Icon {...p}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
    );
  </Icon>
);

const footerCols = [
  ["About Us", "Our Management", "Products", "Gallery", "Policies"],
  [
    "Sustainability",
    "Product Facilities",
    "Our Partners",
    "Latest News",
    "Contact Us",
  ],
];

export default function Footer() {
  return (
    <footer className="w-full text-white" style={{ background: "#121212" }}>
      <div className="max-w-[1276px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ul className="flex flex-col gap-6">
            {footerCols[0].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="font-sora text-[16px] tracking-[3px] uppercase text-[#DDDDDD]"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED]" />
              <span className="font-hero uppercase tracking-widest text-sm">
                Maheen Accessories Ltd.
              </span>
            </div>
            <p className="font-sora uppercase text-[18px] tracking-[2px] text-[#DDDDDD]">
              Express your thought via Email
            </p>
            <form className="w-full max-w-[420px] flex border border-[#3C3C3C]">
              <input
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-4 font-sora font-light text-[15px] text-[#6C757D] outline-none"
              />
              <button className="px-6 flex items-center gap-2 font-sora text-[12px] uppercase tracking-[2px] text-[#DDDDDD]">
                Send <Send size={14} />
              </button>
            </form>
          </div>

          <ul className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
            {footerCols[1].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="font-sora text-[16px] tracking-[3px] uppercase text-[#DDDDDD]"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-sora font-light text-[16px] text-white">
            Goinnovior
          </span>
          <span className="font-sora font-light text-[16px] text-[#DDDDDD]">
            Maheen Accessories Limited, All Rights Reserved
          </span>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
              >
                <Icon size={13} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
