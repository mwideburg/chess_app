import React, { Component } from 'react';

import WithMoveValidation from './integrations/WithMoveValidation';
import PlayRandomMoveEngine from './integrations/PlayRandomMoveEngine';
import RandomVsRandomGame from './integrations/RandomVsRandomGame';
import CustomizedBoard from './integrations/CustomizedBoard';
import AllowDragFeature from './integrations/AllowDrag';
import PrestoChangoExample from './integrations/PrestoChango';
import UndoMove from './integrations/UndoMove';
import SpareOnDrop from './integrations/SpareOnDrop';

class Demo extends Component {
  state = {
    showCustomizedBoard: false,
    showWithMoveValidation: false,
    showRandomVsRandomGame: false,
    showPlayRandomMoveEngine: true,
    showAllowDragFeature: false,
    showPrestoChango: false,
    showUndoMove: false,
    showSpareOnDrop: false
  };
  render() {
    return (
      <div>
        <div style={boardsContainer}>
         
          <PlayRandomMoveEngine />
       
        </div>
      </div>
    );
  }
}

export default Demo;

const buttonStyle = { width: 200, height: 100, margin: 30, fontSize: 16 };

const buttonRow = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100vw',
  flexWrap: 'wrap'
};

const boardsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100vw',
  marginTop: 30,
  marginBottom: 50
};
