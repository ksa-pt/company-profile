import { Code2, Globe2, Database, Bot } from "lucide-react";

export default function FocusSection({ focus }) {
  return (
    <section className="bg-gray-50 py-24" id="focus">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-[#F7931E] mb-4">{focus.title}</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-sm sm:text-base">
          {focus.description}
        </p>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#3BBFC3] p-3 rounded-full w-fit mb-4">
              <Code2 className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{focus.items[0].title}</h4>
            <p className="text-gray-600 text-sm">{focus.items[0].description}</p>
          </div>

          {/* 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#D9443C] p-3 rounded-full w-fit mb-4">
              <Globe2 className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{focus.items[1].title}</h4>
            <p className="text-gray-600 text-sm">{focus.items[1].description}</p>
          </div>

          {/* 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#F7931E] p-3 rounded-full w-fit mb-4">
              <Database className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{focus.items[2].title}</h4>
            <p className="text-gray-600 text-sm">{focus.items[2].description}</p>
          </div>

          {/* 4 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <div className="bg-[#8F57FF] p-3 rounded-full w-fit mb-4">
              <Bot className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{focus.items[3].title}</h4>
            <p className="text-gray-600 text-sm">{focus.items[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}