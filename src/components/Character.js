import React from "react";

const Character = props => {
  const {character} = props;
  return (
    <div className="characters-card">
        <p>Name: {character.name}</p>
        <p>Gender: {character.gender}</p>
        <p>Height: {character.height}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Birth Year: {character.birth_year}</p>
      </div>
  )
};

export default Character;
