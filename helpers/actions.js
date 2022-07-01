export const addTodoItem = (state, { selectedGpoupId, todo: { id, title } }) => {
  const listGroups = state.listGroups.map((el) =>
    el.id === selectedGpoupId ? { ...el, todos: [...el.todos, { id, title }] } : el
  );
  return {
    ...state,
    listGroups,
  };
};

export const todoItemDone = (state, { id, selectedGpoupId }) => {
  const listGroups = state.listGroups.map((el) =>
    el.id === selectedGpoupId
      ? { ...el, todos: el.todos.map((el) => (el.id === id ? { ...el, done: !el.done } : el)) }
      : el
  );
  return {
    ...state,
    listGroups,
  };
};

export const todoItemDelete = (state, { id, selectedGpoupId }) => {
  const listGroups = state.listGroups.map((el) =>
    el.id === selectedGpoupId ? { ...el, todos: el.todos.filter((el) => el.id !== id) } : el
  );
  console.log(listGroups);
  return {
    ...state,
    listGroups,
  };
};

export const addNewGroup = (state, { id, groupTitle, todos }) => {
  const listGroups = [...state.listGroups, { id, groupTitle, todos }];
  console.log(listGroups);
  return {
    ...state,
    listGroups,
    selectedGpoupId: id,
  };
};
