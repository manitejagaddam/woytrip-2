import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "Rome",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    rating: 4.8,
    price: "₹79999"
  },
  {
    id: 2,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rating: 4.9,
    price: "₹89999"
  },
  {
    id: 3,
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    rating: 4.7,
    price: "₹74999"
  },
  {
    id: 4,
    name: "Barcelona",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    rating: 4.6,
    price: "₹69999"
  }
];

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after destinations, loved by travelers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white">
                        {destination.name}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-white">⭐ {destination.rating}</span>
                        <span className="text-white font-semibold">
                          {destination.price}
                        </span>
                      </div>
                    </div>
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
