import React from 'react';
import { Howl } from 'howler';
import '../Instructions/style/ControlButtons.css';

const ControlButtons = () => {
  const handlePlaySound = () => {
    const sound = new Howl({
      src: ['./ControlButtons.mp3'], 
      volume: 1.0, // 볼륨 크기 설정 (0.0 ~ 1.0)
      onend : () => {
        console.log("start!")
      }
    });
    sound.play();
  }

  return (
    <div className="Button">
      <button onClick={handlePlaySound} className="sound-button">
        호출하기
      </button>
    </div>
  );
};

export default ControlButtons;
