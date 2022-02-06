import { createContext, useReducer } from "react";
import { githubReducers } from "./githubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: {},
    repos: [],
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducers, initialState);

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,

        clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
