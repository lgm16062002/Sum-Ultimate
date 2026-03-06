import "../Styles/centerOfExcellence.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  FaHeartbeat,
  FaBrain,
  FaLungs,
  FaMicroscope,
  FaFlask,
  FaProcedures,
  FaHandHoldingMedical,
  FaTooth,
  FaSyringe,
  FaNotesMedical,
  FaUserMd,
} from "react-icons/fa";

const centers = [
  { title: "ANESTHESIOLOGY & PAIN MANAGEMENT", icon: <FaProcedures /> },
  { title: "CARDIOLOGY (CLINICAL & INTERVENTIONAL)", icon: <FaHeartbeat /> },
  { title: "CARDIO VASCULAR & THORACIC SURGERY", icon: <FaLungs /> },
  { title: "CLINICAL LABORATORY", icon: <FaMicroscope /> },
  { title: "CLINICAL PSYCHOLOGY & COUNSELLING", icon: <FaBrain /> },
  { title: "CLINICAL RESEARCH", icon: <FaFlask /> },
  { title: "CRITICAL CARE MEDICINE", icon: <FaNotesMedical /> },
  { title: "DERMATOLOGY & VENEROLOGY", icon: <FaHandHoldingMedical /> },
  { title: "DENTISTRY & MAXILLOFACIAL SURGERY", icon: <FaTooth /> },
  { title: "DIABETOLOGY", icon: <FaSyringe /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const slides = chunkArray(centers, 12);

export default function CenterOfExcellence() {
  return (
    <section className="centerOfExcellence py-20 bg-[#07234e]" id="centers">
      <div className="w-[90%] mx-auto relative">
        <h2 className="text-4xl text-green-400 mb-12">Centers of Excellence</h2>

        <Carousel
          opts={{ align: "start", loop:true, duration: 40 }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                {/* 2 ROW GRID */}
                <div className="grid grid-cols-6 gap-12">
                  {slide.map((item, i) => (
                    <div key={i} className="text-center">
                      {/* CARD */}
                      <div className="w-[160px] h-[150px] bg-[#e6e6e6] rounded-2xl flex items-center justify-center mx-auto">
                        <div className="text-4xl text-teal-500">
                          {item.icon}
                        </div>
                      </div>

                      {/* TITLE */}
                      <p className="text-white text-sm mt-4 leading-snug max-w-[160px] mx-auto">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 bg-[#163d66] text-white border-none" />
          <CarouselNext className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 bg-[#163d66] text-white border-none" />
        </Carousel>
      </div>
    </section>
  );
}
