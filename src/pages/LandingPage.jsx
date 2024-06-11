import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/block/Themes/GlobalStyles';
import { lightTheme, darkTheme } from '../components/block/Themes/themes';
import Header from '../components/static/Header';
import HeroSection from '../components/layout/HeroSection'

const LandingPage = () => {

    const [theme, setTheme] = useState('light');
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <HeroSection />
    </ThemeProvider>
  )
}

export default LandingPage