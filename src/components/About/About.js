import React from 'react';

import './About.css';
import avatar from '../../images/avatar.jpg';

function About(props) {
  return (
    <section className="about">
      <img className="about__avatar" src={avatar} alt="Моё фото" />
      <div className="about__container">
        <p className="about__subtitle">Об авторе</p>
        <p className="about__paragraph">
          Меня зовут Сергей Подрябинников и это - выпускной проект в рамках обучения в "Яндекс.Практикум" на направлении веб-разработки.
          С нуля были изучены HTML, CSS, JavaScript, React и NodeJS, работа с гитом.
        </p>
        <p className="about__paragraph">
          Данная работа представляет собой агрегацию всех полученных знаний и даёт возможность применить их на практике,
          самостоятельно написав собственное приложение - сайт поиска новостей с регистрацией, авторизацией и возможностью сохранения новостей в личном кабинете.
          Поиск новостей выполнен через обращения к NewsApi, весь остальной бэкенд разработан самостоятельно.
        </p>
      </div>
    </section>
  )
}

export default About;
