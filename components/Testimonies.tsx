"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Container } from "./ui/Container";
import { FaGithub } from "react-icons/fa";

export const Testimonies = [
  {
    name: "Maxwell Etinosa",
    pix: "/testi.webp",
    testimony:
      "Save a Life Physiotherapy helped reduce my pain significantly and improved my overall mobility. I can now move freely, carry out my daily activities with ease, and feel much better than before.",
  },
  {
    name: "Emmanuel Akanmu",
    pix: "/testi.webp",
    testimony:
      "My recovery journey with Save a Life Physiotherapy was smooth, well-guided, and very effective from start to finish. The team was supportive, patient, and always ensured I was comfortable every step of the way.",
  },
  {
    name: "Daniel Igwe",
    pix: "/testi.webp",
    testimony:
      "I saw real and noticeable improvement after my sessions at Save a Life Physiotherapy, even within a short time. I feel stronger, more flexible, and much more confident in my movements now.",
  },
  {
    name: "Daniel Igwe",
    pix: "/testi.webp",
    testimony:
      "The team at Save a Life Physiotherapy made my recovery experience stress-free and encouraging. I’m truly grateful for their dedication, professionalism, and the consistent support they gave me.",
  },
  {
    name: "Daniel Igwe",
    pix: "/testi.webp",
    testimony:
      "Save a Life Physiotherapy provided excellent care and attention throughout my treatment process. I’m now able to return to my daily activities without discomfort and with renewed confidence.",
  },
  {
    name: "Daniel Igwe",
    pix: "/testi.webp",
    testimony:
      "Choosing Save a Life Physiotherapy was the right decision for my recovery and overall well-being. My mobility has improved greatly, and I now feel healthier and more active than before.",
  },
];

export default () => {
  const [mounted, setMounted] = useState(false);

  // Ensure Swiper runs only after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering Swiper during SSR (prevents width flicker)
    return (
      <div className="w-full bg-main-bg pt-20 pb-10 text-center text-white">
        <p className="text-2xl">Why They Love Learning Here</p>
        <p>Students Testimonies</p>
      </div>
    );
  }

  return (
    <div id="testimonies" className="w-full bg-main-bg pt-20 pb-10">
      <Container className="flex flex-col overflow-hidden relative gap-10">
        <div className="flex items-center flex-col justify-cente">
          <p className=" text-4xl md:text-5xl font-bold text-blue-900">
            Patients Testimonies
          </p>
          <p>Why we love save a life physiotherapy</p>
        </div>

        {/* Stable container */}
        <div className="w-full max-w-screen-xl mx-auto overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
            }}
          >
            {Testimonies.map((item, index) => (
              <SwiperSlide
                key={index}
                className=" h-fit flex flex-col justify-between text-white border text-sm border-slate-400 p-5 pb-3 rounded-md relative overflow-hidden"
              >
                {/* Background glow */}

                {/* Testimony content */}
                <div className="flex flex-col gap-10">
                  <div>
                    <div className="w-[70px] mb-2">
                      <Image
                        src={item.pix}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="w-full aspect-square object-cover rounded-full"
                      />
                    </div>
                    <p className="max-sm:text-sm text-slate-900">
                      {item.testimony}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <p className="text-slate-900">{item.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};
