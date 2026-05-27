import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useLang } from "@/lib/language";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const slides = [
  { img: slider1, key: "hero1" as const },
  { img: slider2, key: "hero2" as const },
  { img: slider3, key: "hero3" as const },
  { img: slider4, key: "hero1" as const },
  { img: slider5, key: "hero2" as const },
];

const galleryImgs = [slider1, slider2, slider3, slider4, slider5];

const reviews = [
  {
    name: "Maqabir Murue",
    stars: 5,
    text: "Came here for the view and atmosphere but ended up getting the best food on our trip. Can definitely recommend both the T-bone steak and the Carbonara. The mixed drinks are delicious and beautiful. If you're staying or passing through I wouldn't miss this place.",
  },
  {
    name: "Niamh Cooke",
    stars: 5,
    text: "Super friendly staff that make a lasting impression, really quiet on weekdays which is surprising because the food and cocktails are amazing with an incredible view of the beach too! We visited a few times on our trip to Crete!",
  },
  {
    name: "Anonymous",
    stars: 4,
    text: "Nice relaxing atmosphere — a bit ethnic — with good music. Good place to enjoy the sunset.",
  },
  {
    name: "Konstantinos Kafritsas",
    stars: 5,
    text: "Ένα κρυμμένο διαμαντάκι. Φοβερή εξυπηρέτηση, ωραία τοποθεσία και τιμές αντάξιες της ποιότητας. Οι σερβιτόροι ευγενικότατοι!",
  },
  {
    name: "Anastasiya Puchkouskaya",
    stars: 5,
    text: "A lovely spot to enjoy a smoothie or fresh juice in the morning, and a cocktail in the evening. The biggest advantage is its location right by the sea, creating a very calm and pleasant atmosphere.",
  },
];

// ─── Sand Reveal Hook ────────────────────────────────────────────────────────
// Uses IntersectionObserver to add a "revealed" class to [data-sand] children.
// All the actual animation lives in CSS transition + the .sand-hidden / .sand-revealed classes.
function useSandReveal(sectionRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = Array.from(section.querySelectorAll<HTMLElement>("[data-sand]"));
    if (!items.length) return;

    // Start every item hidden below the sand
    items.forEach((el, idx) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(64px)";
      el.style.filter = "blur(5px)";
      el.style.transition = `opacity 1.1s ease, transform 1.1s ease, filter 1.1s ease`;
      el.style.transitionDelay = `${idx * 0.18}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal all children with their staggered delays
            items.forEach((el) => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              el.style.filter = "blur(0px)";
            });
            // Only fire once
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);
}

function Home() {
  const { tr } = useLang();
  const [i, setI] = useState(0);
  const [r, setR] = useState(0);

  const rotationRef = useRef(0);
  const rafRef = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const introRef = useRef<HTMLElement>(null!);
  const galleryRef = useRef<HTMLElement>(null!);
  const reviewsRef = useRef<HTMLElement>(null!);

  // Hero slider
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  // Reviews slider
  useEffect(() => {
    const id = setInterval(() => setR((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  // RAF carousel spin
  useEffect(() => {
    const spin = () => {
      rotationRef.current = (rotationRef.current + 0.15) % 360;
      if (carouselRef.current) {
        carouselRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(spin);
    };
    rafRef.current = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Sand reveal on each section
  useSandReveal(introRef);
  useSandReveal(galleryRef);
  useSandReveal(reviewsRef);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <img src={slides[i].img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/30 to-espresso/80" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-cream">
          <motion.p
            key={`label-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-accent text-sand text-lg md:text-xl mb-6 tracking-wide"
          >
            Kokkini Hani · Crete
          </motion.p>
          <motion.h1
            key={`title-${i}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.05]"
          >
            {tr(slides[i].key)}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Link
              to="/experience"
              className="mt-12 inline-block font-body uppercase text-xs tracking-[0.35em] px-10 py-4 border border-cream/60 hover:bg-cream hover:text-espresso transition-all duration-500 rounded-full"
            >
              {tr("hero_cta")}
            </Link>
          </motion.div>
        </div>

        <button
          onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-cream/70 hover:text-cream transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={() => setI((p) => (p + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-cream/70 hover:text-cream transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={36} />
        </button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-10 bg-cream" : "w-2 bg-cream/40"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section ref={introRef} className="relative py-28 px-6 grain overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p data-sand className="font-accent text-terracotta text-xl mb-5">
            — Welcome —
          </p>
          <h2 data-sand className="font-display text-4xl md:text-5xl mb-10 leading-tight">
            {tr("intro_title")}
          </h2>
          <div data-sand className="rope-divider w-32 mx-auto mb-10" />
          <p data-sand className="text-lg leading-relaxed text-foreground/80 font-light">
            {tr("intro_body")}
          </p>
        </div>
      </section>

      {/* ── 3D GALLERY ───────────────────────────────────────────────────── */}
      <section ref={galleryRef} className="relative py-28 px-6 thatch overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <p data-sand className="font-accent text-espresso/70 text-lg mb-3">
            {tr("gallery_sub")}
          </p>
          <h2 data-sand className="font-display text-4xl md:text-5xl text-espresso mb-16">
            {tr("gallery_title")}
          </h2>
          <div data-sand className="scene-3d">
            <div
              ref={carouselRef}
              className="carousel-3d"
              style={{ transform: "rotateY(0deg)" }}
            >
              {galleryImgs.map((src, idx) => {
                const angle = (360 / galleryImgs.length) * idx;
                return (
                  <figure
                    key={idx}
                    style={{ transform: `rotateY(${angle}deg) translateZ(320px)` }}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section
        ref={reviewsRef}
        className="relative py-28 px-6 bg-espresso text-cream overflow-hidden grain"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <p data-sand className="font-accent text-sand text-lg mb-4">
            {tr("reviews_banner")}
          </p>
          <h2 data-sand className="font-display text-4xl md:text-5xl mb-16">
            {tr("reviews_title")}
          </h2>

          <div data-sand className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={r}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-espresso/60 border border-sand/20 rounded-2xl p-10 md:p-14 backdrop-blur-sm"
              >
                <Quote className="text-terracotta mx-auto mb-6" size={36} />
                <p className="font-display italic text-xl md:text-2xl leading-relaxed text-cream/90">
                  "{reviews[r].text}"
                </p>
                <div className="flex justify-center gap-1 mt-8 text-sand">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      className={
                        idx < reviews[r].stars ? "fill-sand text-sand" : "text-sand/30"
                      }
                    />
                  ))}
                </div>
                <p className="font-accent text-sand mt-4 text-lg">— {reviews[r].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div data-sand className="flex justify-center gap-2 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setR(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === r ? "w-8 bg-terracotta" : "w-1.5 bg-sand/40"
                }`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>

          {/* ── MAP ── */}
          <div
            data-sand
            className="mt-20 rounded-2xl overflow-hidden border border-sand/20"
            style={{ height: "520px" }}
          >
            <iframe
              title="Nirou Terra location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.6303269248268!2d25.25038875655789!3d35.33134769627739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5db9afc77407%3A0x2998ecf0cc3a46ee!2sNirou%20Terra!5e0!3m2!1sel!2sgr!4v1779872934922!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}