import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl"
      style={{ backgroundColor: "#ff7a00", minHeight: 520 }}
    >
      {/* Yellow right-side diagonal panel */}
      <div
        className="absolute inset-y-0 right-0 w-[52%]"
        style={{
          backgroundColor: "#ffd000",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Sprinkle decorations */}
      <Dash style={{ top: "18%", left: "45%", transform: "rotate(-40deg)", opacity: 0.35 }} />
      <Dash style={{ top: "62%", left: "48%", transform: "rotate(25deg)", opacity: 0.3 }} />
      <Dash style={{ top: "28%", right: "7%", transform: "rotate(55deg)", opacity: 0.25 }} />
      <Dash style={{ bottom: "22%", right: "18%", transform: "rotate(-18deg)", opacity: 0.3 }} />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        style={{ minHeight: 520 }}
      >
        {/* Left: Headline + CTA */}
        <div>
          <h1
            className="font-heading text-white leading-[0.92] mb-8"
            style={{ fontSize: "clamp(56px, 7.5vw, 104px)" }}
          >
            Crafted in India.
            <br />
            Loved everywhere.
          </h1>

          {/* CTA + description side-by-side (Marco pattern) */}
          <div className="flex flex-wrap items-start gap-5 mb-5">
            <Button href="/shop">Shop Now</Button>
            <p className="text-white/85 text-sm leading-relaxed max-w-[200px] pt-1">
              No palm oil. No artificial colours. Just real Indian chocolate.
            </p>
          </div>

          <Button href="/for-business">For Businesses</Button>
        </div>

        {/* Right: Product placeholder */}
        <div className="relative flex items-center justify-center py-8">
          <div
            className="rounded-2xl flex flex-col items-center justify-center shadow-2xl relative"
            style={{ width: 260, height: 260, backgroundColor: "#1c1109" }}
          >
            <span
              className="font-heading text-brand-yellow leading-none mb-2"
              style={{ fontSize: 44 }}
            >
              Azesa
            </span>
            <span className="text-white/40 text-xs uppercase tracking-[0.15em]">
              Chocolates
            </span>

            <div
              className="absolute -bottom-5 -right-5 w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: "#ff7a00", border: "3px solid #ffd000" }}
            >
              <span className="font-heading text-white text-[10px] leading-tight">Made in</span>
              <span className="font-heading text-brand-yellow text-[10px] leading-tight">India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dash({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-6 h-2 rounded-full"
      style={{ backgroundColor: "#1c1109", ...style }}
      aria-hidden
    />
  );
}
