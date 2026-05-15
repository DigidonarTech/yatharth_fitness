import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const images = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
];

const EventGallery = () => {
  return (
    <section className="section-padding bg-white">

      <Container>

        <SectionTitle
          center
          subtitle="Gallery"
          title="Experience The Energy"
          description="
            Glimpses from our transformational events and workshops.
          "
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                overflow-hidden
                rounded-[30px]
                shadow-card
              "
            >

              <img
                src={image}
                alt="Event"
                className="
                  w-full
                  h-[350px]
                  object-cover
                "
              />

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default EventGallery;