import React, { createContext, useReducer } from "react";

interface TreeState {
  data: any[];
}

const initialState: TreeState = {
  data: [],
};

export const actionTypes = {
  SET_DATA: "SET_DATA",
  DELETE_NODE: "DELETE_NODE",
  TOGGLE_EXPAND: "TOGGLE_EXPAND",
};

const treeReducer = (state: TreeState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.DELETE_NODE:
      return { ...state, data: action.payload };
    case actionTypes.TOGGLE_EXPAND:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const TreeContext = createContext<{
  state: TreeState;
  dispatch: React.Dispatch<any>; 
}>({} as any);

export const TreeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(treeReducer, initialState);

  return (
    <TreeContext.Provider value={{ state, dispatch }}>
      {children}
    </TreeContext.Provider>
  );
};
