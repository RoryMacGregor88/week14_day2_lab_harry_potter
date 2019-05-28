import React, { Component } from 'react';
import CharacterSelector from '../components/CharacterSelector';

class CharacterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            characters: [],
            selectedCharacter: null
         }
    }

    componentDidMount() {
        const url = "http://hp-api.herokuapp.com/api/characters";
        fetch(url)
            .then( (res) => res.json() )
            .then( (characters) => {
                this.setState( {characters} );
            });
    }

    selectCharacter(selectedIndex) {
        const selectedCharacter = this.state.characters[selectedIndex];
        this.setState({selectedCharacter});
    }
  
    render() { 
        return ( 
            <div>
                <h1>Character Container</h1>
                <CharacterSelector 
                characters={this.state.characters}
                onCharacterSelected={this.selectCharacter}
                />
            </div>
         );
    }
}
 
export default CharacterContainer;