import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ContactsPopup } from "./ContactsPopup";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-LX6NP84ZKB"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  const [isContactsPopupOpen, setIsContactsPopupOpen] = React.useState(false);

  function handleContactsClick() {
    setIsContactsPopupOpen(true);
  }

  function handlePopupsClose() {
    setIsContactsPopupOpen(false);
  }

  return (
    <div className="body">
      <div className="page">
        <Header
          onContactsPopup={handleContactsClick}
        />
        <Main
          onContactsPopup={handleContactsClick}
        />
        <Footer
        />

        <ContactsPopup isOpen={isContactsPopupOpen} onClose={handlePopupsClose} />

      </div>
    </div>
  );
}

export default App;
