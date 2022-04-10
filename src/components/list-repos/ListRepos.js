import React from "react";
import "./listRepos.css";

function ListRepos({ reposList }) {
  return (
    <ul className="list-repos" id="list-repos">
      { 
        reposList.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
          </li>
        ))
      }
    </ul>
  );
}

export default React.memo(ListRepos);
