import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchTodos } from '../actions'

export interface CounterState {
  value: number
  text: string
  todos: any
}

const initialState: CounterState = {
  value: 10,
  text: '',
  todos: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateText: (state, action) => {
        state.text = action.payload
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log("🚀 ~ action:", action)
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      console.log('pending', state, action);
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log('fulfill', state, action);
      state.todos = action.payload
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log('reject', state, action);
    })
  }
})

// Action creators are generated for each case reducer function
export const { updateText, increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer