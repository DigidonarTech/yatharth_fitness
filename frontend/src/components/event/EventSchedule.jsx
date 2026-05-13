import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const schedule = [
  {
    time: "09:00 AM",
    title: "Registration & Networking",
  },

  {
    time: "10:30 AM",
    title: "Mindset Transformation Session",
  },

  {
    time: "01:00 PM",
    title: "Lunch & Networking",
  },

  {
    time: "03:00 PM",
    title: "Fitness & Lifestyle Blueprint",
  },

  {
    time: "06:00 PM",
    title: "Closing Ceremony",
  },
];

const EventSchedule = () => {
  return (
    <section className="section-padding bg-slate-50">

      <Container>

        <SectionTitle
          center
          subtitle="Timeline"
          title="Event Schedule"
          description="
            A complete transformational day experience.
          "
        />

        <div className="max-w-4xl mx-auto space-y-6">

          {schedule.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[24px]
                p-7
                shadow-card
                flex
                items-center
                justify-between
              "
            >

              <h3
                className="
                  text-primaryBlue
                  font-bold
                  text-xl
                "
              >
                {item.time}
              </h3>

              <p
                className="
                  text-darkNavy
                  font-semibold
                  text-lg
                "
              >
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default EventSchedule;