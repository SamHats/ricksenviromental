import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flower, Bird, Mountain } from "lucide-react";

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 bg-accent" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Rick&apos;s Environmental Community Interest Company was established
            to bridge the gap between corporate responsibility and meaningful
            environmental conservation at the local level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Flower className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Impact</h3>
              <p className="text-gray-700">
                We provide enriching conservation education that raises
                awareness and develops practical skills for participants of all
                ages.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Bird className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Wildlife Protection
              </h3>
              <p className="text-gray-700">
                Our projects directly contribute to the protection and
                enhancement of local habitats that support native wildlife
                species.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Mountain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p className="text-gray-700">
                We foster connections between businesses, employees, and their
                local environment, building stronger community bonds.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
