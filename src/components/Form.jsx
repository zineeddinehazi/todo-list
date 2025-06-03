export default function Form({ task, setTask, setList }) {
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
  return (
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
          className="shadow- rounded-3xl bg-[#007acc] p-3 text-xl text-gray-100 hover:bg-blue-600"
        >
          Add to list
        </button>
      </div>
    </form>
  );
}
