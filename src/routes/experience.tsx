import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/language";

import slider1 from "@/assets/slider-1.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider6 from "@/assets/slider-6.jpg";
import slider7 from "@/assets/slider-7.jpg";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

const sections = [
  {
    t: "exp1_t" as const,
    b: "exp1_b" as const,
    img: slider1, // Space
  },
  {
    t: "exp2_t" as const,
    b: "exp2_b" as const,
    img: slider6, // Food
  },
  {
    t: "exp3_t" as const,
    b: "exp3_b" as const,
    img: slider7, // Vibe
  },
];

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  return (
    <div ref={ref} className="relative h-[500px] overflow-hidden rounded-2xl">
      <motion.img
        src={src}
        alt=""
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
    </div>
  );
}

function Experience() {
  const { tr } = useLang();
  return (
    <>
      {/* Hero — slider-4 */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={slider4}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/40 to-background" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-accent text-sand text-xl mb-5"
          >
            {tr("exp_sub")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl"
          >
            {tr("exp_title")}
          </motion.h1>
        </div>
      </section>

      <section className="py-24 px-6 grain relative">
        <div className="max-w-6xl mx-auto space-y-32">
          {sections.map((s, idx) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ParallaxImage src={s.img} />
              <div className="px-2 md:px-8">
                <p className="font-accent text-terracotta text-lg mb-3">
                  0{idx + 1} / 03
                </p>
                <h2 className="font-display text-4xl md:text-5xl mb-6">{tr(s.t)}</h2>
                <div className="rope-divider w-24 mb-6" />
                <p className="text-lg leading-relaxed text-foreground/80 font-light">
                  {tr(s.b)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}