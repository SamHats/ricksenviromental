import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const contactDetails = [
  {
    label: "Email",
    value: "info@ricksenvironmental.co.uk",
    link: "mailto:info@ricksenvironmental.co.uk",
  },
  {
    label: "Phone",
    value: "+44 77938 91103",
    link: "tel:+447793891103",
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
                <p className="font-medium">
                  <a href={detail.link}>{detail.value}</a>
                </p>
              </div>
            ))}

            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Connect With Us</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/company/ricks-enviromental-cic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center">
                  <Linkedin className="mr-2" size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/ricksenviromentalcic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center">
                  <Instagram className="mr-2" size={16} />
                  Instagram (@ricksenviromentalcic)
                </a>
                <a
                  href="https://www.facebook.com/share/16ds6vCBow/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center">
                  <Facebook className="mr-2" size={16} />
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Start Your Journey</h3>
            <p className="text-gray-700 mb-4">
              Looking for a customized conservation program for your team?
              Schedule a free consultation with our experts.
            </p>
            <Button variant="secondary" asChild>
              <a href="mailto:info@ricksenvironmental.co.uk">
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
