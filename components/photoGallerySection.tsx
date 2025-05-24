"use client";

import React, { useState } from "react";
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
    src: "/images/2.jpg",
    alt: "Tree planting activity",
    caption: "Community tree planting day",
  },
  {
    src: "/images/3.jpg",
    alt: "Wildlife observation",
    caption: "Wildlife observation workshop",
  },
  {
    src: "/images/4.jpg",
    alt: "Forest conservation",
    caption: "Forest conservation project",
  },
  {
    src: "/images/5.jpg",
    alt: "Mountain wildlife",
    caption: "Mountain habitat restoration",
  },
  {
    src: "/images/6.jpg",
    alt: "Marine conservation",
    caption: "Marine wildlife protection",
  },
  {
    src: "/images/7.jpg",
    alt: "Wildlife sanctuary",
    caption: "Wildlife sanctuary tour",
  },
];

const PhotoGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

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
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer h-64"
              onClick={() => openLightbox(index)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill={true}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}>
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-primary">
                Close
              </button>
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill={true}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {galleryImages[selectedImage].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallerySection;
