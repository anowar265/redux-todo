import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_REQUEST,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
} from "./actionTypes";

export const init = {
  todo: [],
  isLoading: false,
  isError: false,
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST:
      return { ...store, isLoading: true };
    case GET_TODO_SUCCESS:
      return { ...store, todo: payload, isLoading: false };

    case GET_TODO_FAILURE:
      return {
        ...store,
        isError: true,
      };

    case ADD_TODO_REQUEST:
      return { ...store, isLoading: true };
    case ADD_TODO_SUCCESS:
      let newTodos = [...store.todo, payload];
      return {
        ...store,
        todo: newTodos,
        isLoading: false,
      };

    case ADD_TODO_FAILURE:
      return {
        ...store,
        isError: true,
      };

    case TOGGLE_TODO_REQUEST:
      return { ...store, isLoading: true };
    case TOGGLE_TODO_SUCCESS:
      let newStatusTodo = store.todo.map((item) =>
        item.id == payload.id ? payload : item
      );
      return {
        ...store,
        todo: newStatusTodo,
        isLoading: false,
      };

    case TOGGLE_TODO_FAILURE:
      return {
        ...store,
        isError: true,
      };

    case REMOVE_TODO_REQUEST:
      return { ...store, isLoading: true };
    case REMOVE_TODO_SUCCESS:
      const leftTodos = store.todo.filter((item) => item.id !== payload);
      return {
        ...store,
        todo: leftTodos,
        isLoading: false,
      };

    case REMOVE_TODO_FAILURE:
      return {
        ...store,
        isError: true,
      };
    default:
      return { ...store };
  }
};
