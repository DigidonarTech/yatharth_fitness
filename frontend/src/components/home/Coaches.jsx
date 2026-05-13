import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const coaches = [
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

const CoachesSection = () => {
  return (
    <section className="section-padding bg-white">

      <Container>

        <SectionTitle
          center
          subtitle="Expert Coaches"
          title="Meet Our Mentors"
          description="
            Learn directly from industry leaders and transformation experts.
          "
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {coaches.map((coach, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                rounded-[30px]
                overflow-hidden
                shadow-card
                bg-white
              "
            >

              <img
                src={coach.image}
                alt={coach.name}
                className="
                  w-full
                  h-[400px]
                  object-cover
                "
              />

              <div className="p-8">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-darkNavy
                    mb-2
                  "
                >
                  {coach.name}
                </h3>

                <p className="text-primaryGreen font-medium">
                  {coach.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default CoachesSection;