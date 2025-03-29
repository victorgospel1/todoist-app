import { useEffect, useState } from "react";

function Todo() {
  const [todoData, setTodoData] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  function handleInputChange(event) {
    setInputTodo(event.target.value);
  }
  async function handleButtonClick() {
    setTodoData((prev) => [
      ...prev,
      { todo: inputTodo, completed: false, id: Math.random() },
    ]);
    setInputTodo("");
  }

  const handlecheckboxchange = (id) => {
    setTodoData((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
      })
    );
  };

  const handledeletion = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  };
  // useEffect(() => {}, [todoData]);
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-600 text-center">
          YOUR TODOS
        </h2>
        <div className="space-x-2 pt-2">
          <input
            type="text"
            placeholder="Add a todo"
            className="input input-info"
            onChange={handleInputChange}
            value={inputTodo}
          />
          <button className="btn btn-soft btn-info" onClick={handleButtonClick}>
            Add
          </button>
        </div>
        <h3 className="text-lg text-gray-600 text-center mt-2">
          {todoData.length} Todos
        </h3>
        <div className="mt-6 space-y-6">
          {todoData?.map((task) => {
            return (
              <div
                key={task.id}
                className="bg-gradient-to-r from-blue-200 to-blue-500 shadow-lg rounded-2xl p-6 flex justify-between items-center transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200"
              >
                <h2 className="text-lg font-semibold text-white drop-shadow-md">
                  {task.todo}
                </h2>
                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="w-6 h-6 accent-green-600 cursor-pointer border-2 border-white"
                    onChange={() => handlecheckboxchange(task.id)}
                  />
                  <button
                    onClick={() => handledeletion(task.id)}
                    className="bg-red-700 text-white p-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
