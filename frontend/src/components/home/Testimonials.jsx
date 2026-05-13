import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Entrepreneur",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",

    review:
      "This event completely changed my mindset and discipline.",
  },

  {
    name: "Priya Verma",
    role: "Fitness Coach",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",

    review:
      "One of the best lifestyle transformation experiences.",
  },

  {
    name: "Aman Khanna",
    role: "Business Owner",
    image:
      "https://randomuser.me/api/portraits/men/41.jpg",

    review:
      "The networking and coaching sessions were amazing.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white">

      <Container>

        <SectionTitle
          center
          subtitle="Testimonials"
          title="What People Say"
          description="
            Hear from participants who transformed their lifestyle and mindset.
          "
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                bg-slate-50
                rounded-[30px]
                p-10
                shadow-card
              "
            >

              <div className="flex items-center gap-4 mb-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-16
                    h-16
                    rounded-full
                    object-cover
                  "
                />

                <div>

                  <h3 className="font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-slate-500">
                    {item.role}
                  </p>

                </div>

              </div>

              <p
                className="
                  text-slate-600
                  leading-relaxed
                  text-lg
                "
              >
                “{item.review}”
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default TestimonialsSection;