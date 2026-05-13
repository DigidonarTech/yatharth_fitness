import { useState } from "react";

import {
  FiChevronDown,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const faqs = [
  {
    question: "Who can attend this event?",
    answer:
      "Anyone interested in fitness, mindset, business growth, and lifestyle transformation.",
  },

  {
    question: "Will I get event access after booking?",
    answer:
      "Yes, you will receive ticket confirmation, invoice, and QR access instantly.",
  },

  {
    question: "Can I book couple tickets?",
    answer:
      "Yes, couple and VIP passes are available.",
  },
];

const FAQSection = () => {

  const [active, setActive] = useState(null);

  return (
    <section className="section-padding bg-slate-50">

      <Container>

        <SectionTitle
          center
          subtitle="FAQs"
          title="Frequently Asked Questions"
          description="
            Everything you need to know before joining the event.
          "
        />

        <div className="max-w-4xl mx-auto space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[24px]
                shadow-card
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  p-7
                  text-left
                "
              >

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-darkNavy
                  "
                >
                  {item.question}
                </h3>

                <FiChevronDown
                  className={`
                    text-2xl
                    transition
                    ${active === index ? "rotate-180" : ""}
                  `}
                />

              </button>

              {active === index && (

                <div className="px-7 pb-7">

                  <p
                    className="
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    {item.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default FAQSection;