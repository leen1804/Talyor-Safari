import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import GlobalStyles from './Global Styles';

import "./Montserrat/static/Montserrat-Italic.ttf"
import "./Montserrat/static/Montserrat-Bold.ttf"
import "./Open_Sans/static/OpenSans_Condensed-Bold.ttf"
import { ThemeProvider } from 'styled-components';
import theme from './theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
        
        </ThemeProvider>
    </React.StrictMode>,
    
);
