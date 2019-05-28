import React from 'react';

const CharacterDetail = ( {character} ) => {
        if (character === null) {
            return(
                <p>Select character...</p>
            )   
        }

        return (
            <div className="character-detail" id={character.house}>
                <h2>Character name:</h2>
                <p>{character.name}</p>
                <img className="image" alt={character.name} src={character.image}/>
            </div>
        ) 
}
 
export default CharacterDetail;