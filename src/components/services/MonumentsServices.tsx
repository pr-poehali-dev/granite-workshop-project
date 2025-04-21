
import ServiceCard from "./ServiceCard";
import { ServiceCategoryProps } from "./types";

const MonumentsServices = ({ services }: ServiceCategoryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard 
          key={`monument-${index}`}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          content={service.content}
        />
      ))}
    </div>
  );
};

export default MonumentsServices;
