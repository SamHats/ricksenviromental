"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/form/input";
import { Textarea } from "@/components/form/textarea";
import { useToast } from "@/components/ui/toast/toast-context";

const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "first-name"
        ? "firstName"
        : id === "last-name"
        ? "lastName"
        : id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct the form data to be sent
      const emailData = {
        to: "info@ricksenviromental.co.uk",
        subject: `Contact Form: ${formData.firstName} ${formData.lastName} from ${formData.company}`,
        message: `
          Name: ${formData.firstName} ${formData.lastName}
          Company: ${formData.company}
          Email: ${formData.email}
          
          Message: ${formData.message}
        `,
      };

      // Send the form data via an API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      showToast(
        "Message received!",
        "Thank you for reaching out. We'll get back to you shortly.",
        "success"
      );

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      showToast(
        "Failed to send message",
        "Please try again later or contact us directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your CSR goals and how we can help"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-xs mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">info@ricksenvironmental.org</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+44 123 456 7890</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">
                    Nature Conservation Centre
                    <br />
                    123 Wildlife Way
                    <br />
                    Greenfield, GL1 2EO
                  </p>
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
                <a href="mailto:info@ricksenvironmental.org">
                  Request a Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
