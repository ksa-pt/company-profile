import {
  BarChart3,
  Code2,
  Database,
  Lightbulb
} from "lucide-react";

const services = [
  {
    icon: <BarChart3 size={30} className="text-[#F7931E]" />,
    title: "Data Analytics",
    items: [
      "Dashboard & Reporting",
      "Data Warehouse & ETL",
      "Big Data Management",
      "Advanced Analytics (Predictive, Prescriptive)"
    ],
  },
  {
    icon: <Code2 size={30} className="text-[#3BBFC3]" />,
    title: "IT Project Development",
    items: [
      "Web & Mobile Application Development",
      "API Integration & System Interfacing",
      "Enterprise System Implementation (ERP, CRM)",
      "Custom Software Solution"
    ],
  },
  {
    icon: <Database size={30} className="text-[#D9443C]" />,
    title: "Data Engineering",
    items: [
      "Data Pipeline Architecture",
      "Cloud Data Infrastructure (AWS, GCP, Azure)",
      "Real-Time Data Streaming"
    ],
  },
  {
    icon: <Lightbulb size={30} className="text-[#F7931E]" />,
    title: "Consulting & IT Strategy",
    items: [
      "IT Roadmap Design",
      "Digital Transformation Advisory",
      "Real-Time Data Streaming",
      "IT Governance Documentation"
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/parallax.jpg')",
      }}
      id="service"
    >
      {/* Overlay transparan agar card & teks tetap jelas */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content utama */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-14 text-center drop-shadow-xl flex justify-center items-center gap-3">
          <span className="inline-block">
            Our Services
            <span className="block w-8 h-1 mx-auto mt-2 rounded-full bg-gradient-to-r from-[#F7931E] via-[#3BBFC3] to-[#D9443C]" />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="group relative rounded-2xl p-8
                backdrop-blur-lg bg-white/10 border border-white/20
                shadow-xl transition-all duration-300
                hover:border-[#3BBFC3] hover:shadow-[0_0_18px_2px_#3BBFC355] hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="transition-all group-hover:-translate-y-1 group-hover:scale-110">
                  {svc.icon}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#3BBFC3] transition">
                  {svc.title}
                </h3>
              </div>
              <ul className="text-white/90 text-sm font-light pl-2 space-y-2">
                {svc.items.map((item, j) => (
                  <li key={j} className="list-disc list-inside">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}