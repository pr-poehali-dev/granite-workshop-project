
import { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
  price?: string;
}

export interface ServiceCategoryProps {
  services: ServiceCardProps[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TestimonialProps {
  name: string;
  location: string;
  date: string;
  content: string;
  rating: number;
  avatarSrc?: string;
}

export interface CatalogItemProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  category: string;
  popular?: boolean;
}
