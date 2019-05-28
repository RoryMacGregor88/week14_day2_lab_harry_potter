import React from 'react';

const CharacterDetail = ( {character} ) => {
        if (character === null) {
            return(
                <p>Select character...</p>
            )   
        }
        return (
            <div className="character-detail">
                <h2>{character.name}</h2>
            </div>
        ) 
}
 
export default CharacterDetail;