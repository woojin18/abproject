import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { login } from "../api/loginApi"; // API 호출 메서드 가져오기

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await login({ email, password }); // API 호출
      alert("로그인 성공");
      console.log("로그인 성공:", data);
    } catch (error) {
      setErrorMessage(error.message); // 에러 메시지 상태에 저장
      alert("로그인 실패: " + error.message);
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={10} sm={8} md={4}>
        <Paper elevation={6} sx={{ p: 4 }}>
          <Typography component="h1" variant="h5" align="center" mb={2}>
            로그인
          </Typography>
          <Box component="form" noValidate onSubmit={handleLogin}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
          </Box>
          {errorMessage && (
            <Typography color="error" align="center" variant="body2">
              {errorMessage}
            </Typography>
          )}
          <Typography align="center" variant="body2" sx={{ mt: 2 }}>
            계정이 없으신가요? 회원가입
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;