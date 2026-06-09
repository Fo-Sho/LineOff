import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import Book from "./pages/Book";

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
          className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold inline-block mt-8"
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
      </motion.div>
    </AnimatePresence>
  );
}

function About() {
  return <section className="px-8 py-20 max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-6">About LineOff</h1><p className="text-white/70">We simplify financial operations through automation and expert accounting workflows.</p></section>;
}


function Services() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Message sent. We'll get back to you soon.");
  };

  return (
     <section className="px-8 py-20 max-w-5xl mx-auto">
  <h1 className="text-4xl font-bold mb-6">
    Hospitality Accounting Services
  </h1>

  <p className="text-white/70 mb-10">
    We help hotels and hospitality businesses gain financial clarity,
    improve reporting accuracy, and streamline bookkeeping processes.
  </p>

  <div className="grid md:grid-cols-2 gap-6 mb-12">
    <div className="bg-white/5 p-6 rounded-xl">
      Monthly bookkeeping & reporting
    </div>
    <div className="bg-white/5 p-6 rounded-xl">
      Hotel revenue tracking
    </div>
    <div className="bg-white/5 p-6 rounded-xl">
      Expense categorization & control
    </div>
    <div className="bg-white/5 p-6 rounded-xl">
      Profitability insights
    </div>
  </div>

  <a
    href="/book"
    className="px-6 py-3 bg-emerald-500 text-black rounded font-semibold"
  >
    Book a Free Financial Review
  </a>
</section>

    
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Services</h1>

      <p className="text-white/70 mb-10">
        We help hotels and hospitality businesses improve bookkeeping,
        financial reporting, and cash flow visibility.
      </p>

      {/* CONTACT FORM */}
      <div className="bg-white/5 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Contact LineOff
        </h2>

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
