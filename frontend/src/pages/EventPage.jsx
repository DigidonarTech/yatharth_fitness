import MainLayout from "../layouts/MainLayout";

import EventHero from "../components/event/EventHero";
import EventBenefits from "../components/event/EventBenefits";
import EventSchedule from "../components/event/EventSchedule";
import Speakers from "../components/event/Speakers";
import VenueMap from "../components/event/VenueMap";
import EventHighlights from "../components/event/EventHighlights";

import TicketPricing from "../components/event/TicketPricing";
import EventGallery from "../components/event/EventGallery";
import StickyBookingCTA from "../components/event/StickyBookingCTA";

const EventPage = () => {
  return (
    <MainLayout>

      <EventHero />

      <EventHighlights />

      <EventBenefits />

      <EventSchedule />

      <Speakers />

      <TicketPricing />

      <EventGallery />

      <VenueMap />

      <StickyBookingCTA />

    </MainLayout>
  );
};

export default EventPage;