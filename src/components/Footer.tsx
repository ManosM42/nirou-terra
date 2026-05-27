import { Instagram, Facebook, MapPin } from "lucide-react";
import { useLang } from "@/lib/language";

export function Footer() {
  const { tr } = useLang();
  return (
    <footer className="relative bg-espresso text-cream pt-20 pb-10 overflow-hidden grain">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="rope-divider mb-14" />
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="font-display text-3xl tracking-[0.25em] mb-3">NIROU TERRA</h3>
            <p className="font-accent text-sand text-lg">{tr("footer_tag")}</p>
          </div>
          <div className="text-sm leading-relaxed space-y-2">
            <p className="uppercase tracking-[0.25em] text-sand text-xs mb-3">Visit</p>
            <p>{tr("footer_address")}</p>
            <p className="opacity-80">{tr("hours")}</p>
          </div>
          <div className="flex md:justify-end gap-5 items-start">
            <a href="https://www.instagram.com/nirouterra/" target="_blank" rel="noreferrer" className="hover:text-sand transition-colors">
              <Instagram size={22} />
            </a>
            <a href="https://www.facebook.com/nirouterra/?locale=el_GR" target="_blank" rel="noreferrer" className="hover:text-sand transition-colors">
              <Facebook size={22} />
            </a>
            <a
              href="https://maps.google.com/?q=Kokkini+Hani+Crete"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sand transition-colors"
            >
              <MapPin size={22} />
            </a>
          </div>
        </div>
        <div className="rope-divider mt-14" />
        <p className="text-center text-xs tracking-[0.25em] uppercase text-cream/50 mt-8">
          © {new Date().getFullYear()} Nirou Terra · {tr("footer_rights")}
        </p>
      </div>
    </footer>
  );
}
