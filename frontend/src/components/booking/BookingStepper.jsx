const steps = [
  "Ticket",
  "Details",
  "Review",
  "Payment",
  "Success",
];

const BookingStepper = ({ step }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        mb-16
        overflow-x-auto
        gap-5
      "
    >

      {steps.map((item, index) => (

        <div
          key={index}
          className="
            flex
            flex-col
            items-center
            min-w-[90px]
          "
        >

          {/* CIRCLE */}

          <div
            className={`
              w-14
              h-14
              rounded-full
              flex
              items-center
              justify-center
              font-bold
              text-lg
              mb-3
              ${
                step >= index + 1
                  ? "bg-primaryGradient text-white"
                  : "bg-slate-200 text-slate-500"
              }
            `}
          >
            {index + 1}
          </div>

          {/* LABEL */}

          <p
            className={`
              text-sm
              font-medium
              ${
                step >= index + 1
                  ? "text-darkNavy"
                  : "text-slate-400"
              }
            `}
          >
            {item}
          </p>

        </div>

      ))}

    </div>
  );
};

export default BookingStepper;