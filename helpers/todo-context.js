import { createContext } from "react";

import reducer from "./helpers/reducer";

const AppContext = createContext();

const initialState = {
  listGrups: [],
};
const a = (W) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <W />;
};

export default a;
