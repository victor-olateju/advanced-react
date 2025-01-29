import { useState, useMemo } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  useMemo(() => {
    return (async () => {
      const fetchData = await fetch("/todo.json");
      const response = await fetchData.json();
      return setData(response);
    })();
  }, []);
  return [data, setData];
};

export const Todo = () => {
  const [todos, setTodos] = FetchData();

  console.log(todos);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos?.map((todo) => {
            return (
              <tr key={todo.id} className="">
                <td>{todo.id} Mapped</td>
                <td>
                  <input type="text" />
                </td>
                <td>{todo.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
