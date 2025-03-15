import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')] bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <Button 
            size="lg"
            className="bg-[#6EC1E4] hover:bg-[#2C6FBB] text-white transition-colors duration-300"
          >
            Find out more
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
