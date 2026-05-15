import {
  FiCheckCircle,
} from "react-icons/fi";

import Button from "../common/Button";

const BookingSuccess = () => {
  return (
    <div
      className="
        bg-white
        rounded-[30px]
        p-10
        shadow-card
        text-center
      "
    >

      {/* ICON */}

      <div
        className="
          w-32
          h-32
          rounded-full
          bg-primaryGradient
          flex
          items-center
          justify-center
          text-white
          text-6xl
          mx-auto
          mb-10
        "
      >
        <FiCheckCircle />
      </div>

      {/* TITLE */}

      <h2
        className="
          text-5xl
          font-bold
          text-darkNavy
          mb-6
        "
      >
        Booking Confirmed 🎉
      </h2>

      {/* DESC */}

      <p
        className="
          text-slate-500
          text-lg
          leading-relaxed
          max-w-2xl
          mx-auto
          mb-10
        "
      >
        Your ticket has been successfully booked.
        Confirmation mail and invoice will be
        sent to your registered email address.
      </p>

      {/* TICKET INFO */}

      <div
        className="
          bg-slate-50
          rounded-[24px]
          p-8
          max-w-2xl
          mx-auto
          mb-10
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            mb-5
          "
        >

          <p className="text-slate-500">
            Booking ID
          </p>

          <h3
            className="
              font-bold
              text-darkNavy
            "
          >
            EVT2026-87452
          </h3>

        </div>

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <p className="text-slate-500">
            Event Date
          </p>

          <h3
            className="
              font-bold
              text-darkNavy
            "
          >
            30 Dec 2026
          </h3>

        </div>

      </div>

      {/* BUTTONS */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-5
        "
      >

        <Button>
          Download Invoice
        </Button>

        <Button className="!bg-slate-900">
          Go To Home
        </Button>

      </div>

    </div>
  );
};

export default BookingSuccess;