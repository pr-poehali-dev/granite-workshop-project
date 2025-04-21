
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">О нашей мастерской</h2>
            <p className="mb-4 text-muted-foreground">
              Артель «Гранитная мастерская» — это команда профессионалов с многолетним опытом работы в сфере изготовления и установки памятников из натурального камня.
            </p>
            <p className="mb-4 text-muted-foreground">
              Мы работаем на собственном производстве, используя современное оборудование и качественные материалы от проверенных поставщиков гранита.
            </p>
            <p className="mb-6 text-muted-foreground">
              Наша мастерская находится в Саратове, но мы оказываем услуги по всей Саратовской области, а также доставляем и устанавливаем памятники в соседних регионах.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>
                Узнать больше о нас
              </Button>
              <Button variant="outline">
                Задать вопрос
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/placeholder.svg" 
              alt="Наша мастерская" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Часто задаваемые вопросы</h3>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Сколько времени занимает изготовление памятника?</AccordionTrigger>
              <AccordionContent>
                Стандартный срок изготовления памятника составляет от 14 до 30 дней, в зависимости от сложности работы, наличия материала на складе и загруженности производства. Эксклюзивные и сложные мемориальные комплексы могут занимать до 60 дней.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Как происходит процесс заказа памятника?</AccordionTrigger>
              <AccordionContent>
                Процесс заказа включает несколько этапов: консультация и выбор модели, подготовка макета, согласование всех деталей, внесение предоплаты, изготовление памятника, доставка и установка. На каждом этапе мы поддерживаем связь с заказчиком и информируем о ходе работы.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Возможна ли установка памятника зимой?</AccordionTrigger>
              <AccordionContent>
                Установка памятников обычно проводится в теплое время года (с апреля по ноябрь), так как в зимнее время земля промерзает, что затрудняет работы. Однако мы принимаем заказы на изготовление памятников и зимой, чтобы весной, как только позволят погодные условия, установить их.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Какие гарантии вы предоставляете?</AccordionTrigger>
              <AccordionContent>
                Мы предоставляем гарантию на наши изделия и работы сроком от 3 до 5 лет. Гарантия распространяется на целостность конструкции, качество полировки, гравировки и установки. Натуральный камень как материал имеет практически неограниченный срок службы при правильном уходе.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>В какие регионы вы осуществляете доставку?</AccordionTrigger>
              <AccordionContent>
                Мы работаем по всей Саратовской области, включая Саратов, Энгельс, Балаково, Вольск и другие населенные пункты. Также осуществляем доставку и установку памятников в соседних областях по договоренности.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
