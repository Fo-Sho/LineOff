import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">
        Blog
      </h1>

      <div className="bg-white/5 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          3 Financial Mistakes That Hurt Hotel Profitability
        </h2>

        <p className="text-white/70 mb-4">
          Common financial issues that reduce profitability in hospitality
          businesses and how to address them.
        </p>

        <Link
          to="/blog/hotel-profitability"
          className="text-emerald-400 font-semibold"
        >
          Read Article →
        </Link>
      </div>
    </section>
  );
}
