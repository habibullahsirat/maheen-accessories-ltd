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

// const Mail = (p) => (
//   <Icon {...p}>
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <path d="m22 6-10 7L2 6" />
//   </Icon>
// );

// const Menu = (p) => (
//   <Icon {...p}>
//     <path d="M3 6h18M3 12h18M3 18h18" />
//   </Icon>
// );
// const Search = (p) => (
//   <Icon {...p}>
//     <circle cx="11" cy="11" r="7" />
//     <path d="m21 21-4.3-4.3" />
//   </Icon>
// );

// const links = [
//   "Home",
//   "About Us",
//   "Sustainability",
//   "Products",
//   "Policies",
//   "Production Facilities",
//   "Contact",
// ];

// export default function Navbar() {
//   return (
//     <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
//       <div className="max-w-[1900px] mx-auto flex items-center justify-between gap-10 px-6 py-5">
//         <div className="flex items-center gap-5">
//           <div className="flex items-center gap-2">
//             <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED] flex items-center justify-center text-white font-bold text-xs">
//               MA
//             </div>
//             <span className="font-hero font-semibold tracking-widest text-sm uppercase">
//               Maheen Accessories
//             </span>
//           </div>
//           <span className="hidden lg:block w-px h-5 bg-black/20" />
//           <div className="hidden lg:flex items-center gap-2 text-[#5F5E5D] text-[11px]">
//             <Mail size={12} />
//             <span className="lowercase">info@maheenaccessories.com</span>
//           </div>
//         </div>

//         <nav className="hidden xl:flex items-center gap-7">
//           {links.map((l, i) => (
//             <a
//               key={l}
//               href="#"
//               className={`font-sora text-[12px] tracking-[1px] uppercase pb-1 ${
//                 i === 0
//                   ? "font-semibold text-black border-b-2 border-[#8B68CE]"
//                   : "text-black/70 hover:text-black"
//               }`}
//             >
//               {l}
//             </a>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           <Search size={18} className="text-black/60" />
//           <Menu size={22} className="xl:hidden text-black/80" />
//         </div>
//       </div>
//     </header>
//   );
// }

// Version 2 Responsive
"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Menu,
  Search,
  X,
  ChevronRight,
  Home,
  Users,
  Recycle,
  LayoutGrid,
  FileText,
  PenSquare,
  Smartphone,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const links = [
  "Home",
  "About Us",
  "Sustainability",
  "Products",
  "Policies",
  "Production Facilities",
  "Contact",
];

