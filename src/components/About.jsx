// AboutSection.jsx
import { FaCogs, FaPuzzlePiece, FaMobileAlt } from "react-icons/fa";

export default function AboutSection({ about }) {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src="/assets/logo.png"
          alt="Logo KSA"
          className="w-40 sm:w-52 md:w-60 mb-6"
        />

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#F7931E]">
          {about.title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-2xl leading-relaxed mb-3 text-base sm:text-lg">
          {about.description}
        </p>

        <p className="text-gray-600 max-w-3xl leading-relaxed text-sm sm:text-base mb-10">
          {about.commitment}
        </p>

      </div>
    </section>
  );
}