// src/App.jsx
import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Router from "./Router";
import { fetchHello } from "./api/helloApi";
import AddTransaction from './pages/AddTransaction';

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
  return (
    <div>
      <h1>Budget Application</h1>
      <AddTransaction /> {/* AddTransaction 컴포넌트를 렌더링 */}
    </div>
  );
}

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const getHelloMessage = async () => {
//       try {
//         const data = await fetchHello();
//         setMessage(data.message || data); // 데이터를 적절히 처리
//       } catch (error) {
//         console.error("Error fetching hello message:", error);
//         setMessage("Failed to fetch message");
//       }
//     };

//     getHelloMessage();
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div>
//         <h1>Spring Boot API Response:</h1>
//         <p>{message}</p>
//       </div>
//       <Router />
//     </ThemeProvider>
//   );
// }

export default App;
