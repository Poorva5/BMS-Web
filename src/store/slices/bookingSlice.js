import {createSlice} from '@reduxjs/toolkit';
import {apiWithoutToken, api} from '../../utils/apis';
import {URLS} from '../../common/urls';

const initialState = {
  bookings: [],
  stats: {},
};

const bookingSlice = createSlice ({
  name: 'booking',
  initialState,
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const {setBookings, setStats} = bookingSlice.actions;

export function fetchBookings () {
  return async function fetchBookingsThunk (dispatch) {
    try {
      const res = await api.get (URLS.BOOKINGS_URL);
      console.log ('API Response:', res.data);
      dispatch (setBookings (res.data));
    } catch (error) {
      console.log ('error fetching booking list');
    }
  };
}

export function fetchStats () {
  return async function fetchStatsThunk (dispatch) {
    try {
      const res = await api.get (URLS.STATS_URL);
      dispatch (setStats (res.data));
    } catch (error) {
      console.log ('error fetching stats');
    }
  };
}

export default bookingSlice.reducer;
