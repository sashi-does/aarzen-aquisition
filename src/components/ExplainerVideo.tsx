import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ExplainerVideo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden m-[15px] rounded-[30px]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Watch How We Work</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn how we generate 50-150+ qualified appointments every month for agency owners, coaches, and consultants
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1042476840?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Aarzen Acquisition"
              ></iframe>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white text-black p-4 rounded-xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" />
              <div>
                <div className="font-bold">50-150+</div>
                <div className="text-sm text-gray-600">Monthly Appointments</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            No payment required if we don't deliver qualified appointments
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplainerVideo;
