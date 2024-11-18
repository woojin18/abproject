// src/App.jsx
import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Router from "./Router"; // 중앙 라우터
import { fetchHello } from "./modules/home/api/homeApi"; // Home 모듈의 API 호출

// MUI 테마 설정
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const [message, setMessage] = useState("");

  // Spring Boot API 호출
  useEffect(() => {
    const getHelloMessage = async () => {
      try {
        const data = await fetchHello();
        setMessage(data.message || data); // API 응답 처리
      } catch (error) {
        console.error("Error fetching hello message:", error);
        setMessage("Failed to fetch message");
      }
    };

    getHelloMessage();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>Spring Boot API Response:</h1>
        <p>{message}</p>
      </div>
      {/* 중앙 라우터를 통해 페이지 관리 */}
      <Router />
    </ThemeProvider>
  );
}

export default App;