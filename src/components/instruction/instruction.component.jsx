import React from "react";

import {
  InstructionWrapper,
  InstructionPicture,
  InstructionStep,
} from "./instruction.styles";

const Instruction = (props) => {
  console.log("PROPS --> ", props);
  return (
    <InstructionWrapper>
      <InstructionPicture>{props.imgUrl}</InstructionPicture>
      <InstructionStep>{props.step}.</InstructionStep>
      <p>{props.instruction}</p>
    </InstructionWrapper>
  );
};

export default Instruction;
