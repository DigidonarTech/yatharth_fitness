import Button from "../common/Button";

const ReviewBooking = ({
  bookingData,
  nextStep,
  prevStep,
}) => {

  return (
    <div
      className="
        bg-white
        rounded-[30px]
        p-10
        shadow-card
      "
    >

      <h2
        className="
          text-4xl
          font-bold
          text-darkNavy
          mb-10
          text-center
        "
      >
        Review Your Booking
      </h2>

      {/* SUMMARY */}

      <div
        className="
          bg-slate-50
          rounded-[24px]
          p-8
          space-y-6
        "
      >

        {/* TICKET */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            pb-5
          "
        >

          <p className="text-slate-500">
            Ticket Type
          </p>

          <h3
            className="
              text-xl
              font-semibold
              text-darkNavy
            "
          >
            {bookingData.ticketType}
          </h3>

        </div>

        {/* NAME */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            pb-5
          "
        >

          <p className="text-slate-500">
            Full Name
          </p>

          <h3
            className="
              text-xl
              font-semibold
              text-darkNavy
            "
          >
            {bookingData.name}
          </h3>

        </div>

        {/* EMAIL */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            pb-5
          "
        >

          <p className="text-slate-500">
            Email
          </p>

          <h3
            className="
              text-xl
              font-semibold
              text-darkNavy
            "
          >
            {bookingData.email}
          </h3>

        </div>

        {/* PHONE */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            pb-5
          "
        >

          <p className="text-slate-500">
            Phone Number
          </p>

          <h3
            className="
              text-xl
              font-semibold
              text-darkNavy
            "
          >
            {bookingData.phone}
          </h3>

        </div>

        {/* TOTAL */}

        <div
          className="
            flex
            items-center
            justify-between
            pt-4
          "
        >

          <p
            className="
              text-2xl
              font-bold
              text-darkNavy
            "
          >
            Total Amount
          </p>

          <h3
            className="
              text-4xl
              font-bold
              gradient-text
            "
          >
            ₹{bookingData.total}
          </h3>

        </div>

      </div>

      {/* BUTTONS */}

      <div className="flex gap-5 mt-10">

        <Button onClick={prevStep}>
          Back
        </Button>

        <Button onClick={nextStep}>
          Proceed To Payment
        </Button>

      </div>

    </div>
  );
};

export default ReviewBooking;