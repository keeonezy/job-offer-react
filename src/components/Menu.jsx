import React from "react";

function Menu({ isOpen, onClose }) {
    return (
        <div className={`menu menu__right ${isOpen ? "menu_opened" : ""}`}>
            <div className="menu__group">
                <button className="button popup__close" type="button" onClick={onClose}></button>
                <h2 className="menu__title">Меню</h2>
                <nav className="header__nav">
                    <ul className="header__links" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <li className="header__li">
                            <a href="./index.html#skills" className="link header__link">Навыки</a>
                        </li>
                        <li className="header__li">
                            <a href="./index.html#example" className="link header__link">Мои работы</a>
                        </li>
                        <li className="header__li">
                            <a href="./index.html#contact" className="link header__link">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export { Menu };