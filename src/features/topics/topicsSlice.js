import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic(state, action) {
      const { id, name, icon } = action.payload;
      state.topics[id] = { id, name, icon, quizIds: [] }
    },
    addQuizId(state, action) {
      const { id, topicId } = action.payload;
      console.log('test', state.topics[topicId]);
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;