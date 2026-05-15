import { useState } from "react";

import MainLayout from "../layouts/MainLayout";

import BookingStepper from "../components/booking/BookingStepper";
import TicketSelection from "../components/booking/TicketSelection";
import CustomerDetails from "../components/booking/CustomerDetails";
import ReviewBooking from "../components/booking/ReviewBooking";
import PaymentSection from "../components/booking/PaymentSection";
import BookingSuccess from "../components/booking/BookingSuccess";
import { useBooking } from "../context/BookingContext";

const BookingPage = () => {

  const [step, setStep] = useState(1);
  const { bookingData, setBookingData } = useBooking();
  // const [bookingData, setBookingData] = useState({
  //   ticketType: "",
  //   quantity: 1,

  //   name: "",
  //   email: "",
  //   phone: "",

  //   total: 0,
  // });

  // NEXT STEP

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // PREVIOUS STEP

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (

    <MainLayout>

      <section
        className="
          min-h-screen
          bg-slate-50
          py-20
        "
      >

        <div className="max-w-6xl mx-auto px-5">

          {/* PAGE TITLE */}

          <div className="text-center mb-16">

            <h1
              className="
                text-5xl
                font-bold
                text-darkNavy
                mb-5
              "
            >
              Event Booking
            </h1>

            <p
              className="
                text-slate-500
                text-lg
                max-w-2xl
                mx-auto
              "
            >
              Complete your booking in a few simple steps
              and reserve your seat now.
            </p>

          </div>

          {/* STEPPER */}

          <BookingStepper step={step} />

          {/* STEP CONTENT */}

          {step === 1 && (

            <TicketSelection
              bookingData={bookingData}
              setBookingData={setBookingData}
              nextStep={nextStep}
            />

          )}

          {step === 2 && (

            <CustomerDetails
              bookingData={bookingData}
              setBookingData={setBookingData}
              nextStep={nextStep}
              prevStep={prevStep}
            />

          )}

          {step === 3 && (

            <ReviewBooking
              bookingData={bookingData}
              nextStep={nextStep}
              prevStep={prevStep}
            />

          )}

          {step === 4 && (

            <PaymentSection
              bookingData={bookingData}
              nextStep={nextStep}
              prevStep={prevStep}
            />

          )}

          {step === 5 && (
            <BookingSuccess />
          )}

        </div>

      </section>

    </MainLayout>

  );
};

export default BookingPage;