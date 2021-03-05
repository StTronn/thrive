import React from 'react'
import ThriveLandingPage from "./pages/ThriveLandingPage";
import MobileThriveLandingPage from "./pages/mobileThriveLandingPage";

import './styles/app.css';

function App() {
  if (window.innerWidth > 1000)
    return (
      <ThriveLandingPage />
    );
  else
    return <MobileThriveLandingPage />
}

export default App;
