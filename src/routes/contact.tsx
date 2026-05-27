import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/lib/language";
import slider9 from "@/assets/slider-9.jpg";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const { tr } = useLang();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={slider9}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/50 to-background" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-accent text-sand text-xl mb-5"
          >
            {tr("contact_sub")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl"
          >
            {tr("contact_title")}
          </motion.h1>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="pb-28 px-6 grain relative">
        <div className="max-w-6xl mx-auto">
          <div className="rope-divider w-32 mx-auto mt-0 mb-20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Info card */}
            <div className="bg-card/80 border border-terracotta/30 rounded-2xl p-10 flex flex-col justify-center space-y-7">
              <h2 className="font-display text-4xl mb-2">{tr("contact_info")}</h2>
              <div className="rope-divider w-20" />
              <ul className="space-y-6 text-foreground/80">
                <li className="flex gap-4 items-start">
                  <MapPin className="text-terracotta mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-accent text-xs uppercase tracking-widest text-foreground/40 mb-1">
                      {tr("contact_address_label")}
                    </p>
                    <span className="font-body text-base">
                      Kokkini Hani, Heraklion, Crete, Greece
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Phone className="text-terracotta mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-accent text-xs uppercase tracking-widest text-foreground/40 mb-1">
                      {tr("contact_phone_label")}
                    </p>
                    <a
                      href="tel:+302810000000"
                      className="font-body text-base hover:text-terracotta transition-colors"
                    >
                      +30 281 000 0000
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Mail className="text-terracotta mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-accent text-xs uppercase tracking-widest text-foreground/40 mb-1">
                      {tr("contact_email_label")}
                    </p>
                    <a
                      href="mailto:hello@nirouterra.gr"
                      className="font-body text-base hover:text-terracotta transition-colors"
                    >
                      hello@nirouterra.gr
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Clock className="text-terracotta mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-accent text-xs uppercase tracking-widest text-foreground/40 mb-1">
                      {tr("contact_hours_label")}
                    </p>
                    <span className="font-body text-base">{tr("hours")}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map — explicit pixel height so iframe renders fully */}
            <div className="rounded-2xl overflow-hidden border border-terracotta/30" style={{ height: "560px" }}>
              <iframe
                title="Nirou Terra on the map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.6303269248268!2d25.25038875655789!3d35.33134769627739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5db9afc77407%3A0x2998ecf0cc3a46ee!2sNirou%20Terra!5e0!3m2!1sel!2sgr!4v1779872934922!5m2!1sel!2sgr"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}