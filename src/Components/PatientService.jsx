import "../Styles/PatientService.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FiArrowUpRight } from "react-icons/fi";

const patientService = [
  {
    title: "Online Appointment Booking",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health Check-up Packages",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Online Appointment Booking",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health Check-up Packages",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Online Appointment Booking",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health Check-up Packages",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Online Appointment Booking",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health Check-up Packages",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Online Appointment Booking",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health Check-up Packages",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function PatientService() {
  return (
    <section className="patientService" id="services">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[90%] mx-auto relative"
      >
        <CarouselContent className="">
          {patientService?.map((item, idx) => (
            <CarouselItem key={idx} className="basis-1/2 lg:basis-1/4">
              <div className="">
                <Card className="w-[300px] overflow-hidden rounded-3xl shadow-lg p-0">
                  <CardContent className="relative aspect-[3/4] p-0">
                    {/* Image */}
                    <img
                      src={item.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07234e] via-green-500/30 via-40% to-transparent to-60%"></div>

                    {/* Text */}
                    <div className="absolute bottom-6 left-6 text-white text-xl font-medium leading-snug max-w-[70%]">
                      {item.title}
                    </div>

                    {/* Arrow Button */}
                    <div className="absolute bottom-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white group cursor-pointer">
                      <FiArrowUpRight className="text-[#0b2e63] text-3xl transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[110%] left-[46%] p-5 shadow-xl border-2 active:shadow-none active:transform-[translateY(5px)] duration-300  border-blue-800" />
        <CarouselNext className="absolute top-[110%] right-[46%] p-5 shadow-xl border-2 active:shadow-none active:transform-[translateY(5px)] duration-300  border-blue-800" />
      </Carousel>
    </section>
  );
}
