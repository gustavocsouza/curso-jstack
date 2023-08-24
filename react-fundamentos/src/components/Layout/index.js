import React from 'react';

import Routes from '../../Routes';

import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <Routes />
      <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