const menuItems = [
  { label: "HOME", icon: Home, href: "/" },
  { label: "ABOUT US", icon: Users, href: "/about" },
  { label: "SUSTAINABILITY", icon: Recycle, href: "/sustainability" },
  { label: "PRODUCTS", icon: LayoutGrid, href: "/products" },
  { label: "POLICIES", icon: FileText, href: "/policies" },
  {
    label: "PRODUCTION FACILITIES",
    icon: PenSquare,
    href: "/production-facilities",
  },
  { label: "CONTACT", icon: Smartphone, href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

function HamburgerMenu({ open, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 xl:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[380px] h-full bg-[#131316] text-white overflow-y-auto transition-transform duration-300 ease-out xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        {/* Close button */}
        <div className="px-6 pt-6">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={26} strokeWidth={1.75} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 px-6 mt-5">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 34L22 14L30 30L34 22L40 34H8L14 34Z" fill="#8B8FE8" />
            <path
              d="M22 34L28 20L38 34H22Z"
              fill="#B58FE8"
              fillOpacity="0.85"
            />
          </svg>
          <div className="leading-tight">
            <p className="font-semibold tracking-wide text-[15px]">MAHEEN</p>
            <p className="font-semibold tracking-wide text-[15px]">
              ACCESSORIES
            </p>
          </div>
        </div>

        {/* Menu section */}
        <div className="px-6 mt-8">
          <p className="text-[11px] tracking-[0.2em] text-white/40 font-medium">
            MENU
          </p>

          <nav className="mt-3">
            {menuItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-4 group ${
                    idx !== menuItems.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <ItemIcon
                      size={18}
                      strokeWidth={1.75}
                      className="text-white/70 group-hover:text-white transition-colors"
                    />
                    <span className="text-[13px] tracking-wide text-white/90 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </span>
                  <ChevronRight
                    size={16}
                    strokeWidth={1.75}
                    className="text-white/40 group-hover:text-white/70 transition-colors"
                  />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Contact section */}
        <div className="px-6 mt-8">
          <p className="text-[11px] tracking-[0.2em] text-white/40 font-medium">
            CONTACT US
          </p>

          <div className="mt-4 space-y-4">
            <a
              href="mailto:kimocare@gmail.com"
              className="flex items-center gap-3 text-white/85 hover:text-white transition-colors"
            >
              <Mail size={17} strokeWidth={1.75} className="text-white/60" />
              <span className="text-[13px]">kimocare@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-white/85">
              <MapPin size={17} strokeWidth={1.75} className="text-white/60" />
              <span className="text-[13px]">28 Street, New York, USA</span>
            </div>

            <a
              href="tel:+9876543212811"
              className="flex items-center gap-3 text-white/85 hover:text-white transition-colors"
            >
              <Phone size={17} strokeWidth={1.75} className="text-white/60" />
              <span className="text-[13px]">(+987) 654 321 228 11</span>
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="px-6 mt-8 pb-8">
          <p className="text-[11px] tracking-[0.2em] text-white/40 font-medium">
            FIND OUR PAGE
          </p>

          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map(({ icon: SocialIcon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <SocialIcon
                  size={15}
                  strokeWidth={1.75}
                  className="text-white"
                />
              </a>
            ))}

            {/* Behance icon (not available in lucide-react, custom SVG) */}
            <a
              href="#"
              aria-label="Behance"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7h7.5c1.9 0 3.35.42 4.35 1.26.99.84 1.49 1.98 1.49 3.42 0 .84-.2 1.57-.6 2.19-.4.62-.98 1.11-1.75 1.48.99.3 1.75.83 2.28 1.58.53.75.8 1.65.8 2.72 0 1.56-.55 2.78-1.65 3.65-1.1.86-2.6 1.29-4.5 1.29H0V7zm4.15 6.02h2.7c.86 0 1.53-.17 2-.5.47-.34.7-.85.7-1.53 0-.72-.24-1.24-.72-1.57-.48-.33-1.18-.5-2.1-.5h-2.58v4.1zm0 6.61h3.05c.99 0 1.75-.19 2.28-.57.53-.38.8-.94.8-1.7 0-.76-.27-1.33-.8-1.7-.53-.37-1.3-.56-2.3-.56H4.15v4.53zM23.4 8.2h-6.9V6.4h6.9v1.8zM24 15.66H15c.08 1.03.43 1.82 1.05 2.36.62.55 1.42.82 2.4.82.75 0 1.4-.16 1.95-.48.55-.32.9-.75 1.05-1.28h3.28c-.4 1.5-1.16 2.63-2.3 3.4-1.13.77-2.5 1.15-4.1 1.15-2.05 0-3.68-.63-4.9-1.9-1.22-1.26-1.83-2.98-1.83-5.14 0-2.13.62-3.83 1.85-5.1 1.24-1.28 2.87-1.92 4.9-1.92 1.36 0 2.55.3 3.57.9 1.02.6 1.8 1.44 2.35 2.5.55 1.06.83 2.32.83 3.77 0 .3-.02.6-.05.92zm-9-2.24h5.75c-.06-.9-.36-1.6-.9-2.1-.53-.5-1.23-.75-2.1-.75-.85 0-1.55.26-2.1.78-.55.52-.87 1.2-.65 2.07z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-[1900px] mx-auto flex items-center justify-between gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-b from-[#8B68CE] to-[#9AD2ED] flex items-center justify-center text-white font-bold text-xs">
              MA
            </div>
            <span className="font-hero font-semibold tracking-widest text-xs sm:text-sm uppercase truncate">
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

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Search size={18} className="text-black/60" />
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="xl:hidden text-black/80"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
