import React from "react";
import "./Login.css";

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY; // 클라이언트 ID 환경변수
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI; // 리다이렉트 URI 환경변수

export const Login = ({ className, ...props }) => {
  const handleLogin = () => {
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    //const authUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&scope=profile_nickname%20profile_image%20account_email&state=_6UpGCA49LKIoKb6TvSNz38KGXeP6UJMA0ysj-jZVVc%3D&redirect_uri=${REDIRECT_URI}`;
    window.location.href = authUrl;
  };

  return (
    <div className={"login " + className}>
      <div className="peer">
        <span>
          <span className="peer-span">PEER</span>
        </span>
      </div>
      <div className="div1">친구가 상담해주는 </div>
      <div className="div2">사이드 프로젝트 익명 커뮤니티 </div>
      <div className="div3">
        여러분의 사이드 프로젝트
        <br />
        고충을 들어드립니다.
      </div>
      <img className="fox" src="img/fox.png" />
      <img
        className="kakaoLogin"
        src="img/kakaoLogin.png"
        onClick={() => handleLogin()}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};