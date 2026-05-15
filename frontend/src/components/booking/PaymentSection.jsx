import {
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

import Button from "../common/Button";

import {
  initializeRazorpayPayment,
} from "../../services/paymentService";

const PaymentSection = ({
  bookingData,
  nextStep,
  prevStep,
}) => {

  // HANDLE PAYMENT

  const handlePayment = async () => {

    initializeRazorpayPayment({

      amount: bookingData.total,

      bookingData,

      onSuccess: (response) => {

        console.log(response);

        nextStep();

      },

    });

  };

  return (

    <div
      className="
        bg-white
        rounded-[30px]
        p-10
        shadow-card
      "
    >

      {/* TITLE */}

      <h2
        className="
          text-4xl
          font-bold
          text-darkNavy
          mb-10
          text-center
        "
      >
        Secure Payment
      </h2>

      {/* CARD */}

      <div
        className="
          bg-slate-50
          rounded-[30px]
          p-10
        "
      >

        {/* ICON */}

        <div
          className="
            w-24
            h-24
            rounded-full
            bg-primaryGradient
            text-white
            text-5xl
            flex
            items-center
            justify-center
            mx-auto
            mb-8
          "
        >
          <FiCreditCard />
        </div>

        {/* TEXT */}

        <h3
          className="
            text-3xl
            font-bold
            text-darkNavy
            text-center
            mb-4
          "
        >
          Complete Your Payment
        </h3>

        <p
          className="
            text-slate-500
            text-center
            max-w-2xl
            mx-auto
            leading-relaxed
            mb-10
          "
        >
          Securely pay and reserve your seat
          instantly for the transformation event.
        </p>

        {/* TOTAL */}

        <div
          className="
            bg-white
            rounded-[24px]
            p-8
            flex
            items-center
            justify-between
            mb-10
          "
        >

          <div>

            <p className="text-slate-500 mb-2">
              Total Payable
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

          <FiShield
            className="
              text-5xl
              text-primaryGreen
            "
          />

        </div>

        {/* METHODS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">

          {[
            "UPI",
            "Card",
            "Net Banking",
            "Wallet",
          ].map((method, index) => (

            <div
              key={index}
              className="
                bg-white
                h-20
                rounded-2xl
                flex
                items-center
                justify-center
                font-semibold
                text-darkNavy
              "
            >
              {method}
            </div>

          ))}

        </div>

        {/* BUTTONS */}

        <div className="flex gap-5">

          <Button
            onClick={prevStep}
          >
            Back
          </Button>

          <Button
            onClick={handlePayment}
          >
            Pay Now
          </Button>

        </div>

      </div>

    </div>

  );
};

export default PaymentSection;