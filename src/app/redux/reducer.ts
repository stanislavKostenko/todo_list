export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, {
            editable: !todo.editable
          });
        }
        return todo;
      });
    default:
      return state;
  }
};
