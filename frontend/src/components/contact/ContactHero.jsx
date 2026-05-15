import Container from "../common/Container";

const ContactHero = () => {
  return (
    <section
      className="
        bg-slate-50
        pt-32
        pb-24
      "
    >

      <Container>

        <div className="text-center">

          <p
            className="
              text-primaryGreen
              font-semibold
              uppercase
              tracking-wider
              mb-4
            "
          >
            Contact Us
          </p>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-darkNavy
              leading-tight
              mb-6
            "
          >
            Let’s Connect &
            <span className="gradient-text">
              {" "}Transform
            </span>
          </h1>

          <p
            className="
              text-slate-500
              text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Have questions regarding the event,
            bookings, sponsorships, or collaboration?
            Our team is here to help you.
          </p>

        </div>

      </Container>

    </section>
  );
};

export default ContactHero;