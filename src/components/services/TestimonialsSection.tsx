
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "./SectionHeader";
import { TestimonialProps } from "./types";

const testimonials: TestimonialProps[] = [
  {
    name: "Елена Иванова",
    location: "г. Саратов",
    date: "15.04.2023",
    content: "Очень благодарна мастерской за профессиональный подход и качественную работу. Установили памятник в срок, всё выполнено аккуратно и с уважением.",
    rating: 5
  },
  {
    name: "Сергей Петров",
    location: "г. Энгельс",
    date: "23.05.2023",
    content: "Заказывал комплексное благоустройство могилы родителей. Работа выполнена отлично, цена соответствует качеству. Рекомендую всем.",
    rating: 4.5
  },
  {
    name: "Анна Сидорова",
    location: "п. Дубки",
    date: "07.06.2023",
    content: "Обратились по рекомендации знакомых. Очень довольны результатом. Памятник получился именно таким, каким мы его хотели видеть.",
    rating: 5
  },
  {
    name: "Михаил Кузнецов",
    location: "г. Саратов",
    date: "19.07.2023",
    content: "Заказывал реставрацию старого памятника. Мастера восстановили практически разрушенную гравировку. Спасибо за внимательное отношение!",
    rating: 4
  },
  {
    name: "Ольга Смирнова",
    location: "г. Балаково",
    date: "02.08.2023",
    content: "Отличная работа! Памятник установили быстро и качественно, несмотря на сложный рельеф участка. Очень благодарна за профессионализм.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="Отзывы наших клиентов" 
          description="Мнения тех, кто уже воспользовался нашими услугами"
        />
        
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="pb-12">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
