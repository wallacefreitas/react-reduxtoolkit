import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type Repos = {
  name: string
}

type ReposState = {
  repos: Repos[],
  counter: number
}

const counter = createSlice({
  name: 'counter',
  initialState: {
    repos: [],
    counter: 0,
  } as ReposState,
  reducers: {
    increment: ( state ) => {
      state.counter += 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadRepos.fulfilled, (state, action) => {
      state.repos = action.payload;
    })
  }
})

export const { increment } = counter.actions;
export default counter.reducer;

export const loadRepos = createAsyncThunk(
  'counter/getRepos',
  async (username: string, thunkAPI) => {
    const response = await fetch(`http://api.github.com/users/${username}/repos`)
      .then( (data) => data.json() );

    return response;
  }
) 