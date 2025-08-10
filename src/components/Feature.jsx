import * as Icons from 'lucide-react';

export default function FeatureSection({ feature }) {
  return (
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Divider Heading */}
        <h3 className="text-2xl font-extrabold mb-12">
          <span className="text-[#D9443C]">
            Why Choose Us
          </span>
        </h3>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br from-[#3BBFC3] to-[#81e6e6] group-hover:shadow-lg transition">
              <Icons.Cpu size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#222] mb-2">{feature[0].title}</h4>
            <p className="text-base text-gray-600">
              {feature[0].description}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br from-[#F7931E] to-[#FFD39C] group-hover:shadow-lg transition">
              <Icons.Layers size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#222] mb-2">{feature[1].title}</h4>
            <p className="text-base text-gray-600">
              {feature[1].description}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br from-[#D9443C] to-[#f98080] group-hover:shadow-lg transition">
              <Icons.Smartphone size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#222] mb-2">{feature[2].title}</h4>
            <p className="text-base text-gray-600">
              {feature[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}