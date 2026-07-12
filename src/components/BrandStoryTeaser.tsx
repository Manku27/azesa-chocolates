import Button from "@/components/ui/Button";

export default function BrandStoryTeaser() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#ff7a00" }}>
      <div className="absolute top-8 right-16 w-7 h-2 rounded-full opacity-25" style={{ backgroundColor: "#1c1109", transform: "rotate(-30deg)" }} aria-hidden />
      <div className="absolute bottom-12 left-20 w-7 h-2 rounded-full opacity-25" style={{ backgroundColor: "#1c1109", transform: "rotate(45deg)" }} aria-hidden />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="font-heading text-white leading-[0.92] mb-6"
            style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}
          >
            Born in Katihar,
            <br />
            Bihar.
            <br />
            <span style={{ color: "#1c1109" }}>Made with intention.</span>
          </h2>
          <p className="text-white/80 text-base leading-relaxed max-w-sm mb-8">
            We started Azesa because we believed India deserved better chocolate —
            made here, with real ingredients, and without compromise.
          </p>
          <Button href="/our-story">Read Our Story</Button>
        </div>

        <div className="flex justify-center">
          <div
            className="rounded-3xl flex flex-col items-center justify-center"
            style={{ width: 320, height: 280, backgroundColor: "#1c1109" }}
          >
            <span className="font-heading text-brand-yellow leading-none mb-2 text-center px-6" style={{ fontSize: 32 }}>
              Since Day One.
            </span>
            <span className="text-white/30 text-xs uppercase tracking-widest">Photo coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
