export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="bg-[#888888] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 text-white">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">{contact.title}</h2>
          <p className="mb-6">{contact.description}</p>
          <p><span className="font-semibold">Phone:</span> {contact.phone}</p>
          <p className="mt-2">
            <span className="font-semibold">Email:</span> {contact.email.join(', ')}
          </p>
          <p className="mt-2"><span className="font-semibold">Address:</span> {contact.address}</p>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.546514349394!2d106.83383771194615!3d-6.19137966063574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43ead681da7%3A0xedba7d242ab09461!2sGedung%20Gondangdia%2025!5e0!3m2!1sid!2sid!4v1752934786668!5m2!1sid!2sid"
            width="320"
            height="240"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
