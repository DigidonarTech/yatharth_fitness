import {
  createContext,
  useContext,
  useState,
} from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [bookingData, setBookingData] = useState({

    ticketType: "",
    quantity: 1,

    name: "",
    email: "",
    phone: "",

    total: 0,

  });

  return (

    <BookingContext.Provider
      value={{
        bookingData,
        setBookingData,
      }}
    >

      {children}

    </BookingContext.Provider>

  );
};

export const useBooking = () => {
  return useContext(BookingContext);
};