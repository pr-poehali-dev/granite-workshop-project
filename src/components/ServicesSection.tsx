
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-3 text-center">Наши услуги</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Комплексное изготовление и установка мемориальных памятников любой сложности по всей Саратовской области
        </p>

        <Tabs defaultValue="monuments" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="monuments">Памятники</TabsTrigger>
            <TabsTrigger value="improvement">Благоустройство</TabsTrigger>
            <TabsTrigger value="restoration">Реставрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="monuments">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Одинарные памятники</CardTitle>
                  <CardDescription>Классические памятники из гранита</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Одинарный памятник" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Изготовление одинарных памятников из гранита различных цветов и размеров с различными вариантами оформления.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Двойные памятники</CardTitle>
                  <CardDescription>Памятники для двух захоронений</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Двойной памятник" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Изготовление двойных памятников для семейных захоронений с индивидуальным дизайном и оформлением.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Эксклюзивные мемориалы</CardTitle>
                  <CardDescription>Сложные художественные работы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Эксклюзивный мемориал" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Создание сложных мемориальных композиций с объемными элементами и уникальным дизайном по индивидуальному заказу.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="improvement">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Установка оград</CardTitle>
                  <CardDescription>Металлические и гранитные ограды</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Установка оград" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Изготовление и установка металлических и гранитных оград различных дизайнов для оформления могил.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Тротуарная плитка</CardTitle>
                  <CardDescription>Укладка плитки и брусчатки</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Тротуарная плитка" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Укладка тротуарной плитки и брусчатки различных форм и цветов для благоустройства территории.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Комплексное благоустройство</CardTitle>
                  <CardDescription>Оформление под ключ</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Комплексное благоустройство" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Полное благоустройство места захоронения, включая установку памятника, ограды, столиков и лавочек.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="restoration">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Очистка памятников</CardTitle>
                  <CardDescription>Удаление загрязнений</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Очистка памятников" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Профессиональная очистка гранитных и мраморных памятников от различных загрязнений и мха.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Обновление гравировки</CardTitle>
                  <CardDescription>Восстановление надписей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Обновление гравировки" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Восстановление потускневших надписей и портретов на памятниках с использованием современных технологий.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Ремонт и реставрация</CardTitle>
                  <CardDescription>Восстановление целостности</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Ремонт и реставрация" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Комплексный ремонт поврежденных памятников, восстановление целостности и внешнего вида мемориала.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
