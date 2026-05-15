import { motion } from "framer-motion";

import {
  FiCheck,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const tickets = [
  {
    title: "Single Pass",
    price: "₹2,999",
    popular: false,

    features: [
      "1 Person Entry",
      "Event Access",
      "Networking Access",
      "Lunch Included",
    ],
  },

  {
    title: "Couple Pass",
    price: "₹4,999",
    popular: true,

    features: [
      "2 Person Entry",
      "Priority Seating",
      "Networking Access",
      "Lunch Included",
      "Premium Welcome Kit",
    ],
  },

  {
    title: "VIP Pass",
    price: "₹9,999",
    popular: false,

    features: [
      "VIP Seating",
      "Meet & Greet",
      "Premium Kit",
      "VIP Lunch",
      "Exclusive Networking",
    ],
  },
];

const TicketPricing = () => {
  return (
    <section className="section-padding bg-slate-50">

      <Container>

        <SectionTitle
          center
          subtitle="Pricing"
          title="Choose Your Ticket"
          description="
            Select the perfect experience for your transformation journey.
          "
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {tickets.map((ticket, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`
                relative
                rounded-[32px]
                p-10
                shadow-card
                overflow-hidden
                ${
                  ticket.popular
                    ? "bg-primaryGradient text-white scale-[1.03]"
                    : "bg-white"
                }
              `}
            >

              {/* POPULAR */}

              {ticket.popular && (

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-white
                    text-darkNavy
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                  "
                >
                  Most Popular
                </div>

              )}

              {/* TITLE */}

              <h3
                className={`
                  text-3xl
                  font-bold
                  mb-4
                  ${
                    ticket.popular
                      ? "text-white"
                      : "text-darkNavy"
                  }
                `}
              >
                {ticket.title}
              </h3>

              {/* PRICE */}

              <div className="mb-8">

                <span
                  className={`
                    text-5xl
                    font-bold
                    ${
                      ticket.popular
                        ? "text-white"
                        : "gradient-text"
                    }
                  `}
                >
                  {ticket.price}
                </span>

              </div>

              {/* FEATURES */}

              <div className="space-y-5 mb-10">

                {ticket.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >

                    <div
                      className={`
                        w-8
                        h-8
                        rounded-full
                        flex
                        items-center
                        justify-center
                        ${
                          ticket.popular
                            ? "bg-white/20"
                            : "bg-primaryGreen/10"
                        }
                      `}
                    >
                      <FiCheck />
                    </div>

                    <p
                      className={`
                        ${
                          ticket.popular
                            ? "text-white/90"
                            : "text-slate-600"
                        }
                      `}
                    >
                      {feature}
                    </p>

                  </div>

                ))}

              </div>

              {/* BUTTON */}

              <Button
                className={`
                  w-full
                  ${
                    ticket.popular
                      ? "!bg-white !text-darkNavy"
                      : ""
                  }
                `}
              >
                Book Now
              </Button>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default TicketPricing;