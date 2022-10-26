export const todoReducer = (initialState = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case "[TODO] Add Todo":
      return [...initialState, payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== payload.id);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id !== payload.id) return todo;
        else {
          return { ...todo, done: !todo.done };
        }
      });

    default:
      return initialState;
  }
};
