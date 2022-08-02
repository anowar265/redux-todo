import { Routes, Route } from "react-router-dom";
import { EditTodo } from "../Components/EditTodo";
import { HomePage } from "./Homepage";
import { SingleTodo } from "./SingleTodo";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todo/:id" element={<SingleTodo />}></Route>
      <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
    </Routes>
  );
};
