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

const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
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

const posts = [
  {
    date: "25 Sep 2023",
    title: "Maheen Accessories participation at GAPEXPO, ICCB Dhaka.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop",
  },
  {
    date: "22 Sep 2023",
    title: "New year 2024 celebration at Maheen Accessories",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=700&auto=format&fit=crop",
  },
  {
    date: "22 Sep 2023",
    title: "New year 2024 celebration at Maheen Accessories",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=700&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <>
      <section className="max-w-[1466px] mx-auto px-6 py-28">
        <SectionHeading
          eyebrow="07 // Latest News"
          line1="Our Activity"
          italic="Related Blog"
          right={
            <p className="font-sora font-light text-black/70 text-[18px] leading-[1.55] max-w-[620px] text-right">
              We&apos;re deeply passionate about catching your lovely memories
              and conveying your love for every moment of life as a whole.
            </p>
          }
        />

        <div className="flex flex-col md:flex-row gap-6 mt-16">
          {posts.map((p, i) => (
            <div key={i} className="flex-1 border border-black/80 p-5">
              <div className="w-full h-[270px] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="inline-block bg-[#8B68CE] text-white text-[13px] tracking-[0.4px] uppercase px-3 py-1 rounded mt-6">
                {p.date}
              </span>
              <h4 className="font-sora font-bold text-[19px] leading-[1.6] text-black mt-4">
                {p.title}
              </h4>
              <a
                href="#"
                className="font-sora font-bold text-[16px] mt-6 inline-flex items-center gap-2 text-black"
              >
                Read More <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
