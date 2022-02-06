import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/github";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/githubActions";

const User = () => {
  const {
    user: {
      name,
      type,
      avatar_url,
      location,
      bio,
      blog,
      twitter_username,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    },
    repos,
    dispatch,
    loading,
  } = useContext(GithubContext);

  const params = useParams();
  useEffect(() => {
    const getUserData = async () => {
      dispatch({ type: "SET_LOADING" });
      const reUser = await getUserAndRepos(params.login);

      dispatch({ type: "GET_USER_AND_REPOS", payload: reUser });
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log();
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="mx-auto w-full">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="card image-full rounded-lg shadow-xl">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>

                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="card-title text-3xl">
                {name}
                <div className="badge badge-success ml-2 mr-1">{type}</div>
                {hireable && (
                  <div className="badge badge-info mx-1 my-1">hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="card-actions mt-4">
                <a
                  href={html_url}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit github profile
                </a>
              </div>
            </div>
            <div className="bg-base-100 stats lg:f w-full flex-wrap rounded-lg shadow-md md:flex lg:flex-nowrap">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="stat-value text-lg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://${blog}`}
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://twitter.com/${twitter_username}`}
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-base-100 stats mb-6 w-full rounded-lg py-5 shadow-md">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className=" text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="star-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className=" text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="star-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className=" text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="star-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className=" text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="star-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
