import { ADD_TASK } from '../../constants';

export const addTast = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});
