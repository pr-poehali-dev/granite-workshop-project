
export interface GalleryItemType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const galleryItems: GalleryItemType[] = [
  {
    id: 1,
    title: "Вертикальный памятник из черного гранита",
    description: "Классический одинарный памятник с гравировкой и цветником",
    image: "/placeholder.svg",
    category: "single"
  },
  {
    id: 2,
    title: "Двойной мемориальный комплекс",
    description: "Семейный памятник с установкой ограды и плитки",
    image: "/placeholder.svg",
    category: "double"
  },
  {
    id: 3,
    title: "Эксклюзивный памятник с ангелом",
    description: "Художественный мемориал с объемной скульптурой",
    image: "/placeholder.svg",
    category: "exclusive"
  },
  {
    id: 4,
    title: "Гранитный комплекс с оградой",
    description: "Полное благоустройство места захоронения",
    image: "/placeholder.svg",
    category: "complex"
  },
  {
    id: 5,
    title: "Памятник из красного гранита",
    description: "Вертикальный памятник из красного карельского гранита",
    image: "/placeholder.svg",
    category: "single"
  },
  {
    id: 6,
    title: "Мемориальный комплекс для военного",
    description: "Тематический памятник с военной символикой",
    image: "/placeholder.svg",
    category: "exclusive"
  },
];
