import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">

      <Container>

        <SectionTitle
          center
          subtitle="About Event"
          title="India’s Most Powerful Lifestyle Transformation Event"
          description="
            Discover fitness, mindset, leadership, and personal growth
            strategies from top coaches and industry leaders.
          "
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
              alt="Event"
              className="
                rounded-[30px]
                shadow-card
                w-full
                h-[500px]
                object-cover
              "
            />

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h3
              className="
                text-3xl
                font-bold
                text-darkNavy
                mb-6
              "
            >
              Upgrade Your Mindset & Lifestyle
            </h3>

            <p
              className="
                text-slate-600
                text-lg
                leading-relaxed
                mb-6
              "
            >
              This event is specially designed for entrepreneurs,
              fitness enthusiasts, creators, and professionals
              who want to unlock their next level.
            </p>

            <div className="space-y-5">

              <div className="flex gap-4">
                <div className="w-4 h-4 rounded-full bg-primaryGreen mt-2" />

                <p className="text-slate-700">
                  Live coaching & transformation sessions
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-4 h-4 rounded-full bg-primaryOrange mt-2" />

                <p className="text-slate-700">
                  Fitness & lifestyle growth blueprint
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-4 h-4 rounded-full bg-primaryBlue mt-2" />

                <p className="text-slate-700">
                  Networking with top achievers
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default AboutSection;