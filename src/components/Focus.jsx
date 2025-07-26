import { Code2, Globe2, Database, Bot } from "lucide-react";

export default function FocusSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-[#F7931E] mb-4">Our Focus</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-sm sm:text-base">
          Here’s what we love doing and where we bring the most value — from coding great systems
          to making sense of data and applying AI in meaningful ways.
        </p>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#3BBFC3] p-3 rounded-full w-fit mb-4">
              <Code2 className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Software Development</h4>
            <p className="text-gray-600 text-sm">
              We provide software development solutions to build efficient applications and systems.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#D9443C] p-3 rounded-full w-fit mb-4">
              <Globe2 className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Geographic Information System (GIS)</h4>
            <p className="text-gray-600 text-sm">
              We develop spatial data solutions that support location-based decision-making.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#F7931E] p-3 rounded-full w-fit mb-4">
              <Database className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Big Data</h4>
            <p className="text-gray-600 text-sm">
              We help organizations manage and analyze large volumes of data quickly and accurately.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#8F57FF] p-3 rounded-full w-fit mb-4">
              <Bot className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Large Language Models (AI Based)</h4>
            <p className="text-gray-600 text-sm">
              We integrate LLM to build automation and digital assistants like chatbots and reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}