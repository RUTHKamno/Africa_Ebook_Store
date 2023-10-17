import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api';

const initialState = { users: [], currentUser: {}, Panier:{}, Admin:{} };

export const storeUser = createAsyncThunk(
  'users/store',
  async (data, thunkAPI) => {
    console.log(thunkAPI);
    const rep = await API.post('register', data);
    return rep.data;
  }
);

export const fetchUser = createAsyncThunk(
    'users/fetchOne',
    async (data, thunkAPI) => {
      console.log(thunkAPI);
      const rep = await API.post('auth/signin', data);
      return rep.data;
    }
  );

export const fetchAdmin = createAsyncThunk(
    'users/fetchAdmin',
    async (data, thunkAPI) => {
      console.log(thunkAPI);
      const rep = await API.post('auth/signinAdmin', data);
      return rep.data;
    }
);

const usersSlice = createSlice({
  
  name: 'users',
  initialState,
  reducers: {
    getUsers(state) {
      return state.users; // ca me retourne un tableau vide
    },
    // setCurrentUser(state, action) {
    //   const u = state.users.find(s => s.id == action.payload);
    //   state.currentUser = u;
    // },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.users = action.payload;
    // });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = {nom: "mboene"}

    });

    builder.addCase(fetchAdmin.fulfilled, (state, action) => {
      state.Admin = action.payload;
    });

    builder.addCase(storeUser.fulfilled, (state, action) => {
      state.users = [action.payload, ...state.users];
    });
  },
});

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;
