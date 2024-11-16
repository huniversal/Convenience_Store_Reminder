import React, { useState } from "react";
import InputForm from "./InputForm";
import OutputDisplay from "./OutputDisplay";
import ControlButtons from "./ControlButtons";

const Instructions = () => {
  const [outputs, setOutputs] = useState([]);

  const handleCreate = (newOutput) => {
    setOutputs([...outputs, newOutput]);
  };

  const handleDelete = (index) => {
    const updatedOutputs = outputs.filter((_, i) => i !== index);
    setOutputs(updatedOutputs);
  };

  return (
        <div className="content-wrapper">
          <InputForm onCreate={handleCreate} />
          <OutputDisplay outputs={outputs} onDelete={handleDelete} />
          <ControlButtons />
        </div>
  );
};

export default Instructions;
