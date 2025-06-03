import { useState } from "react";
import { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("list");
    return saved ? JSON.parse(saved) : [];
  });
  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Form task={task} setTask={setTask} setList={setList} />
      <List list={list} setList={setList} />
    </>
  );
}
