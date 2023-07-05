import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-LX6NP84ZKB"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
