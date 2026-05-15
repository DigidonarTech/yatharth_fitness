import Container from "../common/Container";

const faqs = [
  {
    question: "How can I book event tickets?",
    answer:
      "You can easily book your tickets from the booking page.",
  },

  {
    question: "Will I receive confirmation email?",
    answer:
      "Yes, after successful payment you will receive invoice and confirmation.",
  },

  {
    question: "Can I cancel my booking?",
    answer:
      "Cancellation policy depends on the event guidelines.",
  },
];

const ContactFAQ = () => {
  return (
    <section className="py-20 bg-slate-50">

      <Container>

        <div className="text-center mb-14">

          <h2
            className="
              text-4xl
              font-bold
              text-darkNavy
              mb-5
            "
          >
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-6 max-w-4xl mx-auto">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[24px]
                p-8
                shadow-card
              "
            >

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-darkNavy
                  mb-3
                "
              >
                {faq.question}
              </h3>

              <p className="text-slate-500">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default ContactFAQ;