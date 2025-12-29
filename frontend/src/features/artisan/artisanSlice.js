import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/axios";

// Async thunks
export const fetchArtisans = createAsyncThunk(
  "artisan/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/artisans");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addArtisan = createAsyncThunk(
  "artisan/add",
  async (artisanData, thunkAPI) => {
    try {
      const res = await api.post("/artisans", artisanData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateArtisan = createAsyncThunk(
  "artisan/update",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await api.put(`/artisans/${id}`, data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteArtisan = createAsyncThunk(
  "artisan/delete",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/artisans/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Slice
const artisanSlice = createSlice({
  name: "artisan",
  initialState: {
    artisans: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchArtisans.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArtisans.fulfilled, (state, action) => {
        state.loading = false;
        state.artisans = action.payload;
      })
      .addCase(fetchArtisans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add
     .addCase(addArtisan.pending, (state) => {
  state.loading = true;
})
.addCase(addArtisan.fulfilled, (state, action) => {
  state.loading = false;

  // action.payload might not have an id, so create a temporary one
  const newArtisan = action.payload.id
    ? action.payload
    : { ...action.meta.arg, id: Date.now() };

  state.artisans.push(newArtisan);
})
.addCase(addArtisan.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})
      // Update
      .addCase(updateArtisan.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateArtisan.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.artisans.findIndex(a => a.id === action.payload.id);
        if (index !== -1) state.artisans[index] = action.payload;
      })
      .addCase(updateArtisan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete
      .addCase(deleteArtisan.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteArtisan.fulfilled, (state, action) => {
        state.loading = false;
        state.artisans = state.artisans.filter(a => a.id !== action.payload);
      })
      .addCase(deleteArtisan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
  
});

// Export slice reducer
export default artisanSlice.reducer;
