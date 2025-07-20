import * as Icons from 'lucide-react';

export default function FeatureSection({ features }) {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {features.map((feature, idx) => {
            const LucideIcon = Icons[feature.icon];
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-blue-400 p-4 rounded-md text-white mb-4">
                  <LucideIcon size={24} />
                </div>
                <p className="font-semibold text-lg">{feature.title}</p>
                <p className="text-gray-500 mt-2">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
