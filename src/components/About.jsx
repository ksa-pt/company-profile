export default function AboutSection({ about }) {
  return (
    <section id="about" className="container mx-auto">
      <div className="flex justify-between gap-4">
        <div className="py-8 px-4 sm:py-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">{about.title}</h2>
          <p className="text-gray-500 max-w-3xl mb-4">{about.description}</p>
          <p className="text-gray-500 max-w-4xl">{about.commitment}</p>
        </div>
        <div className="hidden sm:block">
          <img className="w-[380px]" src="/assets/trigon.png" alt="about" />
        </div>
      </div>
    </section>
  );
}
