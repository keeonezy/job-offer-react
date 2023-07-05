import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ContactsPopup } from "./ContactsPopup";

// function closeAllPopups() {
//   setIsAddPlacePopupOpen(false);
//   setIsEditAvatarPopupOpen(false);
//   setIsEditProfilePopupOpen(false);
//   setIsEditDeletePopupOpen(false);
//   setSelectedCard({});
// }

function App() {
  const [isContactsPopupOpen, setIsContactsPopupOpen] = React.useState(false);

  function handleContactsClick() {
    setIsContactsPopupOpen(true);
  }

  return (
    <div className="body">
      <div className="page">
        <Header
          onContactsPopup={handleContactsClick}
        />
        <Main />
        <Footer />

        <ContactsPopup isOpen={isContactsPopupOpen} />

      </div>
    </div>
  );
}

export default App;
