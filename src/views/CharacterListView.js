import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPeople } from "../actions/index";

class CharacterListView extends React.Component {


  componentDidMount() {
    // call our action
    this.props.getPeople();
  }

  render() {

    if (this.props.characters.error) {
      return (
        <div className="text-center">{this.props.characters.error}</div>
      )
    }

    if (this.props.characters.fetching) {
      return (
        <div className="text-center">Loading</div>
      )
    }

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getPeople
  }
)(CharacterListView);
