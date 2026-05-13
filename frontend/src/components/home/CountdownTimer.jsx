import { useEffect, useState } from "react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const CountdownSection = () => {

  const targetDate = new Date("2026-12-30").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),

        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
          (1000 * 60)
        ),

        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const items = [
    { label: "Days", value: timeLeft.days || 0 },
    { label: "Hours", value: timeLeft.hours || 0 },
    { label: "Minutes", value: timeLeft.minutes || 0 },
    { label: "Seconds", value: timeLeft.seconds || 0 },
  ];

  return (
    <section className="section-padding bg-slate-50">

      <Container>

        <SectionTitle
          center
          subtitle="Limited Time"
          title="Event Starts In"
          description="
            Seats are limited. Reserve your position before registration closes.
          "
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {items.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[30px]
                shadow-card
                p-10
                text-center
              "
            >

              <h3
                className="
                  text-5xl
                  font-bold
                  gradient-text
                  mb-4
                "
              >
                {item.value}
              </h3>

              <p className="text-slate-500 text-lg">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default CountdownSection;