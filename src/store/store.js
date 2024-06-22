import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import bookingSlice from "./slices/bookingSlice";
import packageSlice from "./slices/packageSlice";
import hotelSlice from "./slices/hotelSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    booking: bookingSlice,
    package: packageSlice,
    hotel: hotelSlice
  },
});

export default store;
