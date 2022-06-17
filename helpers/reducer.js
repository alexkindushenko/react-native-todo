import {
  ON_CHANGE_LIST_GROUP,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_REQUEST,
  ON_ADD_TODO_ITEM,
} from "./constants";

import { addTodoItem } from "./actions";

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
      // const {
      //   selectedGpoupId,
      //   todo: { id, title },
      // } = action.payload;
      // return {
      //   ...state,
      //   listGroups: state.listGroups.map((el) =>
      //     el.id === selectedGpoupId ? { ...el, todos: [...el.todos, { id, title }] } : el
      //   ),
      // };
      return addTodoItem(state, action.payload);
    // return {
    //   listGroups: [
    //     {
    //       id: "zaq",
    //       groupTitle: "To Buy",
    //       todos: [
    //         { id: "qaz", title: "new Book" },
    //         { id: "qax", title: "new Book" },
    //         { id: "qac", title: "new Book" },
    //       ],
    //     },
    //     {
    //       id: "xsw",
    //       groupTitle: "To Watch",
    //       todos: [
    //         { id: "wsx", title: "Terminator 2" },
    //         { id: "wsc", title: "Terminator 3" },
    //         { id: "wsv", title: "Terminator 4" },
    //         { id: "wsb", title: "Terminator 5" },
    //         { id: 1, title: "Terminator 6" },
    //       ],
    //     },
    //   ],
    //   selectedGpoupId: "xsw",
    // };
    default:
      return state;
  }
}

export default reducer;
