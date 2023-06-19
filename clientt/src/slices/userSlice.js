import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { confirmUser, registerUser } from "../api";

export const registerUserAsync = createAsyncThunk(
    "/api/webuser/register",
    async ({  email, password }, { rejectWithValue }) => {
      try {
        const response = await registerUser( email, password); 
        return response.confirmationCode
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
  );
export const confirmUserAsync = createAsyncThunk(
    "/api/webuser/confirm",
    async (confirmationCode, { rejectWithValue }) => {
      try {
        await confirmUser(confirmationCode); 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

const userSlice = createSlice({
  name: "webuser",
  initialState: {
    registrationStatus: null,
    confirmationCode: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.registrationStatus = "loading";
        state.error = null;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.registrationStatus = "succeeded";
        state.confirmationCode = action.payload;
        state.error = null;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.registrationStatus = "failed";
        state.confirmationCode = "";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
