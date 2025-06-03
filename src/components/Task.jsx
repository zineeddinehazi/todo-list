export default function Task({ task, handleCheck, handleRemove }) {
  return (
    <li className="flex justify-between" key={task.id}>
      <div className="space-x-3 text-3xl">
        <input
          type="checkbox"
          className="h-6 w-6 appearance-none bg-amber-100 checked:bg-[#007acc]"
          checked={task.completed}
          onChange={(e) => handleCheck(task.id, e.target.checked)}
        />
        <label
          className={`${task.completed ? "line-through decoration-red-400" : ""}`}
        >
          {task.description}
        </label>
      </div>
      <button
        className="rounded-3xl bg-red-400 p-2 text-xl text-gray-100 hover:bg-red-500"
        onClick={() => handleRemove(task.id)}
      >
        Remove
      </button>
    </li>
  );
}
