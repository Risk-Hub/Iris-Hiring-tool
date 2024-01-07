import React from "react";
import { Link } from "react-router-dom";
import { TeamList } from "./TeamList";
import TeamItem from "./TeamItem";
import "../styles/Team.css";

function Teams() {
  return (
    <div className="teams">
      <h1 className="teamTitle">ST Teams</h1>
      <div className="teamList">
        {TeamList.map((teamListItem, key) => {
          return (
            // <Link key={key} to={`/teams/${teamListItem.name.toLowerCase()}`}> --> This will be used when data will be fetched dynamically from API.
            <Link key={key} to={`/teams/dtit`}>
              <TeamItem image={teamListItem.image} name={teamListItem.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Teams;