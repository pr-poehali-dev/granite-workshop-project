
import MonumentsServices from "./services/MonumentsServices";
import ImprovementServices from "./services/ImprovementServices";
import RestorationServices from "./services/RestorationServices";
import { monumentsData, improvementData, restorationData } from "./services/servicesData";
import TabsContainer from "./services/TabsContainer";
import SectionHeader from "./services/SectionHeader";
import TestimonialsSection from "./services/TestimonialsSection";
import CatalogSection from "./services/CatalogSection";
import { ServiceCategory } from "./services/types";

const ServicesSection = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      id: "monuments",
      label: "Памятники",
      content: <MonumentsServices services={monumentsData} />
    },
    {
      id: "improvement",
      label: "Благоустройство",
      content: <ImprovementServices services={improvementData} />
    },
    {
      id: "restoration",
      label: "Реставрация",
      content: <RestorationServices services={restorationData} />
    }
  ];

  return (
    <>
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Наши услуги" 
            description="Комплексное изготовление и установка мемориальных памятников любой сложности по всей Саратовской области"
          />
          
          <TabsContainer categories={serviceCategories} />
        </div>
      </section>
      
      <TestimonialsSection />
      
      <CatalogSection />
    </>
  );
};

export default ServicesSection;
