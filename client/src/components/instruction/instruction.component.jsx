import React from 'react';

import { InstructionWrapper, InstructionPicture, InstructionStep } from './instruction.styles';

const Instruction = (props) => {
  return (
    <InstructionWrapper>
      {props.imgUrl && <InstructionPicture>{props.imgUrl}</InstructionPicture>}
      <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <InstructionStep>{props.step}.</InstructionStep>
        <p>{props.instruction}</p>
      </div>
    </InstructionWrapper>
  );
};

export default Instruction;
