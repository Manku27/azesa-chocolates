import { featuredProduct } from "@/data/products";
import Button from "@/components/ui/Button";

export default function FeaturedSpotlight() {
  const p = featuredProduct;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="relative">
            <div className="absolute -top-4 right-4 text-4xl select-none" aria-hidden>🍫</div>

            <h2
              className="font-heading text-brand-dark leading-[0.88]"
              style={{ fontSize: "clamp(64px, 9vw, 120px)" }}
            >
              {p.name.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>

            <div className="flex items-center gap-2 mt-4 mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff7a00" aria-hidden>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="text-brand-dark/50 text-sm">{p.tagline}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-brand-dark/15 bg-brand-cream mb-8">
              <span className="text-brand-orange font-bold">✦</span>
              <span className="font-heading text-brand-dark text-sm uppercase tracking-widest">
                With {p.ingredient}
              </span>
            </div>

            <div>
              <Button href={`/shop/${p.id}`}>Try It</Button>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div
              className="rounded-2xl flex-shrink-0 flex items-center justify-center"
              style={{
                width: 190, height: 260,
                backgroundColor: p.accentColor + "25",
                border: `2px solid ${p.accentColor}40`,
              }}
            >
              <div
                className="rounded-xl flex flex-col items-center justify-center"
                style={{ backgroundColor: p.accentColor, width: 130, height: 180 }}
              >
                <span className="font-heading text-white text-lg">Azesa</span>
                <span className="text-white/60 text-[10px] uppercase tracking-widest mt-1">{p.name}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <div
                className="rounded-2xl flex items-center justify-center"
                style={{ width: 140, height: 150, backgroundColor: "#f5f0e8", border: "2px dashed #1c110918" }}
              >
                <span className="text-4xl" aria-hidden>🍫</span>
              </div>
              <div
                className="rounded-2xl flex items-center justify-center"
                style={{ width: 140, height: 94, backgroundColor: p.accentColor + "12", border: `2px solid ${p.accentColor}22` }}
              >
                <span className="font-heading text-brand-dark/30 text-xs uppercase tracking-widest text-center px-2">Photo coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
