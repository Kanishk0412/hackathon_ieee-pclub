import React from "react";
import "./team.css";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {FOOTER} from "../../Module/General";

function Member(props) {

  
  return (
    <div className="member">
      <img src={props.img} alt="Limbo hack"></img>
      <div className="members-link">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

export {Member};
