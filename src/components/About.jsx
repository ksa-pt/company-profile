import { Sparkles } from "lucide-react";

export default function AboutSection({ about }) {
  return (
    <section className="relative bg-gradient-to-br from-[#e0f8fb] via-[#fffbe7] to-[#e8ffe6] py-24 overflow-hidden" id="about">
      {/* Optional: Decorative blob */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[320px] h-[140px] bg-[#F7931E]/20 rounded-full blur-2xl z-0"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="p-4 bg-white/80 rounded-2xl shadow-lg mb-2">
          <img src="/assets/logo.png" alt="KSA Logo" className="h-24 mx-auto" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#F7931E] flex items-center gap-2 mb-1">
          <span>About KSA Indonesia</span>
          <Sparkles size={28} className="text-[#3BBFC3] animate-pulse" />
        </h2>
        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#F7931E] via-[#3BBFC3] to-[#D9443C] mb-6" />
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
          <p className="text-center text-lg text-gray-700 mb-2">
            <span className="font-bold text-[#F7931E]">Founded in 2023</span>, our company was born from the perfect blend of experienced professionals and passionate, dedicated young talents.
          </p>
          <p className="text-center text-base text-gray-600">
            Our commitment is to deliver data-driven solutions that create a real impact, particularly in the sectors of <span className="text-[#3BBFC3] font-semibold">healthcare, disaster management</span>, and <span className="text-[#D9443C] font-semibold">environmental sustainability</span>—areas that are at the core of our expertise and focus.
          </p>
        </div>
      </div>
    </section>
  );
}