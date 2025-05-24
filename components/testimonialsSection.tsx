import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Rick's Environmental helped us fulfill our CSR goals while providing our team with an unforgettable experience. The habitat restoration project boosted team morale and created a lasting impact in our local community.",
      author: "Sarah Johnson",
      position: "HR Director, TechWave Solutions",
    },
    {
      quote:
        "The wildlife workshop was both educational and inspiring. Our staff gained a deeper appreciation for local conservation needs, and we've since implemented several sustainability initiatives as a direct result.",
      author: "Michael Chen",
      position: "CEO, GreenPath Innovations",
    },
    {
      quote:
        "The corporate retreat facilitated by Rick's team was the perfect blend of team building and environmental action. The experience strengthened our team bonds while making a tangible difference to local wildlife.",
      author: "Emma Williams",
      position: "Team Lead, EcoSphere Consulting",
    },
  ];

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how organizations like yours have benefited from our
            conservation partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent className="p-6">
                <svg
                  className="h-8 w-8 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 bg-accent rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-700">Corporate partners engaged in conservation</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">2,500</h3>
              <p className="text-gray-700">Native trees and plants established</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">15</h3>
              <p className="text-gray-700">Local wildlife habitats restored</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
