import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      console.log(action.payload.id)
      return state.filter((task) => task.id !== action.payload.id);
    },
    crossTask(state, action) {
      const index = state.findIndex( todo => todo.id === action.payload.id);
      state[index].completed = action.payload.completed 
    },
  },
});

export const { addUser, deleteTask, crossTask } = userSlice.actions;


export default userSlice.reducer;
