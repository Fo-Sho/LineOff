import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

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
        <a href="https://calendly.com/dlivtving"
         target="_blank"
         rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">
        Book Free Audit
       </a>
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
    <section className="px-8 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-500 via-blue-500 to-transparent blur-3xl" />
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold relative">
        Turn Financial Complexity <span className="text-emerald-400">Off</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
        Automate accounting, reduce costs, and gain real-time financial clarity.
      </motion.p>
      <a href="https://calendly.com/dlivtving"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold"
      >
       Book Free Audit
     </a>
    </section>
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
            <div className="p-4 bg-white/5 rounded-xl">€12M+ costs optimized</div>
            <div className="p-4 bg-white/5 rounded-xl">300+ finance workflows automated</div>
            <div className="p-4 bg-white/5 rounded-xl">99% reporting accuracy</div>
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
  return <section className="px-8 py-20 max-w-5xl mx-auto"><h1 className="text-4xl font-bold mb-10">Services</h1></section>;
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
        </Routes>
      </Layout>
    </Router>
  );
}
