"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const getTodos = async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <div className="h-full flex justify-center items-center">
      <ul>
        {data.map((todo: Todos) => (
          <li key={todo.id}>
            <div>{`할일 : ${todo.title} - 완료여부 : ${todo.completed}`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
