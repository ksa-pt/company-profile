export default function ServicesSection({ service }) {
  return (
    <section
      id="service"
      className="relative bg-fixed bg-cover bg-center px-6 py-24"
      style={{
        backgroundImage: "url('/assets/parallax.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="container mx-auto rounded-lg shadow relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-16">{service.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {service.items.map((service, idx) => (
            <div
              key={idx} 
              className="/20 backdrop-blur-md shadow-lg p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white text-center mb-4">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-white space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
