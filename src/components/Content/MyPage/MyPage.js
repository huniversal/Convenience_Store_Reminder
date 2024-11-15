import React from "react"
import ChangeProfile from "./ChangeProfile";
import profile from './style/img/profileimg.png';
import Information from "./Information";

const MyPage = () => {
  return (
    <div className="content">
      <ChangeProfile profile={profile} />
      <Information />
    </div>
  )
}

export default MyPage;