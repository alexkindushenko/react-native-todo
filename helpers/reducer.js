import { ON_CHANGE_LIST_GROUP } from "./constants";

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case ON_CHANGE_LIST_GROUP:
      return {
        ...state,
        selectedGpoupId: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
