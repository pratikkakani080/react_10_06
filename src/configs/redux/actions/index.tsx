import { createAsyncThunk } from "@reduxjs/toolkit"
import instance from "../../../lib/api"

export const fetchTodos = createAsyncThunk(
  'counter/fetchTodos',
  async (_, thunkAPI) => {
    const response = await instance('/todos')
    console.log('response', response);
    
    return response
  },
)