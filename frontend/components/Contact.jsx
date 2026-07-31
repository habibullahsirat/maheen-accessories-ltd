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
