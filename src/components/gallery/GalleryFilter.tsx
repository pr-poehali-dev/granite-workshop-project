
import { Button } from "@/components/ui/button";

interface GalleryFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterOptions = [
  { value: "all", label: "Все работы" },
  { value: "single", label: "Одинарные" },
  { value: "double", label: "Двойные" },
  { value: "exclusive", label: "Эксклюзивные" },
  { value: "complex", label: "Комплексы" },
];

const GalleryFilter = ({ activeFilter, onFilterChange }: GalleryFilterProps) => {
  return (
    <div className="flex justify-center mb-8 space-x-2 flex-wrap">
      {filterOptions.map((option) => (
        <Button 
          key={option.value}
          variant={activeFilter === option.value ? "default" : "outline"} 
          className="mb-2"
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default GalleryFilter;
