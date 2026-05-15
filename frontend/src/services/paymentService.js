export const initializeRazorpayPayment = ({
  amount,
  bookingData,
  onSuccess,
}) => {

  const options = {

    key: import.meta.env.VITE_RAZORPAY_KEY,

    amount: amount * 100,

    currency: "INR",

    name: "Yatharth Fitness",

    description: "Lifestyle Coach Event Booking",

    image:
      "https://your-logo-url.com/logo.png",

    handler: function (response) {

      console.log("PAYMENT SUCCESS", response);

      onSuccess(response);

    },

    prefill: {

      name: bookingData.name,

      email: bookingData.email,

      contact: bookingData.phone,

    },

    theme: {
      color: "#2563EB",
    },

  };

  const razorpay = new window.Razorpay(options);

  razorpay.open();
};