"use client";
import { Target, Users, Handshake, Sparkles, Medal } from "lucide-react";

const missionList = [
  {
    icon: <Target size={32} className="text-[#F7931E]" />,
    text: "Empowering individuals and businesses through innovative technology solutions that enhance efficiency, connectivity, and well-being.",
  },
  {
    icon: <Users size={32} className="text-[#3BBFC3]" />,
    text: "Fostering a culture of sustainable growth, skill development, and adaptability to change.",
  },
  {
    icon: <Handshake size={32} className="text-[#D9443C]" />,
    text: "Building strategic partnerships that are mutually beneficial and sustainable with clients and partners.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center bg-gradient-to-br from-[#e0f8fb] via-[#fffbe7] to-[#e8ffe6] py-16 md:py-16" id="vision-mission">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center px-4">
        {/* Vision */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={38} className="text-[#F7931E]" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#F7931E] drop-shadow-sm tracking-tight">
              Vision
            </h3>
          </div>
          <p className="text-gray-700 max-w-2xl text-center text-base md:text-lg font-medium">
            Becoming a catalyst for positive transformation through technology, to shape a smarter, more sustainable, and inclusive future.
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col items-center w-full">
          {/* Icon + Title Mission */}
          <div className="flex items-center gap-2 mb-10 mt-4">
            <Medal size={38} className="text-[#3BBFC3]" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#3BBFC3] tracking-tight">
              Mission
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center items-start">
            {missionList.map((m, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-2xl shadow-lg px-7 py-8 flex flex-col items-start min-h-[220px] max-w-md w-full mx-auto border transition hover:shadow-xl hover:-translate-y-2"
                style={{
                  borderColor:
                    i === 0
                      ? "#F7931E40"
                      : i === 1
                      ? "#3BBFC340"
                      : "#D9443C40",
                  borderWidth: "2px",
                }}
              >
                <div className="mb-4">{m.icon}</div>
                <p className="text-gray-900 font-semibold text-base md:text-[1.07rem] leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}