import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import Book from "./pages/Book";


function trackBookingClick(location) {
  if (window.gtag) {
    window.gtag("event", "book_audit_click", {
      page_location: location,
    });
  }
}

function useABVariant() {
  const location = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("v") === "b" ? "b" : "a";
  }, [location.search]);
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 sticky top-0 backdrop-blur bg-slate-950/70 z-50">
        <div className="text-xl font-bold tracking-wide">
          <Link to="/">Line<span className="text-emerald-400">Off</span></Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/blog" className="hover:text-white">Blog</Link>
        </nav>
        <Link
         to="/book"
         className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold"
        >
         Book Free Audit
        </Link>
      </header>
      {children}
      <footer className="px-8 py-10 border-t border-white/10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} LineOff. All rights reserved.
      </footer>
    </div>
  );
}

function HeroA() {
  return (
    <>
      <section className="px-8 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-500 via-blue-500 to-transparent blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold relative"
        >
          Know Exactly Where Your <span className="text-emerald-400">Hotel's</span> Money Is Going
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
        >
          Accurate bookkeeping, timely financial reporting, and actionable insights for hotels and hospitality businesses.
          Stop guessing, start making confident financial decisions.
        </motion.p>

        <Link
          to="/book"
          onClick={() => trackBookingClick("homepage_hero")}
          className="inline-block px-6 py-3 bg-emerald-500 text-black rounded-xl font-semibold"
        >
          Get a Free Hotel Financial Review
        </Link>

        <p className="mt-3 text-sm text-white/50">
          30-minute call • No commitment • Focused on hotel finance clarity
        </p>
      </section>

      <section className="px-8 py-16 text-center border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">
          Why Hospitality Finance Gets Messy
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-white/70">
          <div className="bg-white/5 p-6 rounded-xl">
            Multiple booking systems create fragmented revenue data
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            Manual bookkeeping leads to delayed financial insights
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            No clear visibility into true hotel profitability
          </div>
        </div>
      </section>
    </>
  );
}

function HeroB() {
  return (
    <section className="px-8 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 blur-3xl animate-pulse" />
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold">
        Cut Accounting Costs by Up to <span className="text-emerald-400">40%</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
        LineOff replaces manual finance work with automation and real-time reporting.
      </motion.p>
    </section>
  );
}

function Home() {
  const variant = useABVariant();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={variant} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        {variant === "b" ? <HeroB /> : <HeroA />}
        <section className="px-8 py-16 text-center border-t border-white/10">
          <p className="text-white/50 mb-6">Trusted finance optimization for modern businesses</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-white/5 rounded-xl">Hospitality-Focused Accounting</div>
            <div className="p-4 bg-white/5 rounded-xl">Monthly Financial Reporting</div>
            <div className="p-4 bg-white/5 rounded-xl">Cash Flow & Profitability Insights</div>
          </div>
        </section>
        <section className="px-8 py-16 text-center border-t border-white/10">
  <h2 className="text-2xl font-bold mb-4">
    Ready to Understand Your Hotel’s Finances?
  </h2>

  <p className="text-white/70 mb-6">
    Book a free financial review and identify where your revenue is leaking.
  </p>
          
   <section className="px-8 py-16 border-t border-white/10">
  <h2 className="text-3xl font-bold text-center mb-10">
    Who We Help
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div className="bg-white/5 p-6 rounded-xl">
      <h3 className="font-semibold mb-2">Hotels</h3>
      <p className="text-white/70">
        Financial reporting and bookkeeping support for growing hotel operations.
      </p>
    </div>

    <div className="bg-white/5 p-6 rounded-xl">
      <h3 className="font-semibold mb-2">Boutique Hotels</h3>
      <p className="text-white/70">
        Better visibility into revenue, costs, and profitability.
      </p>
    </div>

    <div className="bg-white/5 p-6 rounded-xl">
      <h3 className="font-semibold mb-2">Guesthouses</h3>
      <p className="text-white/70">
        Clear financial processes that support sustainable growth.
      </p>
    </div>
  </div>
</section>
        
  <Link
    to="/book"
    className="inline-block px-6 py-3 bg-emerald-500 text-black rounded font-semibold"
  >
    Book Your Free Review
  </Link>
</section>
      </motion.div>
    </AnimatePresence>
  );
}

