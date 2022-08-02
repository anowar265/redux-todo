import { Link } from "react-router-dom";

export const TodoLists = ({ todoLists }) => {
  return (
    <div>
      {todoLists?.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/todo/${item.id}`}>
              <div>{item.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
