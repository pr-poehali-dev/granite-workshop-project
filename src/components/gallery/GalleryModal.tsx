
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItemType } from "./types";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentItem: GalleryItemType | null;
  onPrevious: () => void;
  onNext: () => void;
}

const GalleryModal = ({ 
  isOpen, 
  onClose, 
  currentItem, 
  onPrevious, 
  onNext 
}: GalleryModalProps) => {
  if (!currentItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
        <DialogClose className="absolute right-4 top-4 z-10">
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
            <span className="sr-only">Закрыть</span>
          </Button>
        </DialogClose>
        
        <div className="relative">
          <div className="flex items-center justify-center p-4 sm:p-8">
            <img 
              src={currentItem.image} 
              alt={currentItem.title} 
              className="max-h-[70vh] object-contain"
            />
          </div>
          
          <div className="bg-background p-4">
            <DialogTitle className="text-xl mb-2">
              {currentItem.title}
            </DialogTitle>
            <DialogDescription>
              {currentItem.description}
            </DialogDescription>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Предыдущее изображение</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Следующее изображение</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
