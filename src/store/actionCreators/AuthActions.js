import { createAsyncThunk } from "@reduxjs/toolkit";
import authEndPoints from "../services/AuthApis";

export const loginAction = createAsyncThunk(
    "User/login",
    async (credentials) => {
        const response = await authEndPoints.login(credentials);
        console.log(response);
        return response.data;
    }
);


