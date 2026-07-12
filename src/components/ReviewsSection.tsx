const reviews = [
  {
    stars: 5,
    text: "Finally a chocolate brand that actually tastes real. The Dark Sea Salt bar is unreal — and knowing there's no palm oil makes it even better.",
    name: "Priya S.",
    location: "Mumbai",
  },
  {
    stars: 5,
    text: "Ordered 200 boxes for Diwali gifting at our dealership. Every box was perfect. Our clients were genuinely impressed.",
    name: "Rajan M.",
    location: "Tanishq, Patna",
  },
  {
    stars: 5,
    text: "The Rose Cardamom bar is something else. You can taste that it's made with real ingredients.",
    name: "Anika R.",
    location: "Bengaluru",
  },
  {
    stars: 5,
    text: "Made in India and actually premium quality — Azesa proves it can be done.",
    name: "Vikram T.",
    location: "Delhi",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ff7a00" aria-hidden>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-14 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2
            className="font-heading text-brand-dark"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
          >
            What They Say —
          </h2>
          <span className="text-brand-dark/35 text-sm font-medium hidden md:block">1000+ happy customers</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl p-6 flex flex-col gap-3">
              <Stars count={review.stars} />
              <p className="text-brand-dark/70 text-base leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto pt-3 border-t border-brand-dark/8">
                <p className="font-semibold text-brand-dark text-sm">{review.name}</p>
                <p className="text-brand-dark/35 text-xs">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
