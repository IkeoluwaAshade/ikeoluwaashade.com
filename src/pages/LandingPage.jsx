import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/block/Themes/GlobalStyles';
import { lightTheme, darkTheme } from '../components/block/Themes/themes';
import Header from '../components/static/Header';
import HeroSection from '../components/layout/HeroSection'
import TechnologySection from '../components/layout/TechnologySection';
import EndorsementSection from '../components/layout/EndorsementSection';
import Footer from '../components/static/Footer';

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
        <TechnologySection />
        <EndorsementSection />
        <Footer />
    </ThemeProvider>
  )
}

export default LandingPage