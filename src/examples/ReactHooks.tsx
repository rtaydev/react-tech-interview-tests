import React, { useEffect, useRef, useState } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const TODOS_KEY = "todos";

const setStorage = (key: string, value: Todo[]) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

const getStorage = (key: string) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

const ReactHooks: React.FC = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>();
  const [inputError, setInputError] = useState<boolean>(false);
  const todoInputRef = useRef(null);

  // Only reason I put this here and not in useState is bcs the test says to use useEffect
  useEffect(() => {
    const todos = getStorage(TODOS_KEY);
    setTodos(todos);
  }, []);

  const handleCompleted = (id: string) => {
    try {
      const newTodos: Todo[] | undefined = todos?.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      if (newTodos) {
        setStorage(TODOS_KEY, newTodos);
        setTodos(newTodos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddTodo = () => {
    if (todoInputRef.current) {
      const todoTitle = todoInputRef.current.value;

      if (!todoTitle) {
        setInputError(true);
        return;
      }
      setInputError(false);

      const newTodo: Todo = {
        id: String(Math.random()),
        title: todoTitle,
        completed: false,
      };

      const newTodos: Todo[] | undefined = todos?.map((todo) => {
        if (todo.title === newTodo.title) {
          setInputError(true);
          return todo;
        }
        return todo;
      });

      if (newTodos) {
        setStorage(TODOS_KEY, [...newTodos, newTodo]);
        setTodos([...newTodos, newTodo]);
        todoInputRef.current.value = "";
      }
    }
  };

  return (
    <div>
      <h2>React Hooks: useState and useEffect</h2>
      <p>Problem:</p>

      <p>Create a simple todo list where users can:</p>
      <ul>
        <li>Add a new todo.</li>
        <li>Mark a todo as completed.</li>
        <li>
          Store the todos in the browser’s local storage, so when the page is
          reloaded, the list persists.
        </li>
      </ul>
      <p>Use:</p>
      <ul>
        <li>useState to handle the state of the todos.</li>
        <li>useEffect to sync the todos with local storage.</li>
      </ul>
      <div>
        <h3>Solution:</h3>
        <div>
          <input ref={todoInputRef} type="text" placeholder="Add a new todo" />
          {inputError && <p>Please enter a todo</p>}
          <button onClick={handleAddTodo}>Add todo</button>
        </div>
        <ul>
          {todos &&
            todos.map((todo) => (
              <li key={todo.id}>
                <span style={{ color: todo.completed ? "green" : "black" }}>
                  {todo.title}
                </span>
                <button
                  style={{ marginLeft: "5px" }}
                  onClick={() => handleCompleted(todo.id)}
                >
                  done
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default ReactHooks;
