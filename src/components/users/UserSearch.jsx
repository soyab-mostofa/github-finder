import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/github";
import { searchUsers } from "../../context/github/githubActions";
import Alert from "../Alert";

const UserSearch = () => {
  const { users, dispatch, clearSearch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });

    if (text === "") {
      setAlert("input search", "error");
    } else {
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };
  const handleClear = (e) => {
    clearSearch();
  };

  return (
    <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <Alert />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="input input-lg w-full bg-gray-300 pr-40 text-black"
                placeholder="Search users"
                onChange={handleChange}
                value={text}
              />
              <button className="btn btn-lg absolute inset-y-0 right-0 w-28 rounded-l-none">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className=" flex items-center">
        {users.length > 0 && (
          <button onClick={handleClear} className="btn btn-ghost  btn-large">
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
