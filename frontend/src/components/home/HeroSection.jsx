import { motion } from "framer-motion";

import Button from "../common/Button";
import Container from "../common/Container";

const HeroSection = () => {
  return (
    <section
      className="
        min-h-screen
        bg-darkNavy
        flex
        items-center
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-[-150px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-primaryBlue/30
          blur-[120px]
          rounded-full
        "
      />

      <Container>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p
              className="
                text-primaryGreen
                font-semibold
                uppercase
                tracking-widest
                mb-5
              "
            >
              Lifestyle Coach Event 2026
            </p>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                leading-tight
                text-white
                mb-6
              "
            >
              Transform <br />

              <span className="gradient-text">
                Yourself
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
              Join India’s most transformative
              fitness and lifestyle coaching event.
              Learn from top mentors and elevate
              your mindset, fitness, and business.
            </p>

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
                Explore Event
              </button>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div
              className="
                card-style
                overflow-hidden
                p-3
                bg-white/10
                backdrop-blur-xl
              "
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                alt="Fitness"
                className="
                  w-full
                  h-[550px]
                  object-cover
                  rounded-2xl
                "
              />
            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default HeroSection;