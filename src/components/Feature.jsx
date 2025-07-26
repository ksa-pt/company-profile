import * as Icons from 'lucide-react';

export default function FeatureSection({ features }) {
  return (
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Divider Heading */}
        <h3 className="text-xl font-semibold text-[#D9443C] mb-10">Why Choose Us</h3>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition">
            <div className="bg-[#3BBFC3] text-white p-4 rounded-full mb-3">
              <Icons.Cpu size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Latest Technology</h4>
            <p className="text-sm text-gray-600">
              We leverage cutting-edge technologies to ensure every solution is
              fast, reliable, and scalable.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition">
            <div className="bg-[#F7931E] text-white p-4 rounded-full mb-3">
              <Icons.Layers size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Smart and Flexible</h4>
            <p className="text-sm text-gray-600">
              Our systems are designed to adapt and grow with your unique
              organizational needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition">
            <div className="bg-[#D9443C] text-white p-4 rounded-full mb-3">
              <Icons.Smartphone size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Responsive Design</h4>
            <p className="text-sm text-gray-600">
              Our solutions are optimized to deliver a seamless and intuitive
              experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}