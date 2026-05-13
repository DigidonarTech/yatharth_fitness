import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

const EventPromoSection = () => {
  return (
    <section className="section-padding bg-white">

      <Container>

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-primaryGradient
            p-10
            lg:p-20
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              top-[-120px]
              right-[-120px]
              w-[350px]
              h-[350px]
              rounded-full
              bg-white/10
              blur-[100px]
            "
          />

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-white/80
                  font-semibold
                  mb-5
                "
              >
                Premium Lifestyle Event
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-white
                  leading-tight
                  mb-6
                "
              >
                Ready To Unlock Your
                Next Level?
              </h2>

              <p
                className="
                  text-white/80
                  text-lg
                  leading-relaxed
                  mb-10
                "
              >
                Join top coaches, entrepreneurs, and
                fitness leaders in one transformational
                experience.
              </p>

              <Button className="bg-white !text-darkNavy">
                Reserve Your Seat
              </Button>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd"
                alt="Promo"
                className="
                  rounded-[30px]
                  h-[450px]
                  w-full
                  object-cover
                  shadow-2xl
                "
              />

            </motion.div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default EventPromoSection;