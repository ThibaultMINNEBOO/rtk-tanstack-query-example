import { createSlice } from "@reduxjs/toolkit";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: Post[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (_, action) => {
      return action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
