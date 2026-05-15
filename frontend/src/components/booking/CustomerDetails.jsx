import { useForm } from "react-hook-form";

import Button from "../common/Button";

const CustomerDetails = ({
  bookingData,
  setBookingData,
  nextStep,
  prevStep,
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({

    defaultValues: {
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
    },

  });

  // SUBMIT

  const onSubmit = (data) => {

    setBookingData({
      ...bookingData,
      ...data,
    });

    nextStep();

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
        Customer Details
      </h2>

      {/* FORM */}

      <form
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="grid md:grid-cols-2 gap-8">

          {/* NAME */}

          <div>

            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                h-14
                rounded-xl
                border
                border-slate-200
                px-5
                outline-none
              "
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (

              <p className="text-red-500 mt-2 text-sm">
                {errors.name.message}
              </p>

            )}

          </div>

          {/* EMAIL */}

          <div>

            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full
                h-14
                rounded-xl
                border
                border-slate-200
                px-5
                outline-none
              "
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                  message:
                    "Enter valid email",
                },
              })}
            />

            {errors.email && (

              <p className="text-red-500 mt-2 text-sm">
                {errors.email.message}
              </p>

            )}

          </div>

          {/* PHONE */}

          <div>

            <input
              type="text"
              placeholder="Phone Number"
              className="
                w-full
                h-14
                rounded-xl
                border
                border-slate-200
                px-5
                outline-none
              "
              {...register("phone", {
                required: "Phone number is required",
              })}
            />

            {errors.phone && (

              <p className="text-red-500 mt-2 text-sm">
                {errors.phone.message}
              </p>

            )}

          </div>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-5 mt-10">

          <Button
            type="button"
            onClick={prevStep}
          >
            Back
          </Button>

          <Button type="submit">
            Continue
          </Button>

        </div>

      </form>

    </div>

  );
};

export default CustomerDetails;