import Button from "../common/Button";

const tickets = [
  {
    title: "Single Pass",
    price: 2999,
  },

  {
    title: "Couple Pass",
    price: 4999,
  },

  {
    title: "VIP Pass",
    price: 9999,
  },
];

const TicketSelection = ({
  bookingData,
  setBookingData,
  nextStep,
}) => {

  const selectTicket = (ticket) => {

    setBookingData({
      ...bookingData,
      ticketType: ticket.title,
      total: ticket.price,
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

      <h2
        className="
          text-4xl
          font-bold
          text-darkNavy
          mb-10
          text-center
        "
      >
        Select Your Ticket
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {tickets.map((ticket, index) => (

          <div
            key={index}
            onClick={() => selectTicket(ticket)}
            className={`
              border-2
              rounded-[24px]
              p-8
              cursor-pointer
              transition
              ${
                bookingData.ticketType === ticket.title
                  ? "border-primaryBlue"
                  : "border-slate-200"
              }
            `}
          >

            <h3
              className="
                text-2xl
                font-bold
                mb-4
              "
            >
              {ticket.title}
            </h3>

            <p
              className="
                text-5xl
                font-bold
                gradient-text
              "
            >
              ₹{ticket.price}
            </p>

          </div>

        ))}

      </div>

      <div className="mt-10 text-center">

        <Button onClick={nextStep}>
          Continue
        </Button>

      </div>

    </div>
  );
};

export default TicketSelection;