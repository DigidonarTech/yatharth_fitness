import { motion } from "framer-motion";

import {
  FiActivity,
  FiTrendingUp,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const benefits = [
  {
    icon: <FiActivity />,
    title: "Fitness Growth",
    description:
      "Learn sustainable fitness systems from industry experts.",
  },

  {
    icon: <FiTrendingUp />,
    title: "Business Mindset",
    description:
      "Upgrade your mindset and unlock new opportunities.",
  },

  {
    icon: <FiUsers />,
    title: "Networking",
    description:
      "Connect with entrepreneurs and transformation leaders.",
  },

  {
    icon: <FiTarget />,
    title: "Goal Execution",
    description:
      "Build discipline and practical action strategies.",
  },
];

const EventBenefits = () => {
  return (
    <section className="section-padding bg-white">

      <Container>

        <SectionTitle
          center
          subtitle="Why Attend"
          title="Transform Every Area Of Your Life"
          description="
            This event is designed to help you improve your
            health, business, confidence, and mindset.
          "
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                bg-slate-50
                rounded-[30px]
                p-8
                shadow-card
                text-center
              "
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-primaryGradient
                  text-white
                  flex
                  items-center
                  justify-center
                  text-4xl
                  mx-auto
                  mb-6
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-darkNavy
                  mb-4
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-slate-500
                  leading-relaxed
                "
              >
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default EventBenefits;