export default function FocusSection({ focus }) {
  return (
    <section id="focus" className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-1">{focus.title}</h2>
          <p className="text-gray-500 mb-10">
            {focus.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {focus.items.map((step, idx) => (
            <div key={idx} className=" border bg-slate-50 flex flex-col items-center p-8">
              <img src={step.icon} alt={step.title} className="w-20 h-20" />
              <h3 className="text-xl font-semibold mt-8 mb-4 text-center">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
