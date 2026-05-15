import Button from "../common/Button";
import Container from "../common/Container";

const ContactForm = () => {
  return (
    <section className="py-20 bg-slate-50">

      <Container>

        <div
          className="
            bg-white
            rounded-[40px]
            p-10
            md:p-16
            shadow-card
          "
        >

          <div className="text-center mb-14">

            <h2
              className="
                text-4xl
                font-bold
                text-darkNavy
                mb-5
              "
            >
              Send Us A Message
            </h2>

            <p className="text-slate-500">
              Fill out the form and our team
              will contact you shortly.
            </p>

          </div>

          {/* FORM */}

          <form className="space-y-8">

            <div className="grid md:grid-cols-2 gap-8">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  h-14
                  rounded-xl
                  border
                  border-slate-200
                  px-5
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  h-14
                  rounded-xl
                  border
                  border-slate-200
                  px-5
                  outline-none
                "
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="
                w-full
                h-14
                rounded-xl
                border
                border-slate-200
                px-5
                outline-none
              "
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                p-5
                outline-none
              "
            ></textarea>

            <Button>
              Send Message
            </Button>

          </form>

        </div>

      </Container>

    </section>
  );
};

export default ContactForm;