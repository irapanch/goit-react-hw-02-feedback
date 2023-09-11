import React from 'react';
import { StyledBtn } from 'Apps.Style';
const AddFeedback = props => {
  const { addGood, addNeutral, addBad } = props;
  return (
    <>
      <StyledBtn onClick={addGood}>Good</StyledBtn>
      <StyledBtn onClick={addNeutral}>Neutral</StyledBtn>
      <StyledBtn onClick={addBad}>Bad</StyledBtn>
    </>
  );
};
export default AddFeedback;
