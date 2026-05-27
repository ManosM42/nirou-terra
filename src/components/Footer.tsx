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
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.6303269248268!2d25.25038875655789!3d35.33134769627739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5db9afc77407%3A0x2998ecf0cc3a46ee!2sNirou%20Terra!5e0!3m2!1sel!2sgr!4v1779872934922!5m2!1sel!2sgr"
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
