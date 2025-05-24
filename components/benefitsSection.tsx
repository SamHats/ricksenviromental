import React from "react";
import { CheckCircle, Award, Users, Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection: React.FC = () => {
  return (
    <section
      className="py-16 bg-linear-to-b from-accent to-white"
      id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Corporate Benefits
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Partnering with Rick&apos;s Environmental provides meaningful
            advantages for your organization beyond just fulfilling CSR
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-1">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    CSR Fulfillment
                  </h3>
                  <p className="text-gray-700">
                    Our programs directly address corporate social
                    responsibility goals with measurable environmental impact.
                    We provide detailed reports documenting your
                    organization&apos;s contribution.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-1">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Brand Enhancement
                  </h3>
                  <p className="text-gray-700">
                    Strengthen your brand&apos;s reputation as environmentally
                    responsible while creating genuine positive impact stories
                    to share with customers and stakeholders.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-1">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Building</h3>
                  <p className="text-gray-700">
                    Our hands-on conservation activities foster teamwork,
                    communication, and shared purpose among employees while
                    developing new skills in a refreshing outdoor environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-1">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Smile className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Employee Wellbeing
                  </h3>
                  <p className="text-gray-700">
                    Nature-based activities improve mental health, reduce
                    stress, and increase job satisfaction, leading to higher
                    retention rates and productivity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
