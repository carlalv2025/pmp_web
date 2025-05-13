import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import IntroSection from './components/IntroSection/IntroSection';
import WhoWeAreSection from './components/WhoWeAreSection/WhoWeAreSection';
import ProblemSection from './components/ProblemSection/ProblemSection';
import FinalMileSection from './components/FinalMileSection/FinalMileSection';
import WhatWeDoSection from './components/WhatWeDoSection/WhatWeDoSection';
import WhereWeWorkSection from './components/WhereWeWorkSection/WhereWeWorkSection';
import WhoWeWorkWithSection from './components/WhoWeWorkWithSection/WhoWeWorkWithSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import LMSSection from './components/LMSSection/LMSSection';
import CallToActionSection from './components/CallToActionSection/CallToActionSection';
import TypeformEmbed from './components/TypeformEmbed/TypeformEmbed'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <IntroSection />
      <WhoWeAreSection />
      <ProblemSection />
      <FinalMileSection />
      <WhatWeDoSection />
      <WhereWeWorkSection />
      <WhoWeWorkWithSection />
      <HowItWorksSection />
         <LMSSection />
      <CallToActionSection />
          <TypeformEmbed /> 
      <Footer />
  
    </ThemeProvider>
  );
}

export default App;