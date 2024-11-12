// import React from 'react';
// import {Howl, Howler} from 'howler';
// import '../Instructions/style/ControlButtons.css';
// // import './Instructions/ControlButtons.mp3';

// const ControlButtons = () => {
//   const handlePlaySound = () => {
//     const sound = new Howl({
//       src: [  
//         './ControlButtons.mp3', 
//         // './ControlButtons.webm',
//     ], 
//       format: [
//         'webm',
//         'mp3'
//       ],
//       volume : 1.0, // 볼륨 크기 설정 (0.0 ~ 1.0)
//       html5  : true,
//       onend  : () => {
//         console.log("start!")
//       },
//       onloaderror: (id, error) => {
//         console.error('오디오 로드 오류:', error);
//       },
//       onplayerror: (id, error) => {
//         console.error('오디오 재생 오류:', error);
//       }
//     });
//     sound.play();
//   }

//   return (
//     <div className="Button">
//       <button onClick={handlePlaySound} className="sound-button">
//         호출하기
//       </button>
//     </div>
//   );
// };

// export default ControlButtons;
import React from 'react';
import {Howl} from 'howler';
import '../Instructions/style/ControlButtons.css';

const ControlButtons = () => {
    const sound = new Howl({
      src: [  
        '/ControlButtons.mp3', 
      ], 
      format: [
        'mp3'
      ],
      volume : 1.0, // 볼륨 크기 설정 (0.0 ~ 1.0)
      html5  : true,
      onend  : () => {
        console.log("start!")
      },
      onloaderror: (id, error) => {
        console.error('오디오 로드 오류:', error);
      },
      onplayerror: (id, error) => {
        console.error('오디오 재생 오류:', error);
      }
    });

    const handlePlaySound = () => {
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
