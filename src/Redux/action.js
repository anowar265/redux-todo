import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_REQUEST,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
} from "./actionTypes";

export const getTodoRequest = () => ({
  type: GET_TODO_REQUEST,
});

export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});

export const getTodoFailure = () => ({
  type: GET_TODO_FAILURE,
});

export const addTodoRequest = () => ({
  type: ADD_TODO_REQUEST,
});

export const addTodoSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});

export const addTodoFailure = () => ({
  type: ADD_TODO_FAILURE,
});

export const toggleTodoRequest = () => ({
  type: TOGGLE_TODO_REQUEST,
});

export const toggleTodoSuccess = (payload) => ({
  type: TOGGLE_TODO_SUCCESS,
  payload,
});

export const toggleTodoFailure = () => ({
  type: TOGGLE_TODO_FAILURE,
});

export const removeTodoRequest = () => ({
  type: REMOVE_TODO_REQUEST,
});

export const removeTodoSuccess = (payload) => ({
  type: REMOVE_TODO_SUCCESS,
  payload,
});

export const removeTodoFailure = () => ({
  type: REMOVE_TODO_FAILURE,
});
