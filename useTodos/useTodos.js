import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = (initialState = []) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || initialState;
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = { type: "[TODO] Add Todo", payload: todo };

    dispatch(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = { type: "[TODO] Remove Todo", payload: todo };

    dispatch(action);
  };

  const handleToggleTodo = (todo) => {
    const action = { type: "[TODO] Toggle Todo", payload: todo };

    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleToggleTodo,
    handleDeleteTodo,
    handleNewTodo,
  };
};
