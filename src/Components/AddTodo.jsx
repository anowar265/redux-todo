import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/action";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const AddTodo = (payload) => {
    dispatch(addTodoRequest());

    axios
      .post("http://localhost:8080/todos", payload)
      .then(({ data }) => dispatch(addTodoSuccess(data)))
      .catch((err) => dispatch(addTodoFailure()));
  };

  const handleAdd = () => {
    if (todo) {
      const payload = { title: todo, status: false };
      AddTodo(payload);
      setTodo("");
    }
  };

  return (
    <div>
      <h4>Add Todo</h4>
      <input
        type="text"
        value={todo}
        placeholder="Add Todo Here ...."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
