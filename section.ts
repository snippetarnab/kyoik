import { portfolioData as d } from "@/data/portfolioData";
import Contact from "./Contact";

export default function Hero() {
  const p = d.person;
  return (
    <section id="home" className="scroll-mt-24 pb-12">
      <div className="relative mb-6 h-28 w-28">
        <img
          src={p.avatar}
          alt="Profile"
          className="h-full w-full rounded-full border border-line object-cover"
        />
        <img
          src={p.wave}
          alt=""
          className="absolute -right-2 -top-1 h-9 w-9 origin-bottom-right animate-[wave_2.4s_ease-in-out_1]"
        />
      </div>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {p.greeting} {p.name}.
      </h1>
      <p className="mt-2 text-lg text-muted">{p.role}</p>
      <div className="mt-6 space-y-4 leading-relaxed text-fg/90">
        {p.bio.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
      <div className="mt-8">
        <Contact />
      </div>
    </section>
  );
}
