import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface BookingData {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  category: string;
  description: string;
}

interface BookingState {
  bookingData: BookingData[]; // 👈 array (GET returns many)
  loading: boolean;
}

const initialState: BookingState = {
  bookingData: [],
  loading: false,
};

export const fetchBookingData = createAsyncThunk(
  "booking/fetchBookingData",
  async (token: string) => {
    const res = await fetch("http://localhost:5000/api/booking", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data.booking_data; // 👈 IMPORTANT
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookingData.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingData = action.payload;
      })
      .addCase(fetchBookingData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default bookingSlice.reducer;
