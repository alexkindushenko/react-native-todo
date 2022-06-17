import { useReducer } from "react";

import TodoApp from "./components/TodoApp";

import AppContext from "./helpers/todo-context";
import reducer from "./helpers/reducer";

const initialState = {
  loading: true,
  listGroups: [],
  selectedGpoupId: "",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <TodoApp />
    </AppContext.Provider>
  );
}
