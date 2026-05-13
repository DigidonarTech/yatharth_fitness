import {
  FiMapPin,
  FiClock,
  FiPhone,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const VenueMap = () => {
  return (
    <section className="section-padding bg-white">

      <Container>

        <SectionTitle
          center
          subtitle="Venue"
          title="Event Location"
          description="
            Experience the event in a premium and energetic environment.
          "
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <div
            className="
              bg-slate-50
              rounded-[30px]
              p-10
              shadow-card
            "
          >

            <div className="space-y-8">

              {/* LOCATION */}

              <div className="flex gap-5">

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-primaryGradient
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  <FiMapPin />
                </div>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-darkNavy
                      mb-2
                    "
                  >
                    Venue Address
                  </h3>

                  <p className="text-slate-500">
                    Grand Convention Hall,
                    Mumbai, India
                  </p>

                </div>

              </div>

              {/* TIME */}

              <div className="flex gap-5">

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-primaryGradient
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  <FiClock />
                </div>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-darkNavy
                      mb-2
                    "
                  >
                    Event Timing
                  </h3>

                  <p className="text-slate-500">
                    9:00 AM - 8:00 PM
                  </p>

                </div>

              </div>

              {/* CONTACT */}

              <div className="flex gap-5">

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-primaryGradient
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  <FiPhone />
                </div>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-darkNavy
                      mb-2
                    "
                  >
                    Contact Support
                  </h3>

                  <p className="text-slate-500">
                    +91 98765 43210
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              overflow-hidden
              rounded-[30px]
              shadow-card
            "
          >

            <iframe
              title="venue-map"
              src="https://www.google.com/maps/embed?pb=!1m18"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default VenueMap;