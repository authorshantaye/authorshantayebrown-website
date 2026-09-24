import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-sm text-bone/60 md:flex-row">
        <a href="#top" className="font-serif text-lg text-bone">
          Shantaye <span className="text-rose">Brown</span>
        </a>
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="#books" className="hover:text-rose">Books</a>
          <a href="#about" className="hover:text-rose">About</a>
          <a href="#services" className="hover:text-rose">Services</a>
          <a href="#vlogs" className="hover:text-rose">Vlogs</a>
          <a href="#contact" className="hover:text-rose">Contact</a>
        </nav>
        <div className="text-center md:text-right">
          <a href={`mailto:${site.email}`} className="hover:text-rose">{site.email}</a>
          <p className="mt-1">© {new Date().getFullYear()} Shantaye Brown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
