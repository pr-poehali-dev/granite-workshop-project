
interface GalleryItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const GalleryItem = ({ id, title, description, image, onClick }: GalleryItemProps) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover-scale cursor-pointer"
      onClick={onClick}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
