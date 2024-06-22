import {createSlice} from '@reduxjs/toolkit';
import {apiWithoutToken, api} from '../../utils/apis';
import {URLS} from '../../common/urls';

const initialState = {
  user: {},
};

const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = {};
      localStorage.removeItem('auth_token');
    },
  },
});

export const {setUser, logout} = authSlice.actions;

export function login (data, navigate) {
  return async function LoginThunk (dispatch) {
    try {
      const res = await apiWithoutToken.post(URLS.LOGIN_URL, data);
      localStorage.setItem ("auth_token", res.data.access);
      dispatch(setUser(res.data.user));
      navigate('/');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log ('Page not found');
        } else if (error.response.status === 401) {
          console.log ('Unauthorized');
        } else if (error.response.data.non_field_errors) {
          console.log ('No field errors');
        } else {
          console.log ('Error');
        }
      } else {
        console.log ('Error');
      }
    }
  };
}

export default authSlice.reducer;
