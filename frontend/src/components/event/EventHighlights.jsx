import {
  FiTrendingUp,
  FiHeart,
  FiUsers,
  FiAward,
} from "react-icons/fi";

import Container from "../common/Container";

const highlights = [
  {
    icon: <FiTrendingUp />,
    title: "Mindset Growth",
  },

  {
    icon: <FiHeart />,
    title: "Fitness Mastery",
  },

  {
    icon: <FiUsers />,
    title: "Elite Networking",
  },

  {
    icon: <FiAward />,
    title: "Success Blueprint",
  },
];

const EventHighlights = () => {
  return (
    <section className="py-20 bg-white">

      <Container>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item, index) => (

            <div
              key={index}
              className="
                bg-slate-50
                rounded-[30px]
                p-10
                text-center
                shadow-card
                hover:-translate-y-2
                transition
              "
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-primaryGradient
                  text-white
                  text-4xl
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-6
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-darkNavy
                "
              >
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default EventHighlights;