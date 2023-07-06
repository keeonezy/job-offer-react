import React from "react";
import person from "../images/person.png";
import html5 from "../images/skills/Html5.svg";
import css3 from "../images/skills/Css3.svg";
import js from "../images/skills/Javascript.svg";
import git from "../images/skills/Git.svg";
import react from "../images/skills/React.svg";
import nodejs from "../images/skills/Nodejs.svg";
import webpack from "../images/skills/Webpack.svg";
import tilda from "../images/skills/Tilda.svg";
import figma from "../images/skills/Figma.svg";
import sketch from "../images/skills/Sketch.svg";
import photoshop from "../images/skills/Photoshop.svg";
import vscode from "../images/skills/Vscode.svg";
import filezilla from "../images/skills/Filezilla.svg";
import direct from "../images/skills/YandexDirect.svg";
import cloudflare from "../images/skills/Cloudflare.svg";
import windows from "../images/skills/Windows.svg";
import macos from "../images/skills/MacOS.svg";
import example1 from "../images/Example-1.svg";
import example2 from "../images/Example-2.svg";
import example3 from "../images/Example-3.svg";
import contact1 from "../images/icon/contact-1.svg";
import contact3 from "../images/icon/contact-3.svg";
import cicrle from "../images/icon/circle.svg";

