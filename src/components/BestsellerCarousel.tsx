import Link from "next/link";
import { products } from "@/data/products";
import Button from "@/components/ui/Button";

export default function BestsellerCarousel() {
  return (
    <section className="py-14 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#ff7a00" aria-hidden>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h2 className="font-heading text-brand-dark" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
              Popular Chocolates &amp; Cookies —
            </h2>
          </div>
          <Button href="/shop" className="hidden md:inline-flex">
            View All
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2">
          {products.map((product, i) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="flex-shrink-0 group cursor-pointer"
              style={{ width: 164 }}
            >
              <div
                className="w-full rounded-2xl mb-3 overflow-hidden transition-transform duration-200 group-hover:scale-[1.03]"
                style={{
                  height: 164,
                  border: i === 1 ? `3px solid ${product.accentColor}` : "2px solid #1c110915",
                  backgroundColor: "#f5f0e8",
                }}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center"
                  style={{ backgroundColor: product.accentColor + "20" }}
                >
                  <div
                    className="rounded-xl flex flex-col items-center justify-center"
                    style={{ backgroundColor: product.accentColor, width: 110, height: 110 }}
                  >
                    <span className="font-heading text-white text-base leading-tight text-center px-2">
                      Azesa
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-heading text-brand-dark uppercase tracking-wide leading-tight" style={{ fontSize: 15 }}>
                {product.name}
              </p>
              <p className="text-brand-dark/40 text-sm mt-0.5">₹{product.price}</p>
            </Link>
          ))}
        </div>

        <div className="mt-5 md:hidden text-center">
          <Button href="/shop">View All</Button>
        </div>
      </div>
    </section>
  );
}
