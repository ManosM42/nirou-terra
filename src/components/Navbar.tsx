import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/language";
import logo from "@/assets/logo.jpg";

export function Navbar() {
  const { lang, setLang, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: tr("nav_home") },
    { to: "/experience", label: tr("nav_experience") },
    { to: "/menu", label: tr("nav_menu") },
    { to: "/contact", label: tr("nav_contact") },
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-espresso/95 backdrop-blur-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between text-cream">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Nirou Terra logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display text-2xl tracking-[0.35em] font-medium">
            NIROU&nbsp;TERRA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.25em] hover:text-sand transition-colors"
              activeProps={{ className: "text-sand" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop lang button + mobile hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "gr" : "en")}
            className="hidden md:block text-xs tracking-[0.3em] border border-cream/40 rounded-full px-3 py-1.5 hover:bg-cream hover:text-espresso transition-all"
          >
            {lang === "en" ? "EN · ΕΛ" : "ΕΛ · EN"}
          </button>
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <nav className="md:hidden bg-espresso/95 border-t border-sand/20 px-6 py-6 flex flex-col gap-5 text-cream">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.25em]"
            >
              {l.label}
            </Link>
          ))}
          {/* Lang button inside mobile menu */}
          <button
            onClick={() => setLang(lang === "en" ? "gr" : "en")}
            className="self-start text-xs tracking-[0.3em] border border-cream/40 rounded-full px-3 py-1.5 hover:bg-cream hover:text-espresso transition-all"
          >
            {lang === "en" ? "EN · ΕΛ" : "ΕΛ · EN"}
          </button>
        </nav>
      )}
    </header>
  );
}