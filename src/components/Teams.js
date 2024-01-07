import React from "react";
import { TeamList } from "./TeamList";
import TeamItem from "./TeamItem";
import "../styles/Team.css";

function Teams() {
  return (
    <div className="teams">
      <h1 className="teamTitle">ST Teams</h1>
      <div className="teamList">
        {TeamList.map((teamItem, key) => {
          return (
            <TeamItem
              key={key}
              image={teamItem.image}
              name={teamItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Teams;