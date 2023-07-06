import React from "react";

// function blankUrl(url) {
//     window.open(url, '_blank');
// }

function ContactsPopup({ isOpen }) {

    const blankUrl = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className={`popup popup__contact ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__group">
                <button className="button popup__close" type="button" aria-label="Закрыть"></button>
                <h2 className="popup__title">Напишите мне</h2>
                <button className="button popup__button-wg" type="button" onClick={() => blankUrl('https://wa.me/79363142131')}>Написать в
                    WhatsApp</button>
                <button className="button popup__button-tg" type="button" onClick={() => blankUrl('https://t.me/wild_aleksander')}>Написать
                    в Telegram</button>
            </div>
        </div>
    )
}

export { ContactsPopup };