import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Big Ben, London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    price: "$749",
    duration: "7 days"
  },
  {
    id: 2,
    name: "Eiffel Tower, Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: "$899",
    duration: "5 days"
  },
  {
    id: 3,
    name: "Colosseum, Rome",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    price: "$799",
    duration: "6 days"
  },
  {
    id: 4,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    price: "$999",
    duration: "8 days"
  },
  {
    id: 5,
    name: "Amsterdam, Netherlands",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
    price: "$699",
    duration: "5 days"
  },
  {
    id: 6,
    name: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    price: "$699",
    duration: "6 days"
  }
];

export default function OurDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of top destinations around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#2C6FBB] font-semibold">
                        {destination.price}
                      </span>
                      <span className="text-gray-600">
                        {destination.duration}
                      </span>
                    </div>
                    <Button className="w-full bg-[#6EC1E4] hover:bg-[#2C6FBB]">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
