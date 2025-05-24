import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white" id="services">
      <div
        aria-hidden="true"
        className="relative h-56 w-full -mb-8 overflow-hidden">
        <Image
          alt="Background nature image"
          fill={true}
          sizes="100vw"
          className="object-cover object-center"
          priority
          src="/images/6.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Conservation Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We deliver practical, fun, and educational conservation sessions
            tailored to your organization&apos;s goals and values.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fully Guided Conservation Volunteer Sessions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete conservation experiences with all equipment provided,
                led by experienced guides who ensure meaningful environmental
                impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Nature Education and Heritage Walks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fully guided walks exploring local nature and heritage,
                connecting people with their environment and local history.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Presentations and Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Remote or in-person presentations, guest speaking and classroom
                learning sessions tailored to your audience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Nature Engagement Activities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive nature activities designed for all ages and
                abilities to connect with the natural world through hands-on
                experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Outdoor Fitness and Team Building
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Combine fitness with nature through outdoor activities that
                build teams and promote wellbeing in natural settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wildlife Surveys and Assessments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional wildlife surveys and habitat condition assessments
                with comprehensive reports available for your organization.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Youth Engagement and Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized programs designed to engage young people with nature
                and conservation education, fostering environmental stewardship
                for the next generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
