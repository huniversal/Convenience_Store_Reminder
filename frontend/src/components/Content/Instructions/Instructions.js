// import React, { useState } from "react";
// import InputForm from "./InputForm";
// import OutputDisplay from "./OutputDisplay";
// // import "./style/Instructions.css";

// const Instructions = () => {
//   const [outputs, setOutputs] = useState([]);

//   const handleCreate = (newOutput) => {
//     setOutputs([...outputs, newOutput]);
//   };

//   const handleDelete = (index) => {
//     const updatedOutputs = outputs.filter((_, i) => i !== index);
//     setOutputs(updatedOutputs);
//   };

//   return (
//     <div className="content">
//       <InputForm onCreate={handleCreate} />
//       <OutputDisplay outputs={outputs} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default Instructions

import React, { useState } from "react";
import InputForm from "./InputForm";
import OutputDisplay from "./OutputDisplay";

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
    <div className="content">
      <InputForm onCreate={handleCreate} />
      <OutputDisplay outputs={outputs} onDelete={handleDelete} />
    </div>
  );
};

export default Instructions;
