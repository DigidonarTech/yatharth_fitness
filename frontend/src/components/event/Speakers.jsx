import { motion } from "framer-motion";

import {
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const speakers = [
  {
    name: "Yatharth Singh",
    role: "Lifestyle Coach",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  },

  {
    name: "Aman Verma",
    role: "Fitness Mentor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },

  {
    name: "Priya Kapoor",
    role: "Mindset Expert",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

const Speakers = () => {
  return (
    <section className="section-padding bg-slate-50">

      <Container>

        <SectionTitle
          center
          subtitle="Expert Coaches"
          title="Meet The Speakers"
          description="
            Learn directly from top mentors, coaches,
            and transformation experts.
          "
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {speakers.map((speaker, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                bg-white
                rounded-[30px]
                overflow-hidden
                shadow-card
              "
            >

              {/* IMAGE */}

              <div className="relative">

                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="
                    w-full
                    h-[420px]
                    object-cover
                  "
                />

                {/* SOCIALS */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    gap-3
                  "
                >

                  <button
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      text-xl
                      shadow-lg
                    "
                  >
                    <FiInstagram />
                  </button>

                  <button
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      text-xl
                      shadow-lg
                    "
                  >
                    <FiLinkedin />
                  </button>

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8 text-center">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-darkNavy
                    mb-2
                  "
                >
                  {speaker.name}
                </h3>

                <p className="text-primaryGreen font-medium">
                  {speaker.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Speakers;