function About() {
  return (
    <section className="px-8 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About LineOff</h1>

      <p className="text-white/70 mb-8">
        LineOff helps hospitality businesses gain financial clarity through
        accurate bookkeeping, timely reporting, and practical financial insights.
      </p>

      <div className="bg-white/5 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Meet the Founder
        </h2>

        <p className="text-white/70">
          I founded LineOff to help hotel and hospitality operators better
          understand their numbers and make more confident financial decisions.
          My focus is on simplifying accounting processes, improving reporting,
          and providing the financial visibility needed to run a profitable
          hospitality business.
        </p>
      </div>
    </section>
  );
}


function Services() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    hotelName: "",
    rooms: "",
    monthlyRevenue: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  // Track successful form submission
  if (window.gtag) {
    window.gtag("event", "contact_form_submit", {
      business_type: "hospitality",
    });
  }

  setSubmitted(true);
};

  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-4">
        Hospitality Accounting Services
      </h1>

      <p className="text-white/70 mb-10 max-w-2xl">
        We help hotels and hospitality businesses improve financial clarity,
        streamline bookkeeping, and understand profitability in real time.
      </p>

      {/* VALUE BLOCK */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white/5 p-6 rounded-xl">Monthly bookkeeping</div>
        <div className="bg-white/5 p-6 rounded-xl">Revenue tracking</div>
        <div className="bg-white/5 p-6 rounded-xl">Expense control</div>
        <div className="bg-white/5 p-6 rounded-xl">Profit insights</div>
      </div>

      {/* CTA */}
      <a
        href="/book"
        className="inline-block mb-12 px-6 py-3 bg-emerald-500 text-black rounded font-semibold"
      >
        Book a Free Financial Review
      </a>

      {/* CONTACT FORM */}
      <div className="bg-white/5 p-6 rounded-xl">

        <h2 className="text-2xl font-semibold mb-6">
          Or send us a message
        </h2>
        
         {submitted && (
         <div className="bg-emerald-500/20 border border-emerald-500 p-4 rounded-xl mb-6">
           Thank you. We've received your message and will get back to you shortly.
         </div>
          )}
        
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-white/10"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white/10"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Hotel name"
            className="w-full p-3 rounded bg-white/10"
            onChange={(e) =>
              setForm({ ...form, hotelName: e.target.value })
            }
          />

          <select
            className="w-full p-3 rounded bg-white/10"
            onChange={(e) =>
              setForm({ ...form, rooms: e.target.value })
            }
          >
            <option value="">Number of rooms</option>
            <option value="1-10">1–10</option>
            <option value="11-30">11–30</option>
            <option value="31-100">31–100</option>
            <option value="100+">100+</option>
          </select>

          <select
            className="w-full p-3 rounded bg-white/10"
            onChange={(e) =>
              setForm({ ...form, monthlyRevenue: e.target.value })
            }
          >
            <option value="">Monthly revenue</option>
            <option value="<50k">Under €50k</option>
            <option value="50-200k">€50k–€200k</option>
            <option value="200k+">€200k+</option>
          </select>

          <textarea
            placeholder="Tell us about your business"
            className="w-full p-3 rounded bg-white/10"
            rows="4"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="px-6 py-3 bg-emerald-500 text-black rounded font-semibold"
          >
            Send Message
          </button>

        </form>
      </div>

    </section>
  );
}

function Blog() {
  return <section className="px-8 py-20 max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-10">Blog</h1></section>;
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Layout>
    </Router>
  );
}
