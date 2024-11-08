import React from "react";
import "../Instructions/style/OutputDisplay.css";

const OutputDisplay = ({ outputs, onDelete }) => {
  return (
    <div className="OutputDisplay">
      {outputs.length === 0 ? (
        <div className="output-item-placeholder">현재 안내문구가 없습니다.</div>
      ) : (
        outputs.map((output, index) => (
          <div key={index} className="output-item">
            <span>{output}</span>
            <button onClick={() => onDelete(index)}>삭제</button>
          </div>
        ))
      )}
    </div>
  );
};

export default OutputDisplay;
