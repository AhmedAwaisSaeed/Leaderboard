import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import userData from '../constants/usersData.json';
import {UserState} from '../types';

const initialState: UserState = {
  users: userData,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    searchUser: (state, action: PayloadAction<string>) => {
      // Implement your search logic here
    },
  },
});

export const {searchUser} = userSlice.actions;
export default userSlice.reducer;
