import Container from "../common/Container";

const ContactMap = () => {
  return (
    <section className="py-20 bg-white">

      <Container>

        <div
          className="
            overflow-hidden
            rounded-[40px]
            shadow-card
          "
        >

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          ></iframe>

        </div>

      </Container>

    </section>
  );
};

export default ContactMap;