import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <div className="card bg-base-100 rounded-lg shadow-lg">
      <div className="card-body">
        <h2 className="card-title my-4 text-3xl font-bold">
          Latest repositories
        </h2>
        {repos && repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

export default RepoList;
