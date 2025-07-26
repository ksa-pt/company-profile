import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection({ contact }) {
  const mailto = `mailto:${contact.email[0]}?cc=${contact.email[1]}`;

  return (
    <section
      id="contact"
      className="py-16 px-2 bg-[#E6FAF7]" // ijo pastel ala KSA
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-4">
        {/* Contact Info Card */}
        <div className="
          bg-white rounded-2xl shadow-xl border border-[#8CE0D7]
          p-8 max-w-[800px] w-full mb-8 md:mb-0
        ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#222] mb-2 flex items-center gap-2">
            <MapPin size={28} className="text-[#3BBFC3]" />
            Contact Information
          </h2>
          <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#F7931E] via-[#3BBFC3] to-[#D9443C] mb-4" />

          <p className="mb-6 text-gray-700 text-base">{contact.description}</p>
          
          <div className="flex items-center mb-2 text-base text-gray-700">
            <Phone size={20} className="mr-2 text-[#3BBFC3]" />
            <span className="font-semibold mr-2">Phone:</span>
            <span>{contact.phone}</span>
          </div>

          <div className="flex items-start mb-2 text-base text-gray-700 flex-wrap">
            <Mail size={20} className="mr-2 mt-0.5 text-[#F7931E]" />
            <span className="font-semibold mr-2">Email:</span>
            <span className="flex flex-col">
              <a
                href={mailto}
                className="underline text-[#3BBFC3] hover:text-[#D9443C] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.email[0]}
              </a>
              <a
                href={`mailto:${contact.email[1]}`}
                className="underline text-[#3BBFC3] hover:text-[#D9443C] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.email[1]}
              </a>
            </span>
          </div>

          <div className="flex items-start text-base text-gray-700">
            <MapPin size={20} className="mr-2 mt-0.5 text-[#D9443C]" />
            <span>
              <span className="font-semibold">Address:</span> {contact.address}
            </span>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#8CE0D7] w-full max-w-md mx-auto md:mx-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.546514349394!2d106.83383771194615!3d-6.19137966063574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43ead681da7%3A0xedba7d242ab09461!2sGedung%20Gondangdia%2025!5e0!3m2!1sid!2sid!4v1752934786668!5m2!1sid!2sid"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KSA Office Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}