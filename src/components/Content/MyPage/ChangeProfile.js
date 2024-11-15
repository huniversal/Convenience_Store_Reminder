import React, { useState } from 'react';
import './style/ChangeProfile.css';

const ChangeProfile = ({ myData, profile }) => {
  const [uploadedImage, setUploadedImage] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  // 이미지 변경 처리 함수
  const handleImgChange = (event) => {
    const input = event.target;
    if (input.files) {
      const file = input.files[0]; // 파일 추출

      const reader = new FileReader();
      reader.onload = function (e) {
        const imageDataURL = e.target?.result;
        setUploadedImage(imageDataURL);
      };
      reader.readAsDataURL(file); // 추출한 파일을 읽어 데이터 URL로 변환

      setUploadedFile(file); // 파일 상태 변수에 저장
    }
  };

  return (
    <div className="image-container">
      {uploadedImage ? (
        <img className="profile-image" src={uploadedImage} alt="uploaded" />
      ) : (
        <img className="profile-image" src={myData?.profileImage || profile} alt="default-profile" />
      )}
      <div className="img-edit-button">
        {/* 파일 업로드 버튼 */}
        <button className="upload-button" onClick={() => document.getElementById('file-input').click()}>
          이미지 업로드
        </button>
        <input
          id="file-input"
          accept="image/png, image/gif, image/jpeg"
          type="file"
          style={{ display: 'none' }}
          onChange={handleImgChange}
        />
      </div>
    </div>
  );
};

export default ChangeProfile;
