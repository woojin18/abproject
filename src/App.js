// src/App.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Sidebar />
            <Container>
                <Typography variant="h4" gutterBottom>
                    Welcome to Your Budget App
                </Typography>
                {/* 나머지 콘텐츠 */}
            </Container>
        </ThemeProvider>
    );
}

export default App;
