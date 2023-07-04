import React from "react";
import logo from "../images/icon/logo.svg"

function Header() {
    return (
        <div className="header__container">
            <header className="header">
                <a href="./" className="link">
                    <img src={logo} alt="Logotype" className="header__logo" loading="lazy" />
                </a>

                <nav className="header__nav">
                    <ul className="header__links">
                        <li className="header__li">
                            <a href="./#skills" className="link header__link">Навыки</a>
                        </li>
                        <li className="header__li">
                            <a href="./#example" className="link header__link">Мои работы</a>
                        </li>
                        <li className="header__li">
                            <a href="./#contact" className="link header__link">Контакты</a>
                        </li>
                        <li className="header__li">
                            <a href="//github.com/keeonezy" className="link header__link" target="_blank">GitHub</a>
                        </li>
                        <li className="header__li">
                            <a href="//behance.net/alexander-m1" className="link header__link" target="_blank">Behance</a>
                        </li>
                    </ul>
                </nav>

                <div className="header__container-button">
                    <button id="popupContact" className="button header__button button__contact-open" type="button">Написать
                        мне</button>
                    <button className="header__burger" type="button"></button>
                </div>
            </header>
        </div>
    )
}

export { Header };