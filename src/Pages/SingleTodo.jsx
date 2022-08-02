import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/action";

export const SingleTodo = () => {
  const todo = useSelector((store) => store.todo);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState({});
  const navigate = useNavigate();
  const toggleStatus = (id, newStatus) => {
    dispatch(toggleTodoRequest());
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: newStatus })
      .then(({ data }) => dispatch(toggleTodoSuccess(data)))
      .catch((err) => dispatch(toggleTodoRequest()));
  };
  const deleteTodo = (id) => {
    dispatch(removeTodoRequest());
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        dispatch(removeTodoSuccess(id));
        navigate("/");
      })
      .catch((err) => dispatch(removeTodoFailure()));
  };

  useEffect(() => {
    let currentTodo = todo.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  }, [todo, id]);

  return (
    <div>
      <h1>Singletodo</h1>
      <h4>
        {currentTodo?.title} --- {currentTodo.status ? "True" : "False"}
      </h4>
      <button
        onClick={() => {
          toggleStatus(currentTodo.id, !currentTodo.status);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          deleteTodo(currentTodo.id);
        }}
      >
        Delete
      </button>
      <Link to={`/todo/${currentTodo.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
};
