import { Button } from "@/components/ui/button";
import { TreeDeciduous, Earth } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <Image
        alt=""
        fill={true}
        priority={true}
        sizes="100vw"
        className="absolute inset-0 object-cover w-full h-full -z-10 opacity-40"
        src="/images/1.jpg"
      />
      <section
        className="hero-gradient min-h-[80vh] flex items-center"
        id="hero">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <TreeDeciduous className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Connecting Corporate Responsibility with Local Wildlife
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ricks Enviromental CIC
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl">
              Rick&apos;s Environmental CIC delivers practical, fun, and
              educational conservation sessions that fulfill your Corporate
              Social Value Responsibilities while making a huge difference to
              local wildlife.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Partner with Us</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2"
                asChild>
                <a href="#services">
                  <Earth className="h-5 w-5" />
                  <span>Our Services</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
