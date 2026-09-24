import { site } from "@/lib/site";

export default function Vlogs() {
  return (
    <section id="vlogs" className="py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">On YouTube</p>
            <h2 className="h2 mt-3">The Journey To Getting Published</h2>
          </div>
          <a href={site.links.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Subscribe on YouTube
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.vlogs.map((v) => (
            <div key={v.title} className="overflow-hidden rounded-2xl border border-bone/10 bg-coal">
              <div className="relative aspect-video bg-smoke">
                {v.id ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <a href={site.links.youtube} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose text-white shadow-lg">
                      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </a>
                )}
              </div>
              <p className="p-5 font-serif text-lg">{v.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
