import React from "react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    label: "Email",
    value: "info@ricksenvironmental.org",
  },
  {
    label: "Phone",
    value: "+44 7793 891103",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-accent" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to fulfill your corporate social responsibility while making a
            meaningful impact on local wildlife? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            {contactDetails.map((detail) => (
              <div key={detail.label} className="mb-4">
                <p className="text-sm text-gray-500">{detail.label}</p>
                <p className="font-medium">{detail.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Start Your Journey</h3>
            <p className="text-gray-700 mb-4">
              Looking for a customized conservation program for your team?
              Schedule a free consultation with our experts.
            </p>
            <Button variant="secondary" asChild>
              <a href="mailto:info@ricksenvironmental.org">
                Request a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
