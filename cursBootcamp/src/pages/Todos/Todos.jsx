import { useState } from "react";
import "./Todos.css";

const initialState = [
    {
        id: 1,
        title: "Hola Mundo",
        completed: false,
    },
    {
        id: 2,
        title: "Hola Pepe",
        completed: false,
    },
    {
        id: 3,
        title: "Hola Juan",
        completed: false,
    },
];
function Todos() {
    const [todos, setTodos] = useState(initialState);

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const completeTodo = (id) => {
        const newTodos = todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
            } else {
            return todo;
            }
        });
        setTodos(newTodos);
      };

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
          const newTodo = {
            id: Date.now(),
            title: event.target.value,
            completed: false,
          };
          setTodos([newTodo, ...todos]);
          event.target.value = "";
        }
    };

    const nodes = todos.map((todo) => (
        <div
          key={todo.id}
          className={todo.completed ? "completed" : "active"}
        >
          <p className="todo-text">{todo.title}</p>
          <div className="todo-actions">
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ));

return (
    <div className="Todos">
        <input
            type="text"
            placeholder="Add Todo"
            onKeyUp={e => handleKeyUp(e)}
        />
        <section>
            {nodes}
        </section>
    </div>
)

}

export default Todos;