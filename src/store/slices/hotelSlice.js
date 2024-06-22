import {createSlice} from '@reduxjs/toolkit';
import {api} from '../../utils/apis';
import {URLS} from '../../common/urls';

const initialState = {
  hotels: [],
};

const hotelSlice = createSlice ({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {setHotels} = hotelSlice.actions;

export const fetchHotels = () => async dispatch => {
  try {
    const res = await api.get (URLS.HOTEL_URL); 
    dispatch (setHotels (res.data));
  } catch (error) {
    console.log ('error fetching hotels');
  }
};

export default hotelSlice.reducer;
