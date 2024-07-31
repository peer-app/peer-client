import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const OAuthCallback = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/kakao/callback`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
          })
        .then(response => response.json())
        .then(data => {
          // 액세스 토큰 및 사용자 정보 처리
          console.log('Login successful:', data);
          localStorage.setItem('refreshToken', data.refreshToken);
          localStorage.setItem('accessToken', data.accessToken);
          if(data.role==="guest"){
            navigate('/signup');// 로그인 후 리다이렉션
          }else if(data.role==="mentor"){

          }else if(data.role==="mentee"){

          }
        })
        .catch(error => {
          console.error('Error during authentication:', error);
        });
    }
  }, []);

  return <div style={{ 
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '47%',
    fontSize: 'large' }}>Loading</div>;
};