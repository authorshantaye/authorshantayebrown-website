"use client";
import { useState } from "react";
import { site } from "@/lib/site";

// Both forms open the visitor's email app, pre-filled, so nothing is lost
// before a mailing-list service (e.g. MailerLite, ConvertKit) is connected.
function mailto(subject, body) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [sub, setSub] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="border-t border-bone/10 bg-coal py-24">
      <div className="container-x grid gap-14 md:grid-cols-2">
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h2 className="h2 mt-3">Be first to know when Book Two drops.</h2>
          <p className="mt-5 text-lg text-bone/70">Release alerts, behind-the-scenes, and new vlogs. No spam.</p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto("Add me to the release list", `Please add ${sub} to the Deviants & Saints release list.`);
            }}
          >
            <input type="email" required placeholder="Your email" value={sub} onChange={(e) => setSub(e.target.value)} className="field" />
            <button className="btn-primary shrink-0">Notify me</button>
          </form>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              ["Amazon", site.links.amazonAuthor],
              ["YouTube", site.links.youtube],
              ["LinkedIn", site.links.linkedin],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">{label}</a>
            ))}
          </div>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-bone/10 bg-ink p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto(`Website message from ${form.name}`, `${form.message}\n\nFrom: ${form.name} <${form.email}>`);
          }}
        >
          <h3 className="font-serif text-2xl">Get in touch</h3>
          <p className="text-sm text-bone/60">Consultations, book clubs, interviews, and collaborations.</p>
          <p className="text-sm text-bone/60">
            Or email{" "}
            <a href={`mailto:${site.email}`} className="text-rose hover:underline">{site.email}</a>
          </p>
          <input required placeholder="Name" className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email" className="field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea required rows={5} placeholder="Message" className="field" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="btn-primary w-full">Send message</button>
        </form>
      </div>
    </section>
  );
}
