import { motion } from "framer-motion";

import {
  FiActivity,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const benefits = [
  {
    icon: <FiActivity />,
    title: "Fitness Mastery",
    description:
      "Learn practical systems to improve health and energy.",
  },

  {
    icon: <FiUsers />,
    title: "Powerful Networking",
    description:
      "Connect with entrepreneurs and growth minded people.",
  },

  {
    icon: <FiTrendingUp />,
    title: "Lifestyle Upgrade",
    description:
      "Build discipline, confidence, and winning habits.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-slate-50">

      <Container>

        <SectionTitle
          center
          subtitle="Why Attend"
          title="Benefits You’ll Experience"
          description="
            This event is designed to completely transform your
            body, mindset, and lifestyle.
          "
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                bg-white
                p-10
                rounded-[30px]
                shadow-card
                border
                border-slate-100
              "
            >

              {/* ICON */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-primaryGradient
                  text-white
                  text-3xl
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                {item.icon}
              </div>

              {/* TITLE */}

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

              {/* DESCRIPTION */}

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

export default BenefitsSection;