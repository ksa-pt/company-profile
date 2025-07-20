export default function CTASection() {
  return (
    <section className="bg-[#3A3A3A] py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
        Let's work together.
      </h2>
      <a
        href="#contact"
        className="inline-block px-10 py-4 border border-white text-white font-semibold rounded transition duration-300 hover:bg-white hover:text-gray-800"
      >
        Get Started&nbsp;
        <span className="inline-block">
          <svg
            className="w-4 h-4 inline"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>
    </section>
  );
}
