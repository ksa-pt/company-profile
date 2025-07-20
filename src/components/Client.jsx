"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/client.css';

export default function ClientSection({ client }) {
  return (
    <section id="client" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-10">{client.title}</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {client.items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <img
                src={item.logo}
                alt={item.client}
                className="w-16 h-auto mb-6 object-contain"
              />
              <p className="text-lg italic text-gray-700 mb-4">"{item.quote}"</p>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <span className="text-sm text-gray-500">{item.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
