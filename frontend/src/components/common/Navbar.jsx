import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FiMenu } from "react-icons/fi";

import Container from "./Container";
import Button from "./Button";


const Navbar = () => {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-lg
        bg-white/10
        border-b
        border-white/10
      "
    >
      <Container>

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}

          <Link to="/">
            <motion.h1
              whileHover={{ scale: 1.03 }}
              className="
                text-3xl
                font-bold
                text-white
                font-sora
              "
            >
              YF
            </motion.h1>
          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-10">

            <Link
              to="/"
              className="text-white hover:text-primaryGreen transition"
            >
              Home
            </Link>

            <Link
              to="/event"
              className="text-white hover:text-primaryGreen transition"
            >
              Event
            </Link>

            <Link
              to="/booking"
              className="text-white hover:text-primaryGreen transition"
            >
              Booking
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-primaryGreen transition"
            >
              Contact
            </Link>

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">
            <Button>
              Book Seat
            </Button>
          </div>

          {/* MOBILE ICON */}

          <button className="lg:hidden text-white text-3xl">
            <FiMenu />
          </button>

        </div>

      </Container>
    </header>
  );
};

export default Navbar;