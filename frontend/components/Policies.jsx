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

const policies = [
  {
    n: "01",
    title: "Occupational Health and Safety Policy",
    icon: ShieldCheck,
  },
  { n: "02", title: "Product Quality Policy", icon: FileCheck2 },
  { n: "03", title: "Environmental Policy", icon: Leaf },
  { n: "04", title: "Social Compliance Policy", icon: Users2 },
  { n: "05", title: "Workplace Harassment Policy", icon: HeartHandshake },
  { n: "06", title: "Chemical Use Policy", icon: FlaskConical },
];

export default function Policies() {
  return (
    <>
      <section className="max-w-[1466px] mx-auto px-6 py-28">
        <SectionHeading
          eyebrow="05 // Policies"
          line1="Our Smart"
          italic="Policies"
          right={
            <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
              We&apos;re deeply passionate about keeping every promise,
              conveying our commitment to quality in everything we deliver.
            </p>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {policies.map((p) => (
            <div
              key={p.n}
              className="bg-black/5 aspect-[313/361] flex flex-col justify-center gap-4 px-8 relative"
            >
              <p.icon size={44} strokeWidth={1} className="text-black" />
              <div className="flex flex-col gap-3">
                <span className="font-sora text-[20px] font-light">{p.n}</span>
                <h4 className="font-sora font-bold text-[19px] leading-[1.5] text-black">
                  {p.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
