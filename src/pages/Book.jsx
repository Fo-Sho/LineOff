export default function Book() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Book Your Free Hotel Financial Review
        </h1>

        <p className="text-gray-400 mb-8">
          Discover hidden inefficiencies, improve reporting, and gain clarity
          on your hotel's financial performance.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          What you'll get in this free session:
        </h2>

        <ul className="text-white/70 space-y-2 mb-8">
          <li>• Breakdown of your current hotel finances</li>
          <li>• Identification of inefficiencies or revenue leaks</li>
          <li>• Clear steps to improve profitability</li>
        </ul>

        <div className="bg-white rounded-2xl overflow-hidden">
          <iframe
            src="https://calendly.com/dlivtving"
            width="100%"
            height="800"
            title="Book Your Free Hotel Financial Review"
          />
        </div>
      </div>
    </section>
  );
}
