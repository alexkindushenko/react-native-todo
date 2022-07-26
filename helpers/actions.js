export const addTodoItem = (state, { _id, title }) => {
  const listGroups = state.listGroups.map((el) =>
    el._id === state.selectedGpoupId ? { ...el, todos: [...el.todos, { _id, title }] } : el
  );
  return {
    ...state,
    listGroups,
  };
};

export const todoItemDone = (state, { _id, selectedGpoupId }) => {
  const listGroups = state.listGroups.map((el) =>
    el._id === selectedGpoupId
      ? { ...el, todos: el.todos.map((el) => (el._id === _id ? { ...el, done: !el.done } : el)) }
      : el
  );
  return {
    ...state,
    listGroups,
  };
};

export const todoItemDelete = (state, { _id, selectedGpoupId }) => {
  const listGroups = state.listGroups.map((el) =>
    el._id === selectedGpoupId ? { ...el, todos: el.todos.filter((el) => el._id !== _id) } : el
  );
  return {
    ...state,
    listGroups,
  };
};

export const addNewGroup = (state, { _id, groupTitle, todos }) => {
  const listGroups = [...state.listGroups, { _id, groupTitle, todos }];
  return {
    ...state,
    listGroups,
    selectedGpoupId: _id,
  };
};
