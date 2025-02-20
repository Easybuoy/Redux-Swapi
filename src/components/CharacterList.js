import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="characters">
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </div>
  );
};

export default CharacterList;
