import React from "react";

function ContactsPopup({ isOpen }) {
    return (
        <div className={`popup popup__contact ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__group">
                <button className="button popup__close" type="button" aria-label="Закрыть"></button>
                <h2 className="popup__title">Напишите мне</h2>
                <button className="button popup__button-wg" type="button">Написать в
                    WhatsApp</button>
                <button className="button popup__button-tg" type="button">Написать
                    в Telegram</button>
            </div>
        </div>
    )
}

export { ContactsPopup };