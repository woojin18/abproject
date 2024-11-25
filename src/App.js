import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Router from "./Router"; // 중앙 라우터
import Login from "./modules/login/views/LoginView"; // 로그인 컴포넌트
import { BrowserRouter as RouterProvider, Route, Routes, Navigate } from "react-router-dom"; // React Router 사용
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
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 상태 관리

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
  <p>{message}</p> {/* message 값 출력 */}
</div>
      <RouterProvider>
        <Routes>
          {/* 로그인 상태에 따라 페이지 라우팅 */}
          <Route
            path="/"
            element={isAuthenticated ? <Router /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="*"
            element={<h1>404: Page Not Found</h1>} // 잘못된 경로 처리
          />
        </Routes>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;