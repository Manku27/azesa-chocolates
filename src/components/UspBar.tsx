export default function UspBar() {
  return (
    <div className="w-full border-y-2 border-brand-dark bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-brand-dark">

          {/* Col 1: Title */}
          <div className="flex items-center px-8 py-6">
            <h2
              className="font-heading text-brand-dark leading-tight"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              What makes
              <br />
              Azesa different
            </h2>
          </div>

          {/* Col 2: Description */}
          <div className="flex items-center px-8 py-6 relative">
            {/* Strawberry-style decorative element */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-3xl select-none hidden md:block"
              aria-hidden
            >
              🍫
            </div>
            <p className="text-brand-dark/70 text-sm leading-relaxed">
              We use only real ingredients — no palm oil, no artificial colours, no
              preservatives. Every bar is handcrafted in Katihar, Bihar with
              pride in every bite.
            </p>
          </div>

          {/* Col 3: Social proof */}
          <div className="flex items-center gap-4 px-8 py-6">
            <div className="flex -space-x-2 flex-shrink-0">
              {["#7c3aed", "#ec4899", "#10b981"].map((c) => (
                <div
                  key={c}
                  className="w-8 h-8 rounded-full border-2 border-brand-cream"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div>
              <div
                className="font-heading text-brand-dark leading-none"
                style={{ fontSize: 28 }}
              >
                1000 +
              </div>
              <p className="text-brand-dark/50 text-xs mt-0.5">Happy customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
