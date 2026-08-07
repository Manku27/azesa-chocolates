"use client";

import { useEffect, useRef, useState } from "react";
import { featuredProduct } from "@/data/products";
import Button from "@/components/ui/Button";

export default function FeaturedSpotlight() {
  const p = featuredProduct;
  const words = p.name.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");
  const tagline = p.tagline.replace(/\.$/, "");

  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const jitterClass = (base: string) => `tilt ${inView ? "jitter" : ""} ${base}`;

  return (
    <section ref={sectionRef} className="py-16 md:pt-20 md:pb-8 bg-brand-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Mobile: simple stacked layout */}
        <div className="md:hidden flex flex-col items-center text-center">
          <h2
            className={jitterClass("font-heading text-brand-dark leading-[0.9]")}
            style={{ fontSize: "clamp(40px, 12vw, 64px)" }}
          >
            {firstWord}
            <br />
            {restWords}
          </h2>

          <span
            className="font-sans font-extrabold text-brand-dark/70 uppercase tracking-wide mt-2"
            style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
          >
            {tagline}
          </span>

          <div
            className={jitterClass("rounded-2xl mt-6 shadow-xl flex items-center justify-center")}
            style={{ width: 220, height: 240, backgroundColor: "#1c1109" }}
          >
            <div className="flex flex-col items-center">
              <span className="font-heading text-brand-yellow text-2xl">Azesa</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest mt-1">{p.name}</span>
            </div>
          </div>

          <div className="mt-4">
            <Button href={`/shop/${p.id}`}>Try It</Button>
          </div>

          <div
            className="flex items-center gap-2 mt-6"
            style={{ transform: "rotate(-3deg)" }}
          >
            <span aria-hidden>🧂</span>
            <span className="font-heading text-brand-dark text-sm uppercase tracking-widest whitespace-nowrap">
              With {p.ingredient}
            </span>
          </div>
        </div>

        {/* Desktop: photo-collage layout */}
        <div className="hidden md:block relative" style={{ minHeight: 600 }}>

          {/* Left photo card */}
          <div
            className={jitterClass("absolute rounded-2xl shadow-xl flex items-center justify-center")}
            style={{
              top: 14, left: 0, width: 176, height: 176,
              backgroundColor: "#ff7a0020",
              border: "2px solid #ff7a0040",
              ["--base-rot" as string]: "-7deg",
            }}
          >
            <span style={{ fontSize: 60 }} aria-hidden>🧂</span>
          </div>

          {/* Ingredient callout under the left card */}
          <div
            className="absolute flex items-center gap-2"
            style={{ top: 208, left: 0, transform: "rotate(-4deg)" }}
          >
            <span aria-hidden style={{ fontSize: 18 }}>🧂</span>
            <span className="font-heading text-brand-dark text-sm uppercase tracking-widest whitespace-nowrap">
              With {p.ingredient}
            </span>
          </div>

          {/* Right photo card, bleeding past the edge */}
          <div
            className={jitterClass("absolute rounded-2xl shadow-xl flex items-center justify-center")}
            style={{
              top: 40, right: -20, width: 176, height: 176,
              backgroundColor: p.accentColor + "20",
              border: `2px solid ${p.accentColor}40`,
              ["--base-rot" as string]: "6deg",
            }}
          >
            <div
              className="rounded-xl flex flex-col items-center justify-center"
              style={{ backgroundColor: p.accentColor, width: 112, height: 112 }}
            >
              <span className="font-heading text-white text-sm">Azesa</span>
            </div>
          </div>

          {/* Heading */}
          <div
            className={jitterClass("absolute left-1/2 -translate-x-1/2 top-0 w-full text-center z-20")}
          >
            <h2
              className="font-heading text-brand-dark leading-[0.88] relative inline-block"
              style={{ fontSize: "clamp(46px, 5.5vw, 76px)" }}
            >
              {firstWord}
              <span className="absolute select-none" style={{ top: -18, right: -46, fontSize: 32 }} aria-hidden>
                🧂
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 -mt-1">
              <span style={{ fontSize: 26 }} aria-hidden>💜</span>
              <h2
                className="font-heading text-brand-dark leading-[0.88]"
                style={{ fontSize: "clamp(46px, 5.5vw, 76px)" }}
              >
                {restWords}
              </h2>
            </div>
            <span
              className="block font-sans font-extrabold text-brand-dark/70 uppercase tracking-wide mt-3"
              style={{ fontSize: "clamp(20px, 2.6vw, 30px)" }}
            >
              {tagline}
            </span>
          </div>

          {/* Main product photo */}
          <div
            className={jitterClass("absolute left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl flex items-center justify-center z-10")}
            style={{
              top: 258, width: 260, height: 250,
              backgroundColor: "#1c1109",
              ["--base-rot" as string]: "-2deg",
            }}
          >
            <div className="flex flex-col items-center">
              <span className="font-heading text-brand-yellow leading-none" style={{ fontSize: 32 }}>
                Azesa
              </span>
              <span className="text-white/50 text-[11px] uppercase tracking-widest mt-2">{p.name}</span>
            </div>
          </div>

          {/* Sparkle dashes */}
          <SpotlightDash style={{ top: 508, right: 90, transform: "rotate(-25deg)" }} />
          <SpotlightDash style={{ top: 538, right: 60, transform: "rotate(15deg)" }} />
          <SpotlightDash style={{ top: 40, left: 210, transform: "rotate(50deg)", opacity: 0.35 }} />

          {/* CTA */}
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 542 }}>
            <Button href={`/shop/${p.id}`}>Try It</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpotlightDash({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-6 h-2 rounded-full"
      style={{ backgroundColor: "#1c1109", ...style }}
      aria-hidden
    />
  );
}
