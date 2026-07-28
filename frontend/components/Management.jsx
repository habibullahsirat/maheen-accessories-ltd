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

const team = [
  {
    name: "Jahangir Saiful Islam",
    role: "Managing Director",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Zahidul Islam",
    role: "Director",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Nomayer Islam Taru",
    role: "Director",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

export default function Management() {
  return (
    <>
      <section
        className="w-full py-28"
        style={{ background: "rgba(154,210,237,0.1)" }}
      >
        <div className="max-w-[1466px] mx-auto px-6">
          <SectionHeading
            eyebrow="05 // Our Management"
            line1="Our Core Members"
            italic="Of The Board"
            right={
              <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
                Introducing our team of talented and skilled professionals ready
                to increase productivity and bring your business to new levels
                of efficiency and sustainability.
              </p>
            }
          />

          <div className="flex flex-col md:flex-row gap-10 mt-16">
            {team.map((m) => (
              <div key={m.name} className="flex-1">
                <div className="w-full h-[384px] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-sora text-[26px] mt-4 text-black">
                  {m.name}
                </h4>
                <p className="font-sora font-light text-[18px] text-black/70">
                  {m.role}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full border border-black flex items-center justify-center"
                    >
                      <Icon size={13} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
