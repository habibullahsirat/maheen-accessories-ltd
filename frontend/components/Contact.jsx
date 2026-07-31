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
// const Phone = (p) => (
//   <Icon {...p}>
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </Icon>
// );
// const MapPin = (p) => (
//   <Icon {...p}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </Icon>
// );
// const ArrowUpRight = (p) => (
//   <Icon {...p}>
//     <path d="M7 17 17 7M7 7h10v10" />
//   </Icon>
// );

// const CornerBorderButton = ({ children, dark = false }) => (
//   <button
//     className={`relative font-sora text-[14px] tracking-[0.8px] capitalize px-8 py-4 flex items-center gap-3 ${
//       dark ? "text-white" : "text-black"
//     }`}
//     style={{ background: "rgba(0,0,0,0.08)" }}
//   >
//     <span
//       className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${
//         dark ? "border-white" : "border-black"
//       }`}
//     />
//     <span
//       className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${
//         dark ? "border-white" : "border-black"
//       }`}
//     />
//     {children}
//     <ArrowUpRight size={16} />
//   </button>
// );

// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Our Mail",
//     value: "info@maheenaccessories.com",
//     cta: "Mail Now",
//   },
//   {
//     icon: Phone,
//     label: "Call Us",
//     value: "+8801713856882",
//     cta: "Call Now",
//   },
//   {
//     icon: MapPin,
//     label: "Our Address",
//     value: "House # 43/A, Road # 24, Gulshan-1, Dhaka 1212, Bangladesh.",
//     cta: "View Map",
//   },
// ];

// export default function Contact() {
//   return (
//     <>
//       <section className="max-w-[1300px] mx-auto px-6 py-28">
//         <div className="relative border border-black rounded-[10px] px-8 md:px-24 pt-20 pb-32">
//           <div className="text-center max-w-[700px] mx-auto">
//             <h2 className="font-sora text-[36px] md:text-[50px] tracking-[-1.06px] text-black">
//               Get In Touch
//             </h2>
//             <p className="font-sora font-light text-[18px] text-black leading-[1.55] mt-4">
//               Contact us for a great photography session &amp; beautiful
//               captured moments
//             </p>
//           </div>

//           <form className="max-w-[860px] mx-auto mt-16 flex flex-col gap-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input
//                 placeholder="Name*"
//                 className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black"
//               />
//               <input
//                 placeholder="E-mail*"
//                 className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black"
//               />
//             </div>
//             <input
//               placeholder="Subject"
//               className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black"
//             />
//             <textarea
//               placeholder="Text"
//               rows={4}
//               className="font-sora font-light text-[17px] border-b border-black/30 pb-4 bg-transparent outline-none placeholder-black resize-none"
//             />
//             <div className="flex justify-center mt-8">
//               <CornerBorderButton>Explore Now</CornerBorderButton>
//             </div>
//           </form>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
//             {contactInfo.map((c) => (
//               <div key={c.label} className="flex items-start gap-5">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-t from-[#8B68CE] to-[#9AD2ED] flex items-center justify-center shrink-0">
//                   <c.icon size={22} className="text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-sora text-[24px] text-black">
//                     {c.label}
//                   </h4>
//                   <p className="font-sora font-light text-[16px] text-black mt-1 underline">
//                     {c.value}
//                   </p>
//                   <a
//                     href="#"
//                     className="font-sora font-semibold text-[15px] uppercase underline mt-3 inline-block"
//                   >
//                     {c.cta}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// Version 2
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-20 mb-8">
      {/* Wave Background */}
      <div className="absolute bottom-24 left-0 w-full">
        <Image
          src="/service-section-bg.png" // <-- Your background image
          alt="background"
          width={1920}
          height={500}
          className="w-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Form Card */}
        <div className="mx-auto rounded-md bg-white px-8 py-20 shadow-lg md:px-24">
          <h2 className="text-center text-[62px] font-light leading-none text-black">
            Get In Touch
          </h2>

          <p className="mt-5 text-center text-[18px] text-[#4B4B4B]">
            Contact us for a great photography session &amp; beautiful captured
            moments
          </p>

          <form className="mx-auto mt-20 max-w-[820px]">
            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <label className="block text-[18px] text-[#333]">Name*</label>

                <input
                  type="text"
                  className="mt-2 w-full border-b border-black bg-transparent pb-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-[18px] text-[#333]">E-mail*</label>

                <input
                  type="email"
                  className="mt-2 w-full border-b border-black bg-transparent pb-2 outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-10">
              <label className="block text-[18px] text-[#333]">Subject</label>

              <input
                type="text"
                className="mt-2 w-full border-b border-black bg-transparent pb-2 outline-none"
              />
            </div>

            {/* Message */}
            <div className="mt-10">
              <label className="block text-[18px] text-[#333]">Text</label>

              <textarea
                rows={6}
                className="mt-2 w-full resize-none border-b border-black bg-transparent outline-none"
              />
            </div>

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="flex h-[56px] w-[170px] items-center justify-center gap-4 border border-[#4D4D4D] bg-[#EFEFEF] text-[16px] font-medium transition hover:bg-black hover:text-white"
              >
                Send Mail
                <ArrowUpRight size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Contact Icons */}
        <div className="mt-20 flex items-center justify-center gap-36">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#A8C5FF] to-[#8A5EFF] text-white shadow-lg">
            <Mail size={20} />
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#A8C5FF] to-[#8A5EFF] text-white shadow-lg">
            <Phone size={20} />
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#A8C5FF] to-[#8A5EFF] text-white shadow-lg">
            <MapPin size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
