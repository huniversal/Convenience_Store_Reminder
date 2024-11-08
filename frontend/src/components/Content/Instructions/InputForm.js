import React from "react";
import { useState, useRef } from "react";
import "../Instructions/style/InputForm.css";

const InputForm = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value); // 오타 수정
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 입력 후 content 값 초기화
  };

  return (
    <div className="InputForm">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent} // 변경 사항 추가
        onKeyDown={onKeydown}
        placeholder="안내문구를 입력하세요..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default InputForm;
