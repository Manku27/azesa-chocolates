import Link from "next/link";
import Button from "@/components/ui/Button";

const categories = [
  { id: "chocolates", label: "Chocolates", icon: "🍫", color: "#7c3aed" },
  { id: "cookies", label: "Cookies", icon: "🍪", color: "#f59e0b" },
  { id: "hampers", label: "Hampers", icon: "🎁", color: "#ef4444" },
  { id: "festive-specials", label: "Festive Specials", icon: "✨", color: "#10b981" },
];

export default function CategoriesSection() {
  return (
    <section className="pt-8 pb-14 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff7a00" aria-hidden>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h2 className="font-heading text-brand-dark" style={{ fontSize: "clamp(22px, 2.8vw, 32px)" }}>
              Shop by Category
            </h2>
          </div>
          <Button href="/shop" className="hidden md:inline-flex">
            View All
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/shop?category=${c.id}`}
              className="group flex-shrink-0 cursor-pointer"
              style={{ width: 160 }}
            >
              <div
                className="w-full rounded-2xl mb-3 overflow-hidden transition-transform duration-200 group-hover:scale-110 flex items-center justify-center"
                style={{
                  height: 160,
                  backgroundColor: c.color + "20",
                  border: `2px solid ${c.color}40`,
                }}
              >
                <div
                  className="rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: c.color, width: 100, height: 100 }}
                >
                  <span style={{ fontSize: 42 }} aria-hidden>{c.icon}</span>
                </div>
              </div>
              <p
                className="font-heading text-brand-dark uppercase tracking-wide leading-tight text-center"
                style={{ fontSize: 14 }}
              >
                {c.label}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-7 md:hidden text-center">
          <Button href="/shop">View All</Button>
        </div>
      </div>
    </section>
  );
}
