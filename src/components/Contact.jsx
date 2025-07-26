import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="bg-white py-16 px-2">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-6 lg:gap-8">
        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full border border-[#3BBFC325] flex flex-col justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#222] mb-2 flex items-center gap-2">
            <MapPin size={28} className="text-[#3BBFC3]" />
            Contact Information
          </h2>
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#F7931E] via-[#3BBFC3] to-[#D9443C] mb-6" />
          <p className="mb-8 text-[#222] text-base">
            For more information about our services or products, feel free to contact us through the details below.
          </p>
          {/* Phone */}
          <p className="flex items-center mb-3 text-base text-[#222]">
            <Phone size={20} className="mr-3 text-[#3BBFC3]" />
            <span className="font-semibold mr-2">Phone:</span> {contact.phone}
          </p>
            {/* Email */}
            <div className="flex items-start mb-3 text-base text-[#222]">
              <Mail size={20} className="mr-3 text-[#F7931E] mt-1" />
              <span className="font-semibold mr-2 mt-1">Email:</span>
              <span className="flex flex-col">
                <a
                  href={`mailto:${contact.email[0]}`}
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
          {/* Address */}
          <p className="flex items-start text-base text-[#222]">
            <MapPin size={20} className="mr-3 text-[#D9443C] mt-1" />
            <span>
              <span className="font-semibold">Address:</span> {contact.address}
            </span>
          </p>
        </div>
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#3BBFC325] w-full max-w-md flex-1 min-h-[330px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.546514349394!2d106.83383771194615!3d-6.19137966063574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43ead681da7%3A0xedba7d242ab09461!2sGedung%20Gondangdia%2025!5e0!3m2!1sid!2sid!4v1752934786668!5m2!1sid!2sid"
            width="100%"
            height="330"
            style={{ border: 0, minHeight: 220 }}
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