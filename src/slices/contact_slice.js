import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api';

const initialState = { contact : []}

export const storeContact = createAsyncThunk(
  'contact/store',
  async (data, thunkAPI) => {
    console.log(thunkAPI);
    const rep = await API.post('contact', data);
    return rep.data;
  }
);


const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {

    builder.addCase(storeContact.fulfilled, (state, action) => {
      state.contact = [action.payload, ...state.contact];
    });

  },

});

// export const { getUsers } = usersSlice.actions;
export default contactSlice.reducer;
