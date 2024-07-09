import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import HeroSection from './HeroSection';
import TechnologySection from './TechnologySection';
import EndorsementSection from './EndorsementSection';
import FooterSection from '../../components/static/FooterSection';

import { GlobalStyles } from '../../components/block/Themes/GlobalStyles';
import { lightTheme, darkTheme } from '../../components/block/Themes/themes';


const Home = () => {

    const [theme, setTheme] = useState('light');
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <HeroSection />
        {/* <TechnologySection /> */}
        {/* <EndorsementSection /> */}
        {/* <FooterSection /> */}
    </ThemeProvider>
  )
}

export default Home