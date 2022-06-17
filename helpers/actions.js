export const addTodoItem = (state, { selectedGpoupId, todo: { id, title } }) => {
  const listGroups = state.listGroups.map((el) =>
    el.id === selectedGpoupId ? { ...el, todos: [...el.todos, { id, title }] } : el
  );
  return {
    ...state,
    listGroups,
  };
};
