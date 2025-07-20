export default function VisionMissionSection({ vision, mission }) {
  return (
    <section id="vision-mission" className="container mx-auto  py-16 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">{vision.title}</h2>
        <p className="max-w-2xl mx-auto text-gray-500">{vision.text}</p>
      </div>

      <div className="bg-blue-400 p-6 rounded-lg shadow-lg text-white max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">{mission.title}</h2>
        <ol className="list-decimal list-inside space-y-2">
          {mission.bullets.map((item, idx) => (
            <li key={idx} className="text-white">{item}</li>
          ))}
        </ol>
      </div>
      
      <div className="bg-blue-400 h-[80px] w-[50px] rounded-bl-[25px] rounded-br-[25px] absolute top-0 left-0" />
    </section>
  );
}
