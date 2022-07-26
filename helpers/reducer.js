import {
  ON_CHANGE_LIST_GROUP,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_REQUEST,
  ON_ADD_TODO_ITEM,
  ON_TODO_ITEM_DONE,
  ON_DELETE_TODO_ITEM,
  ON_ADD_GROUP,
  ON_LOGIN_FORM,
  ON_REGISTER_FORM,
  ON_DELETE_TODO_GROUP,
} from "./constants";

import {
  todoItemAdd,
  todoItemDone,
  todoItemDelete,
  todoGroupAdd,
  todoGroupDelete,
} from "./actions";

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
        listGroups: action.payload.listGroups || [],
        selectedGpoupId: action.payload.selectedGpoupId || "",
      };
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        selectedGpoupId: "",
        listGroups: [],
      };
    case ON_ADD_TODO_ITEM:
      return todoItemAdd(state, action.payload);
    case ON_TODO_ITEM_DONE:
      return todoItemDone(state, action.payload);
    case ON_DELETE_TODO_ITEM:
      return todoItemDelete(state, action.payload);
    case ON_ADD_GROUP:
      return todoGroupAdd(state, action.payload);
    case ON_DELETE_TODO_GROUP:
      return todoGroupDelete(state, action.payload);
    case ON_LOGIN_FORM:
      return {
        ...state,
        isAuth: true,
      };
    case ON_REGISTER_FORM:
      return {
        ...state,
        isAuth: true,
      };

    default:
      return state;
  }
}

export default reducer;
