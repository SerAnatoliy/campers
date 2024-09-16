import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getAllCampers } from '../api/campersAPI';

export const fetchCampers = createAsyncThunk('campers/fetch', async (_, thunkApi) => {
  try {
    const data = await getCampers();

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loadMoreCampers = createAsyncThunk('campers/loadMore', async (page, { rejectWithValue }) => {
  try {
    const { data } = await getCampers(page);
    return data.items;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchCamperAll = createAsyncThunk('filters/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getAllCampers();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
