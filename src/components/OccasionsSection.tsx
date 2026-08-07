import Link from "next/link";
import Button from "@/components/ui/Button";

const occasions = [
  { emoji: "🎂", label: "Birthdays", color: "#ec4899", bg: "#fce7f3", desc: "Make their day sweeter than ever." },
  { emoji: "🪔", label: "Festivals", color: "#f59e0b", bg: "#fef3c7", desc: "Diwali, Eid, Holi — gifting made simple." },
  { emoji: "🏢", label: "Corporate Gifting", color: "#7c3aed", bg: "#ede9fe", desc: "Impress clients. Reward teams." },
];

export default function OccasionsSection() {
  return (
    <section className="py-14 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-brand-dark" style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}>
            For Every Moment —
          </h2>
          <Button href="/shop" className="hidden md:inline-flex">
            Shop Gifts
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {occasions.map((occ) => (
            <div key={occ.label} className="rounded-2xl p-8 flex flex-col items-start gap-3" style={{ backgroundColor: occ.bg }}>
              <span className="text-5xl" aria-hidden>{occ.emoji}</span>
              <h3 className="font-heading" style={{ fontSize: 30, color: occ.color }}>{occ.label}</h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{occ.desc}</p>
              <Link href="/shop" className="mt-1 font-heading text-sm underline underline-offset-2" style={{ color: occ.color }}>
                Shop now &gt;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
