import {createSlice} from '@reduxjs/toolkit';
import {api} from '../../utils/apis';
import {URLS} from '../../common/urls';

const initialState = {
  packages: [],
  singlePackage: null,
};

const packageSlice = createSlice ({
  name: 'package',
  initialState,
  reducers: {
    setPackages: (state, action) => {
      state.packages = action.payload;
    },
    editPackage: (state, action) => {
      const updatedPackage = action.payload;
      const index = state.packages.findIndex (
        package_data => package_data.id === updatedPackage.id
      );
      if (index !== -1) {
        state.packages[index] = updatedPackage;
      }
    },
    setSinglePackage: (state, action) => {
      state.singlePackage = action.payload;
    },
  },
});

export const {
  setPackages,
  editPackage,
  setSinglePackage,
} = packageSlice.actions;

export const fetchPackages = () => async dispatch => {
  try {
    const res = await api.get (URLS.PACKAGE_URL);
    dispatch (setPackages (res.data));
  } catch (error) {
    console.log ('error fetching packages');
  }
};

export function updatePackage (packageId, data) {
  return async function updatePackageThunk (dispatch) {
    try {
      const res = await api.patch (`${URLS.PACKAGE_URL}/${packageId}/`, data);
      dispatch (editPackage (res.data));
    } catch (error) {
      console.log (error, 'error updating Package details');
    }
  };
}

export function fetchPackageById(id) {
  return async function fetchPackageByIdThunk(dispatch) {
    try {
      const res = await api.get(`${URLS.PACKAGE_URL_BY_ID}/${id}/`);
      dispatch(setSinglePackage(res.data));
    } catch (error) {
      console.log(error, "error fetching package by ID");
    }
  };
}

export default packageSlice.reducer;
