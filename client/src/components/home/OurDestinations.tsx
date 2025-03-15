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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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




// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { MapPinIcon } from "lucide-react";

// const destinations = [
//   {
//     id: 1,
//     name: "Big Ben, London",
//     location: "London, UK",
//     image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
//     price: "$749",
//     duration: "7 days",
//     features: [
//       { name: "Video", icon: "/images/video_icon.png" },
//       { name: "Meals", icon: "/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "/images/stay.png" },
//       { name: "Sightseeing", icon: "/images/sightseeing.png" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Eiffel Tower, Paris",
//     location: "Paris, France",
//     image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
//     price: "$899",
//     duration: "5 days",
//     features: [
//       { name: "Video", icon: "/images/video_icon.png" },
//       { name: "Meals", icon: "/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "/images/stay.png" },
//       { name: "Sightseeing", icon: "/images/sightseeing.png" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Colosseum, Rome",
//     location: "Rome, Italy",
//     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
//     price: "$799",
//     duration: "6 days",
//     features: [
//       { name: "Video", icon: "/images/video_icon.png" },
//       { name: "Meals", icon: "/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "/images/stay.png" },
//       { name: "Sightseeing", icon: "/images/sightseeing.png" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Colosseum, Rome",
//     location: "Rome, Italy",
//     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
//     price: "$799",
//     duration: "6 days",
//     features: [
//       { name: "Video", icon: "/images/video_icon.png" },
//       { name: "Meals", icon: "/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "/images/stay.png" },
//       { name: "Sightseeing", icon: "/images/sightseeing.png" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Colosseum, Rome",
//     location: "Rome, Italy",
//     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
//     price: "$799",
//     duration: "6 days",
//     features: [
//       { name: "Video", icon: "/images/video_icon.png" },
//       { name: "Meals", icon: "/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "/images/stay.png" },
//       { name: "Sightseeing", icon: "/images/sightseeing.png" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Colosseum, Rome",
//     location: "Rome, Italy",
//     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
//     price: "$799",
//     duration: "6 days",
//     features: [
//       { name: "Video", icon: "/images/video_icon.png" },
//       { name: "Meals", icon: "/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "/images/stay.png" },
//       { name: "Sightseeing", icon: "/images/sightseeing.png" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Colosseum, Rome",
//     location: "Rome, Italy",
//     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
//     price: "$799",
//     duration: "6 days",
//     features: [
//       { name: "Video", icon: "/images/video_icon.png" },
//       { name: "Meals", icon: "/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "/images/stay.png" },
//       { name: "Sightseeing", icon: "/images/sightseeing.png" },
//     ],
//   },
// ];

// export default function OurDestinations() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Destinations
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Explore our carefully curated selection of top destinations around the world
//           </p>
//         </div>

//         {/* Destination Cards */}
//         <motion.div 
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
//           }}
//         >
//           {destinations.map((destination) => (
//             <motion.div key={destination.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
//               <div className="relative rounded-lg shadow-lg object-cover overflow-hidden w-full">
//                 {/* Background Image */}
//                 <div
//                   className="w-full h-[650px] bg-cover bg-center"
//                   style={{ backgroundImage: `url(${destination.image})` }}
//                 >
//                   {/* Card Overlay */}
//                   <Card className="absolute bottom-0 w-full rounded-t-3xl bg-white shadow-lg">
//                     <CardContent className="p-4">
//                       {/* Title & Location */}
//                       <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
//                       <div className="flex items-center mt-1 text-gray-600">
//                         <MapPinIcon className="w-5 h-5 text-blue-600" />
//                         <span className="ml-2 text-lg">{destination.location}</span>
//                       </div>

//                       <Separator className="my-4" />

//                       {/* Features Section */}
//                       <div className="flex justify-center gap-6">
//                         {destination.features.map((feature, featureIndex) => (
//                           <div key={featureIndex} className="flex flex-col items-center">
//                             <img src={feature.icon} alt={feature.name} className="w-10 h-10" />
//                             <span className="text-xs font-medium mt-1">{feature.name}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Pricing & Duration */}
//                       <div className="flex justify-between items-center mt-4">
//                         <span className="text-[#2C6FBB] font-semibold text-lg">{destination.price}</span>
//                         <span className="text-gray-600">{destination.duration}</span>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex justify-between mt-6">
//                         <Button variant="outline" className="w-full text-blue-600 border-blue-600">
//                           Call Expert
//                         </Button>
//                         <Button className="w-full bg-blue-600 text-white ml-3">Get Quote</Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
