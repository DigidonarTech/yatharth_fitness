import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import EventPage from "../pages/EventPage";
import BookingPage from "../pages/BookingPage";
import CheckoutPage from "../pages/CheckoutPage";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;