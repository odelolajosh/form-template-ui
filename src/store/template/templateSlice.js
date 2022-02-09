import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTemplates } from './templateAPI';

const initialState = {
  value: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getAllTemplates(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getAllTemplates = createAsyncThunk(
  'template/fetchTemplates',
  async () => {
    try {
      const response = await fetchTemplates();
      if (response.ok) {
        const result = await response.json()
        return result
      }
      throw Error('Cannot fetch templates')
    } catch(err) {
      console.log(err.message)
    }
  }
);

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchTemplates: (state, action) => {
      console.log(action)
      state.value = action.payload
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getAllTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllTemplates.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTemplates = (state) => state.template.value;
export const selectStatus = (state) => state.template.status;


export default templateSlice.reducer;
