import * as React from "react";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Place {
  photos?: string[];
}

interface CarouselCompProps {
  place: Place;
  // setShowAllPhotos: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CarouselComp({
  place,
}: // setShowAllPhotos,
CarouselCompProps) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="p-0">
        {place.photos?.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card className="border-0 shadow-transparent rounded-none">
                <CardContent className="p-0 flex aspect-rectangle object-cover border-0 shadow-transparent w-full h-full items-center justify-center ">
                  <img
                    // onClick={() => setShowAllPhotos(true)}
                    className="cursor-pointer  object-cover "
                    src={
                      "http://localhost:4000/uploads/" + place.photos?.[index]
                    }
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
