import Task from "./Task";

export default function List({ list, setList }) {
  function handleCheck(idToCkeck, isCompleted) {
    setList((list) =>
      list.map((item) =>
        item.id === idToCkeck ? { ...item, completed: isCompleted } : item,
      ),
    );
  }

  function handleRemove(idToRemove) {
    setList((list) => list.filter((item) => item.id !== idToRemove));
  }
  return list.length !== 0 ? (
    <>
      <h1 className="mx-10 my-5 text-4xl">Todo List</h1>
      <ul className="mx-10 mb-10 space-y-6 rounded-lg bg-[#252526] p-5 shadow-2xl">
        {list.map((task) => (
          <Task
            task={task}
            handleCheck={handleCheck}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
    </>
  ) : (
    <h1 className="ml-15">List is empty!</h1>
  );
}
