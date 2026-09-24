import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />
      <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <p className="eyebrow">Author · Technologist · Creator</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Stories with an edge.
            <span className="block italic text-rose">Written by Shantaye Brown.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-bone/75">
            Author of the <em>Deviants &amp; Saints</em> series, IT professional, and host of
            <span className="text-bone"> The Journey To Getting Published</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#books" className="btn-primary">Explore Books</a>
            <a href="#vlogs" className="btn-ghost">Watch Vlogs</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-coal">
            <Image
              src="/images/shantaye.jpg"
              alt="Author Shantaye Brown"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
