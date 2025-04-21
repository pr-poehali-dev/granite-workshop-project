
import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import { TestimonialProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Determine how many testimonials to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    // Set initial value
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);
  
  // If we don't have enough testimonials at the end, wrap around to the beginning
  if (visibleTestimonials.length < visibleCount) {
    const remaining = visibleCount - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="Отзывы наших клиентов" 
          description="Мнения тех, кто уже воспользовался нашими услугами"
        />
        
        <div className="mt-8 relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.name}-${index}`} 
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transition-all duration-300"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
