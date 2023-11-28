import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../constants/constants";
import { loginAction } from "../actionCreators/AuthActions";
import { addItem } from "../services/storage-service";

const userSlice = createSlice({
    name: "user",
    initialState: UserData,
    reducers: {
        addtoken(state, action) {
          // Modify state here based on the action payload
        },
        // removetoken(state, action) {
        //   // Modify state here based on the action payload
        // },
        // editUser(state, action) {
        //   // Modify state here based on the action payload
        // },
      
  },

  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
        console.log(action.payload);
        addItem(action.payload);
        console.log("Logged in");
      });
    builder.addCase(loginAction.pending, (state, action) => {
      console.log("waiting for response");
    });
    builder.addCase(loginAction.rejected, (state, action) => {
        console.log(action.payload);
      console.log("Wrong Credentials");
    });

}

});

export default userSlice.reducer;
