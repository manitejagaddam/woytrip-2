import { motion } from "framer-motion";
import { Shield, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "24/7 Doctor Support",
    description: "Instant medical help for minor health issues."
  },
  {
    icon: Heart,
    title: "Trip Vedio",
    description: "Capture memories with a short trip highlight video."
  },
  {
    icon: Star,
    title: "Best Stay Guarantee",
    description: "Handpicked stays for easy exploration."
  },
  {
    icon: Star,
    title: "Affordable Prices",
    description: "Premium trips at budget-friendly rates."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
              alt="Travelers enjoying their journey"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mb-8">
            Enjoy different experiences in every place you visit and discover new and affordable adventures of course.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#6EC1E4] p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
