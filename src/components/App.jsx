import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ContactsPopup } from "./ContactsPopup";
import { Menu } from "./Menu";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-LX6NP84ZKB"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  const [isContactsPopupOpen, setIsContactsPopupOpen] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handleContactsClick() {
    setIsContactsPopupOpen(true);
  }

  function handleMenuClick() {
    setMenuOpen(true);
  }

  function handlePopupsClose() {
    setIsContactsPopupOpen(false);
    setMenuOpen(false);
  }

  return (
    <div className="body">
      <div className="page">
        <Header
          onContactsPopup={handleContactsClick}
          onMenu={handleMenuClick}
        />
        <Main
          onContactsPopup={handleContactsClick}
        />
        <Footer
        />

        <ContactsPopup isOpen={isContactsPopupOpen} onClose={handlePopupsClose} />
        <Menu isOpen={isMenuOpen} onClose={handlePopupsClose} />

      </div>
    </div>
  );
}

export default App;
