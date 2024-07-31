import React, { useState } from "react";
import "./SignUp.css";

export const SignUp = ({ className, ...props }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const getAccessToken = () => {
    // 액세스 토큰을 가져오는 로직 (예: 로컬 스토리지에서 가져오기)
    return localStorage.getItem('accessToken');
  };

  const getRefreshToken = () => {
    // 리프레시 토큰을 가져오는 로직 (예: 로컬 스토리지에서 가져오기)
    return localStorage.getItem('refreshToken');
  };

  const handleMenteeStart = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/mentee/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
          "x-refresh-token": refreshToken,
        },
        body: JSON.stringify({ phoneNumber }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleMentorStart = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
          "x-refresh-token": refreshToken,
        },
        body: JSON.stringify({ phoneNumber }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className={"SignUp " + className}>
      <div className="peer">
        <span>
          <span className="peer-span">PEER</span>
        </span>
      </div>
      <div className="div1">친구가 상담해주는 </div>
      <div className="div2">사이드 프로젝트 익명 커뮤니티 </div>
      <img className="fox" src="img/fox.png" alt="Fox" />
      <div className="div3">전화번호를 입력해주세요.(-제외) </div>
      <input
        className="phone-num-input"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="전화번호"
      />
      <button
        className="mentee-start"
        onClick={handleMenteeStart}
        disabled={!isValidPhoneNumber(phoneNumber)}
      >
        멘티로 시작하기
      </button>
      <button
        className="mentor-start"
        onClick={handleMentorStart}
        disabled={!isValidPhoneNumber(phoneNumber)}
      >
        멘토로 시작하기
      </button>
    </div>
  );
};