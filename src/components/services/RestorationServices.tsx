
import ServiceCard from "./ServiceCard";
import { ServiceCategoryProps } from "./types";

const RestorationServices = ({ services }: ServiceCategoryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard 
          key={`restoration-${index}`}
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

export default RestorationServices;
