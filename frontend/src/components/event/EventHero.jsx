import { motion } from "framer-motion";

import {
  FiCalendar,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";

const EventHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#0D1B2A]
        via-[#102A43]
        to-[#2563EB]
        min-h-screen
        flex
        items-center
      "
    >

      {/* GLOW */}

      <div
        className="
          absolute
          top-[-120px]
          right-[-100px]
          w-[450px]
          h-[450px]
          bg-cyan-400/20
          blur-[120px]
          rounded-full
        "
      />

      <Container>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-primaryGreen
                font-semibold
                mb-5
              "
            >
              Lifestyle Coach Mega Event
            </p>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                text-white
                leading-tight
                mb-8
              "
            >
              Unlock Your <br />

              <span className="gradient-text">
                Best Version
              </span>
            </h1>

            <p
              className="
                text-slate-300
                text-lg
                leading-relaxed
                max-w-xl
                mb-10
              "
            >
              Join India’s most impactful lifestyle,
              mindset, and fitness transformation event
              with elite mentors and entrepreneurs.
            </p>

            {/* INFO */}

            <div className="flex flex-wrap gap-6 mb-10">

              <div className="flex items-center gap-3 text-white">

                <FiCalendar className="text-primaryGreen text-2xl" />

                <span>30 Dec 2026</span>

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiMapPin className="text-primaryOrange text-2xl" />

                <span>Mumbai, India</span>

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiUsers className="text-cyan-400 text-2xl" />

                <span>500+ Attendees</span>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5">

              <Button>
                Book Your Seat
              </Button>

              <button
                className="
                  px-7
                  py-3
                  rounded-xl
                  border
                  border-white/20
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                Explore Schedule
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div
              className="
                relative
                rounded-[40px]
                overflow-hidden
                shadow-2xl
              "
            >

              <img
                src="https://images.unsplash.com/photo-1518611012118-fb0f16d1f0b7"
                alt="Event"
                className="
                  w-full
                  h-[650px]
                  object-cover
                "
              />

              {/* FLOATING CARD */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  glass-effect
                  rounded-[24px]
                  p-6
                "
              >

                <h3 className="text-white text-2xl font-bold mb-2">
                  Early Bird Registration Open
                </h3>

                <p className="text-white/80">
                  Limited premium seats available.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default EventHero;