"use client";

import { GalleryHorizontal } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const galleryImages = [
  {
    src: "/32_h4hrxl",
    alt: "Conservation activity",
    caption: "Practical conservation sessions",
  },
  {
    src: "/1_xw2ks4",
    alt: "Group of volunteers",
    caption: "Nature Education (all ages)",
  },
  {
    src: "/35_wqpeul",
    alt: "Man planting a plant",
    caption: "Planting schemes",
  },
  {
    src: "/57_u5tjsw",
    alt: "Meadow",
    caption: "Meadow creation",
  },
  {
    src: "/4_eoc8ez",
    alt: "Men digging a tree",
    caption: "Woodland management",
  },
  {
    src: "/39_iyqayf",
    alt: "Group of people exercising",
    caption: "Outdoor fitness sessions",
  },
  {
    src: "/45_wadwcp",
    alt: "Path through a woodland",
    caption: "Builds and open space enhancements",
  },
  {
    src: "/2_mendzn",
    alt: "Man next to a tree with bat boxes",
    caption: "Bat and nest box installs",
  },
  {
    src: "/19_tfeqjj",
    alt: "Two people working on a tree",
    caption: "Junior engagement",
  },
  {
    src: "/50_ajlzhs",
    alt: "Man providing a presentation",
    caption: "Presentations and guest speaking",
  },
  {
    src: "/55_uvffve",
    alt: "Collection of litter",
    caption: "Litter and harmful waste removal",
  },
];

const PhotoGallerySection: React.FC = () => {
  return (
    <section className="py-16 bg-accent" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GalleryHorizontal className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Activities Gallery
            </h2>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our range of conservation activities and see how your
            organization can make a difference.
          </p>
        </div>

        {/* Gallery Grid for larger screens */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.src + index}
              className="relative overflow-hidden rounded-lg shadow-md group h-64">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 w-full text-white bg-black/50">
                  <p className="font-medium text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for mobile screens */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1">
                  <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill={true}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 p-3">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
