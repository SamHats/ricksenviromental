import React from "react";
import { Trees, Tent, TreePine } from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Conservation Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We deliver practical, fun, and educational conservation sessions
            tailored to your organization&apos;s goals and values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80')] bg-center bg-cover"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Trees className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Habitat Restoration</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Team building through practical conservation work including tree
                planting, pond creation, and wildlife garden development.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Native planting workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Habitat construction projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Ecological surveys</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="service-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80')] bg-center bg-cover"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <TreePine className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Wildlife Workshops</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Educational and interactive sessions focused on local wildlife
                species, their habitats, and conservation needs.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Species identification training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Wildlife monitoring programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Conservation photography</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="service-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80')] bg-center bg-cover"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Tent className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Corporate Retreats</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Immersive nature-based experiences that combine team building
                with meaningful conservation action.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Guided nature experiences</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Conservation challenges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Sustainability workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
