import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import EventPage from "../pages/EventPage";
import BookingPage from "../pages/BookingPage";
import ContactPage from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/event"
        element={<EventPage />}
      />

      <Route
        path="/booking"
        element={<BookingPage />}
      />

      <Route
        path="/contact"
        element={<ContactPage />}
      />

    </Routes>
  );
};

export default AppRoutes;