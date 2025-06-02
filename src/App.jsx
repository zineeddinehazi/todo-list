import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;
    handleCreateTask(task);
    setTask("");
  }

  function handleCreateTask(task) {
    const newTask = {
      description: task,
      id: crypto.randomUUID(),
      completed: false,
    };
    setList((list) => [...list, newTask]);
  }

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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-10 mt-10 mb-20 flex flex-col justify-center gap-5"
      >
        <label htmlFor="task" className="text-4xl">
          Todo task
        </label>
        <div className="flex justify-between gap-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            id="task"
            autoComplete="off"
            placeholder="Any plans?"
            className="flex-1 rounded-lg bg-amber-100 p-2 text-lg font-bold text-[#252526] shadow-2xl focus:border-[#007acc] focus:ring-2 focus:ring-[#007acc] focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-3xl bg-[#007acc] p-3 text-xl text-gray-100 shadow-2xl"
          >
            Add to list
          </button>
        </div>
      </form>

      {list.length !== 0 ? (
        <>
          <h1 className="mx-10 my-5 text-4xl">Todo List</h1>
          <ul className="mx-10 mb-10 space-y-6 rounded-lg bg-[#252526] p-5 shadow-2xl">
            {list.map((task) => (
              <li className="flex justify-between" key={task.id}>
                <div className="space-x-3 text-3xl">
                  <input
                    type="checkbox"
                    className="h-6 w-6 appearance-none bg-amber-100 checked:bg-[#007acc]"
                    onChange={(e) => handleCheck(task.id, e.target.checked)}
                  />
                  <label
                    className={`${task.completed ? "line-through decoration-red-400" : ""}`}
                  >
                    {task.description}
                  </label>
                </div>
                <button
                  className="rounded-3xl bg-red-400 p-2 text-xl text-gray-100"
                  onClick={() => handleRemove(task.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1 className="ml-15">List is empty!</h1>
      )}
    </>
  );
}

export default App;
