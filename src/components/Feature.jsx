import * as Icons from 'lucide-react';

export default function FeatureSection() {
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
            <h4 className="text-xl font-bold text-[#222] mb-2">Latest Technology</h4>
            <p className="text-base text-gray-600">
              We leverage cutting-edge technologies to ensure every solution is
              fast, reliable, and scalable.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br from-[#F7931E] to-[#FFD39C] group-hover:shadow-lg transition">
              <Icons.Layers size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#222] mb-2">Smart and Flexible</h4>
            <p className="text-base text-gray-600">
              Our systems are designed to adapt and grow with your unique organizational needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br from-[#D9443C] to-[#f98080] group-hover:shadow-lg transition">
              <Icons.Smartphone size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#222] mb-2">Responsive Design</h4>
            <p className="text-base text-gray-600">
              Our solutions are optimized to deliver a seamless and intuitive
              experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}