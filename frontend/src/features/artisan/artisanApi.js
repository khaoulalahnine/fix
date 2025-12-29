import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/axios";

// Fetch a single artisan by ID
export const fetchArtisanProfile = createAsyncThunk(
  "artisan/fetchProfile",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/artisans/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Create a new artisan
export const createArtisanProfile = createAsyncThunk(
  "artisan/createProfile",
  async (formData, thunkAPI) => {
    try {
      const response = await api.post("/artisans", formData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update an artisan
export const updateArtisanProfile = createAsyncThunk(
  "artisan/updateProfile",
  async ({ id, formData }, thunkAPI) => {
    try {
      const response = await api.put(`/artisans/${id}`, formData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Delete an artisan
export const deleteArtisanProfile = createAsyncThunk(
  "artisan/deleteProfile",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/artisans/${id}`);
      return id; // return deleted ID
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);
