import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import Container from "../common/Container";

const cards = [
  {
    icon: <FiPhone />,
    title: "Phone Number",
    value: "+91 98765 43210",
  },

  {
    icon: <FiMail />,
    title: "Email Address",
    value: "support@yatharthfitness.com",
  },

  {
    icon: <FiMapPin />,
    title: "Office Address",
    value: "Mumbai, Maharashtra, India",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">

      <Container>

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => (

            <div
              key={index}
              className="
                bg-slate-50
                rounded-[30px]
                p-10
                text-center
                shadow-card
              "
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-primaryGradient
                  text-white
                  flex
                  items-center
                  justify-center
                  text-4xl
                  mx-auto
                  mb-6
                "
              >
                {card.icon}
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-darkNavy
                  mb-4
                "
              >
                {card.title}
              </h3>

              <p className="text-slate-500">
                {card.value}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default ContactInfo;