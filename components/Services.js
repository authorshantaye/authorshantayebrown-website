const services = [
  {
    title: "My Why",
    body: "Clarify what you want your book to do for you and your readers before you spend a dollar.",
  },
  {
    title: "When",
    body: "Build a realistic timeline from final draft to launch day: editing, cover, formatting, and pre-orders.",
  },
  {
    title: "How",
    body: "A practical walkthrough of self-publishing on Amazon: accounts, ISBNs, pricing, and launch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-bone/10 bg-coal py-24">
      <div className="container-x">
        <p className="eyebrow">Self-Publishing Consultations</p>
        <h2 className="h2 mt-3 max-w-2xl">
          Publishing Your Book: <span className="italic text-rose">My Why, When &amp; How</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-bone/70">
          One-on-one guidance for writers who are ready to stop wondering and start publishing.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group rounded-2xl border border-bone/10 bg-ink p-8 transition hover:border-rose/60">
              <p className="font-serif text-5xl text-rose/80">0{i + 1}</p>
              <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-bone/70">{s.body}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn-primary mt-10">Book a consultation</a>
      </div>
    </section>
  );
}
