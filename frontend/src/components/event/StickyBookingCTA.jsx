import { useState } from "react";
import { Link } from "react-router-dom";

import { FiX } from "react-icons/fi";

import Button from "../common/Button";

const StickyBookingCTA = () => {

  const [showCTA, setShowCTA] = useState(true);

  if (!showCTA) return null;

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        w-full
        z-50
        bg-white/90
        backdrop-blur-lg
        border-t
        border-slate-200
        py-4
        px-5
        shadow-2xl
      "
    >

      {/* CLOSE BUTTON */}

      <button
        onClick={() => setShowCTA(false)}
        className="
          absolute
          top-3
          right-3
          w-9
          h-9
          rounded-full
          bg-slate-100
          hover:bg-slate-200
          flex
          items-center
          justify-center
          transition
        "
      >
        <FiX className="text-lg text-darkNavy" />
      </button>

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        "
      >

        {/* LEFT */}

        <div>

          <h3
            className="
              text-xl
              md:text-2xl
              font-bold
              text-darkNavy
            "
          >
            Lifestyle Coach Event 2026
          </h3>

          <p className="text-slate-500">
            Limited seats available
          </p>

        </div>

        {/* BUTTON */}

        <Link to="/booking">
          <Button>
            Book Tickets
          </Button>
        </Link>

      </div>

    </div>
  );
};

export default StickyBookingCTA;