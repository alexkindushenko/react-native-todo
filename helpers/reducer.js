import {
  ON_CHANGE_LIST_GROUP,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_REQUEST,
  ON_ADD_TODO_ITEM,
  ON_TODO_ITEM_DONE,
} from "./constants";

import { addTodoItem, todoItemDone } from "./actions";

function reducer(state, action) {
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case ON_CHANGE_LIST_GROUP:
      return {
        ...state,
        selectedGpoupId: action.payload,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedGpoupId: action.payload.selectedGpoupId,
        listGroups: action.payload.listGroups,
      };
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        selectedGpoupId: "",
        listGroups: [],
      };
    case ON_ADD_TODO_ITEM:
      return addTodoItem(state, action.payload);
    case ON_TODO_ITEM_DONE:
      return todoItemDone(state, action.payload);

    default:
      return state;
  }
}

export default reducer;