function Main({ onContactsPopup }) {
    return (
        <main className="main">

            <div className="runString">
                {/* <marquee className="runString__text" scrollamount="10">Добро пожаловать ко мне на офферный сайт. Резюме высылаю при запросе</marquee> */}
                <p className="runString__text">Добро пожаловать ко мне на офферный сайт. Резюме высылаю при запросе</p>
            </div>

            <div className="offer__container" id="offer">
                <section className="offer">

                    <div className="offer__content">
                        <h1 className="offer__title">Я являюсь <span>веб разработчиком</span></h1>
                        <p className="offer__description">Более подробнее читай ниже</p>
                        <button id="popupContact" className="button offer__button button__contact-open" type="button" onClick={onContactsPopup}>Написать
                            мне</button>
                    </div>

                    <img src={person} alt="Offer" className="offer__image" loading="lazy" />

                </section>
            </div>


            <section className="skills" id="skills">
                <h2 className="skills__title">Инструменты и навыки</h2>

                <ul className="skills__cards">
                    <li className="skills__card">
                        <img src={html5} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">HTML 5</h3>
                        <p className="skills__description">Продвинутые навыки</p>
                    </li>

                    <li className="skills__card">
                        <img src={css3} alt="CSS3" className="skills__image" />
                        <h3 className="skills__subtitle">CSS 3</h3>
                        <p className="skills__description">Продвинутые навыки (БЭМ)</p>
                    </li>

                    <li className="skills__card">
                        <img src={js} alt="JavaScript" className="skills__image" />
                        <h3 className="skills__subtitle">JavaScript</h3>
                        <p className="skills__description">Базовые навыки</p>
                    </li>

                    <li className="skills__card">
                        <img src={git} alt="Git" className="skills__image" />
                        <h3 className="skills__subtitle">GIT</h3>
                        <p className="skills__description">Продвинутые навыки</p>
                    </li>

                    <li className="skills__card">
                        <img src={react} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">React</h3>
                        <p className="skills__description">В процессе изучения</p>
                    </li>

                    <li className="skills__card">
                        <img src={nodejs} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">NodeJS</h3>
                        <p className="skills__description">Настройка Express</p>
                    </li>

                    <li className="skills__card">
                        <img src={webpack} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Webpack</h3>
                        <p className="skills__description">Умение подключать</p>
                    </li>

                    <li className="skills__card">
                        <img src={tilda} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Tilda</h3>
                        <p className="skills__description">Zero-Block верстка</p>
                    </li>

                    <li className="skills__card">
                        <img src={figma} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Figma</h3>
                        <p className="skills__description">Продвинутые навыки</p>
                    </li>

                    <li className="skills__card">
                        <img src={sketch} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Sketch</h3>
                        <p className="skills__description">Базовые навыки</p>
                    </li>

                    <li className="skills__card">
                        <img src={photoshop} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Photoshop</h3>
                        <p className="skills__description">Базовые навыки</p>
                    </li>

                    <li className="skills__card">
                        <img src={vscode} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Vscode</h3>
                        <p className="skills__description">Работа с кодом</p>
                    </li>

                    <li className="skills__card">
                        <img src={filezilla} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Filezilla</h3>
                        <p className="skills__description">Подключение FTP, SFTP</p>
                    </li>

                    <li className="skills__card">
                        <img src={direct} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Yandex Direct</h3>
                        <p className="skills__description">Настройка рекламной компании</p>
                    </li>

                    <li className="skills__card">
                        <img src={cloudflare} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Cloudflare</h3>
                        <p className="skills__description">Подключение сервиса</p>
                    </li>

                    <li className="skills__card">
                        <img src={windows} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">Windows 10/11</h3>
                        <p className="skills__description">Понимание работы ОС</p>
                    </li>

                    <li className="skills__card">
                        <img src={macos} alt="HTML5" className="skills__image" />
                        <h3 className="skills__subtitle">MacOS</h3>
                        <p className="skills__description">Понимание работы ОС</p>
                    </li>
                </ul>
            </section>

            <div className="example__container" id="example">
                <section className="example">
                    <h2 className="service__title">Мои работы</h2>

                    <ul className="cards">
                        <li className="example__card">
                            <img src={example1} alt="Post2Soc example" className="example__image" loading="lazy" />
                            <a className="link example__link" href="//post2soc.com/ru/" target="_blank" rel="nofollow">Перейти
                                на сайт</a>
                            <p className="example__description">UI / UX дизайн, верстка, разработка ТЗ</p>
                            <h3 className="example__title">Отложенный постинг ВК и Телеграм</h3>
                        </li>

                        <li className="example__card">
                            <img src={example2} alt="WotInside example" className="example__image" loading="lazy" />
                            <a className="link example__link" href="https://wotinside.com/ru/" target="_blank" rel="nofollow">Перейти на
                                сайт</a>
                            <p className="example__description">Обновление UI / UX дизайн, разработка ТЗ</p>
                            <h3 className="example__title">Моды для игре по танкам</h3>
                        </li>

                        <li className="example__card">
                            <img src={example3} alt="WotGive example" className="example__image" loading="lazy" />
                            <a className="link example__link" href="https://wotgive.com/" target="_blank" rel="nofollow">Перейти
                                на сайт</a>
                            <p className="example__description">Обновление UI / UX дизайн, разработка ТЗ</p>
                            <h3 className="example__title">Продажа предметов из танков</h3>
                        </li>
                    </ul>
                </section>
            </div>

            <section className="contact" id="contact">
                <div className="contact__info">
                    <h2 className="contact__title">Контакты</h2>
                    <p className="contact__description">С предложением сотрудничества</p>
                    <ul className="contact__cards">
                        <li className="contact__card">
                            <img src={contact1} alt="" className="contact__icon" loading="lazy" />
                            <p className="contact__card-description">Кнопки ниже для связи WhatsApp и Telegram</p>
                        </li>

                        <li className="contact__card">
                            <img src={contact3} alt="" className="contact__icon" loading="lazy" />
                            <p className="contact__card-description">Отвечаю по московскому времени с 11:00 до 18:00 МСК</p>
                        </li>
                    </ul>

                    <div className="contact__container">
                        <div className="contact__buttons">
                            <button className="button contact__button-wa"
                                type="button" onClick={onContactsPopup}>Написать в
                                WhatsApp</button>
                            <button className="button contact__button-tg"
                                type="button" onClick={onContactsPopup}>Написать в
                                Telegram</button>
                        </div>

                        <img src={cicrle} alt="" className="contant__cicrcle" loading="lazy" />

                    </div>
                </div>

                <ul className="contact__cards1">
                    <li className="contact__card1">
                        <h3 className="contact__subtitle">1. Место работы</h3>
                        <p className="contact__desc">Ездить из Московской области Ярославское направление. Рассматриваю возле
                            станций
                            МЦД, которые рядом с Ростокино или возле метро Комсомольская</p>
                    </li>

                    <li className="contact__card1">
                        <h3 className="contact__subtitle">2. Формат работы</h3>
                        <p className="contact__desc">Могу работать в офисе над проект(ом/ами), но по возможности гибридная
                            работа (Один день в неделю хотелось бы удаленной работы)</p>
                    </li>

                    <li className="contact__card1">
                        <h3 className="contact__subtitle">3. Условия сотрудничества</h3>
                        <p className="contact__desc">Рассматриваю сотрудничество как самозанятого. График пн-пт с 9 до 18
                            МСК с перерывом на обед 1 час. Зарплата, если есть возможность частями 2 раза в месяц</p>
                    </li>

                    <li className="contact__card1">
                        <h3 className="contact__subtitle">4. Обговаривается отдельно при длительном сотрудничестве</h3>
                        <p className="contact__desc">Отпуск 2 раза в год по 2 недели каждый. Оплата во время него считается в 2
                            раза ниже. В этом году с 31 июля по 05 августа, а так же с 14 по 18 августа без оплаты.</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export { Main };