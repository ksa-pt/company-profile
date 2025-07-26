import { Mail } from "lucide-react";

export default function ContactCTA() {
  // Buat link mailto dengan cc dan subject
  const mailto =
    "mailto:ptkunsejahteraabadi@gmail.com" +
    "?cc=nurfahmi.alifdaffa@gmail.com" +
    "&subject=Collaboration%20Inquiry%20-%20KSA%20Indonesia" +
    "&body=Hi%20KSA%20Indonesia%2C%0D%0A%0D%0AI%20am%20interested%20in%20collaborating%20with%20your%20team.%20Please%20contact%20me%20back.%0D%0A%0D%0AThanks!";

  return (
    <section className="py-24 flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f8fb] via-[#fffbe7] to-[#e8ffe6]">
      {/* Subtitle kecil */}
      <span className="mb-2 text-base font-medium text-[#3BBFC3] tracking-wider uppercase">
        Get In Touch
      </span>
      {/* Heading utama */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#222] mb-4 tracking-tight">
        Let’s Collaborate and Grow!
      </h2>
      {/* Subheading */}
      <p className="max-w-xl text-center text-lg text-gray-700 mb-12">
        Ready to build the future with us? Share your ideas or ask anything.<br className="hidden md:block" /> Our team will get in touch soon!
      </p>
      {/* Button */}
      <a
        href={mailto}
        className="group inline-flex items-center justify-center px-10 py-6 rounded-xl border-2 border-[#3BBFC3] bg-white/70 font-bold text-xl text-[#222] shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#3BBFC3] hover:text-white hover:border-[#F7931E] focus:outline-none"
        style={{
          boxShadow: "0 6px 32px #3bbfc324",
        }}
      >
        <Mail size={28} className="mr-3 group-hover:animate-bounce" />
        Contact Us
      </a>
      {/* Small info */}
      <p className="mt-6 text-sm text-gray-400">
        Or email us directly: <span className="underline">ptkunsejahteraabadi@gmail.com</span>
      </p>
    </section>
  );
}