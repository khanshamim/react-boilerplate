import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("list/todos", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = response.json();
  return data;
});

export const sampleReducer = createSlice({
  name: "list",
  initialState: {
    todos: { isLoading: false, data: [] },
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push({
        id: action.payload.id,
        name: action.payload.name,
      });
    },
  },
  extraReducers: (builder) => {
    // When our request is pending:
    builder.addCase(fetchTodos.pending, (state) => {
      state.todos.isLoading = true;
    });
    // When our request is fulfilled:
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos.data = action.payload;
      state.todos.isLoading = false;
    });
  },
});

export const { addItem } = sampleReducer.actions;
