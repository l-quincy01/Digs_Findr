import { IoImageSharp } from "react-icons/io5";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialogGallery";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import CarouselComp from "./Carousel";

interface Place {
  photos?: string[];
}

interface GalleryCompProps {
  place: Place;
  // setShowAllPhotos: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlaceGalleryFull({ place }: GalleryCompProps) {
  //let increment = 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex flex-row items-center justify-center"
        >
          Show More
          <IoImageSharp />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[2000px] h-[700px]">
        <DialogHeader>{/* NOTHING  */}</DialogHeader>

        <div>
          <CarouselComp place={place} />
        </div>

        <DialogFooter>{/* NOTHING  */}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
