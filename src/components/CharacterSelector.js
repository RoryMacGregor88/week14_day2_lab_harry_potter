import React, { Component } from 'react';

const CharacterSelector = (props) => {
    const options = props.characters.map((character, index) => {
     return (<option key={index} value={index}>{character.name}</option>);
    });

    function handleSelectChange(evt) {
        const selectedIndex = evt.target.value;
        props.onCharacterSelected(selectedIndex);
    }

    return (
        <select
            id="character-selector"
            defaultValue="default"
            onChange="handleSelectChange"
        >
            <option disabled value="default">Choose a character...</option>
            {options}
        </select>
    )

}           

export default CharacterSelector;