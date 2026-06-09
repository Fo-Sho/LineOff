export default function Book() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Book Your Free Financial Efficiency Audit
        </h1>

        <p className="text-gray-400 mb-8">
          Discover hidden inefficiencies, improve reporting, and gain clarity
          on your hotel's financial performance.
        </p>

        <div className="bg-white rounded-2xl overflow-hidden">
          <iframe
            src="https://calendly.com/dlivtving"
            width="100%"
            height="800"
            title="Book a Free Financial Efficiency Audit"
          />
        </div>
      </div>
    </section>
  );
}
