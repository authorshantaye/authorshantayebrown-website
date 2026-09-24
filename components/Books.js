import { site } from "@/lib/site";

function Cover({ title, series, book, muted }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-2xl ${
        muted ? "bg-smoke" : "bg-gradient-to-br from-rose-deep via-ink to-ink"
      }`}
    >
      <div className="absolute inset-3 border border-gold/50" />
      <div className="flex h-full flex-col items-center justify-between p-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gold">{series}</p>
        <p className={`font-serif text-6xl ${muted ? "text-bone/30" : "text-bone"}`}>{title}</p>
        <p className="text-[10px] uppercase tracking-[0.35em] text-bone/70">
          {book} · Shantaye Brown
        </p>
      </div>
    </div>
  );
}

export default function Books() {
  return (
    <section id="books" className="border-t border-bone/10 bg-coal py-24">
      <div className="container-x">
        <p className="eyebrow">The Books</p>
        <h2 className="h2 mt-3">Deviants &amp; Saints</h2>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
          {/* Swap this for the real cover: put zel-cover.jpg in /public/images and use <Image /> */}
          <Cover title="Zel" series="Deviants & Saints" book="Book One" />
          <div>
            <p className="text-sm uppercase tracking-widest text-gold">Book One · Available now</p>
            <h3 className="mt-2 font-serif text-5xl">Zel</h3>
            {/* TODO: replace with the official back-cover synopsis */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/75">
              The first book in the <em>Deviants &amp; Saints</em> series. Official synopsis coming soon.
              Grab your copy on Amazon and start the series today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.links.amazonZel} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Buy on Amazon
              </a>
              <a href="#contact" className="btn-ghost">Get release alerts</a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Book Two", "Book Three"].map((b) => (
            <div key={b} className="flex items-center gap-5 rounded-xl border border-bone/10 bg-ink p-5">
              <div className="w-20 shrink-0">
                <Cover title="?" series="D & S" book={b} muted />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">{b}</p>
                <p className="mt-1 font-serif text-xl">Coming soon</p>
                <p className="mt-1 text-sm text-bone/60">Join the list to hear first.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
