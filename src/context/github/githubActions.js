import axios from "axios";

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  headers: { authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` },
});

export const searchUsers = async (text) => {
  const response = await github.get(`/search/users?q=${text}`);

  return response.data.items;
};
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
