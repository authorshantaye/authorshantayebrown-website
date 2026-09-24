export default function About() {
  const facts = [
    ["Author", "Deviants & Saints series"],
    ["Technologist", "IT Support & Marketing"],
    ["Creator", "The Journey To Getting Published"],
  ];
  return (
    <section id="about" className="py-24">
      <div className="container-x grid gap-14 md:grid-cols-2">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="h2 mt-3">
            Part storyteller, <span className="italic text-rose">part systems thinker.</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-bone/75">
          <p>
            Shantaye Brown writes fiction that lives in the grey areas, where the line between
            deviant and saint is never as clean as it looks. <em>Zel</em> is the first book in
            her <em>Deviants &amp; Saints</em> series.
          </p>
          <p>
            By day she works in tech, with a background in IT support and marketing. That same
            problem-solving mindset shaped how she published: learning the process, doing the
            work, and building her own path to readers.
          </p>
          <p>
            She documents it all on YouTube in <span className="text-bone">The Journey To Getting
            Published</span>, sharing the real steps, costs, and lessons so other writers can get
            their books out into the world too.
          </p>
          <dl className="grid gap-4 pt-6 sm:grid-cols-3">
            {facts.map(([k, v]) => (
              <div key={k} className="border-l-2 border-rose pl-4">
                <dt className="text-xs uppercase tracking-widest text-gold">{k}</dt>
                <dd className="mt-1 text-sm text-bone">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
