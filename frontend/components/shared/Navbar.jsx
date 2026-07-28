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

const Mail = (p) => (
  <Icon {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </Icon>
);

const Menu = (p) => (
  <Icon {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Icon>
);
const Search = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Icon>
);

const links = [
  "Home",
  "About Us",
  "Sustainability",
  "Products",
  "Policies",
  "Production Facilities",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-[1900px] mx-auto flex items-center justify-between gap-10 px-6 py-5">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED] flex items-center justify-center text-white font-bold text-xs">
              MA
            </div>
            <span className="font-hero font-semibold tracking-widest text-sm uppercase">
              Maheen Accessories
            </span>
          </div>
          <span className="hidden lg:block w-px h-5 bg-black/20" />
          <div className="hidden lg:flex items-center gap-2 text-[#5F5E5D] text-[11px]">
            <Mail size={12} />
            <span className="lowercase">info@maheenaccessories.com</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-7">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`font-sora text-[12px] tracking-[1px] uppercase pb-1 ${
                i === 0
                  ? "font-semibold text-black border-b-2 border-[#8B68CE]"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Search size={18} className="text-black/60" />
          <Menu size={22} className="xl:hidden text-black/80" />
        </div>
      </div>
    </header>
  );
}
