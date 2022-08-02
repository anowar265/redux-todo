import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from "../Redux/action";
import axios from "axios";
import { AddTodo } from "./AddTodo";
import { TodoLists } from "./TodoLists";

export const Todo = () => {
  const dispatch = useDispatch();
  const { todo, isLoading, isError } = useSelector((store) => store);

  const getTodos = () => {
    dispatch(getTodoRequest());
    try {
      axios
        .get("http://localhost:8080/todos")
        .then(({ data }) => dispatch(getTodoSuccess(data)));
    } catch (err) {
      dispatch(getTodoFailure());
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return isLoading ? (
    "Loading......."
  ) : (
    <div>
      <h2>TodoPage</h2>
      <AddTodo />
      <TodoLists todoLists={todo} />
    </div>
  );
};
