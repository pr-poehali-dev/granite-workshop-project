
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Clock, MapPin, ChevronRight } from "lucide-react";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Шапка */}
      <header className="bg-primary py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo-b.svg" alt="Логотип" className="w-10 h-10" />
            <h1 className="text-primary-foreground text-xl font-bold">Гранитная мастерская</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-primary-foreground hover:underline">Услуги</a>
            <a href="#gallery" className="text-primary-foreground hover:underline">Наши работы</a>
            <a href="#about" className="text-primary-foreground hover:underline">О нас</a>
            <a href="#contact" className="text-primary-foreground hover:underline">Контакты</a>
          </div>
          <div className="flex items-center space-x-2">
            <a href="tel:+79001234567" className="text-primary-foreground font-medium flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">+7 (900) 123-45-67</span>
            </a>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="bg-muted relative h-[500px] flex items-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Артель «Гранитная мастерская»</h2>
            <p className="text-xl mb-6">Изготовление, продажа и установка мемориальных памятников на всех кладбищах Саратовской области</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white">
                Заказать памятник
              </Button>
              <Button size="lg" variant="outline">
                Узнать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Собственное производство</h3>
                <p className="text-muted-foreground">Изготавливаем памятники из качественного гранита на собственном оборудовании</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Опыт более 15 лет</h3>
                <p className="text-muted-foreground">Многолетний опыт работы и сотни довольных клиентов по всей области</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Работаем под ключ</h3>
                <p className="text-muted-foreground">От замеров и дизайна до установки и благоустройства могил</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Блок услуг */}
      <ServicesSection />

      {/* Галерея работ */}
      <GallerySection />

      {/* О нас */}
      <AboutUsSection />

      {/* Контакты и форма */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Связаться с нами</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Телефон</h4>
                    <p className="text-lg">+7 (900) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-lg">info@granit-saratov.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Адрес</h4>
                    <p className="text-lg">г. Саратов, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Режим работы</h4>
                    <p className="text-lg">Пн-Пт: 9:00-18:00<br />Сб: 10:00-15:00<br />Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Гранитная мастерская</h3>
              <p className="mb-4">Изготовление памятников и мемориалов любой сложности из натурального камня.</p>
              <p>© 2023 Артель «Гранитная мастерская». Все права защищены.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Памятники из гранита</a></li>
                <li><a href="#" className="hover:underline">Благоустройство могил</a></li>
                <li><a href="#" className="hover:underline">Реставрация памятников</a></li>
                <li><a href="#" className="hover:underline">Художественная гравировка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Регионы доставки</h3>
              <ul className="space-y-2">
                <li>Саратов и Саратовская область</li>
                <li>Энгельс</li>
                <li>Балаково</li>
                <li>Вольск</li>
                <li>Доставка в соседние области</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
