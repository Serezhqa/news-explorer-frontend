import React, { useCallback, useRef } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import card1 from '../../images/search-card-1.png';
import card2 from '../../images/search-card-2.png';
import card3 from '../../images/search-card-3.png';

function App(props) {
  const history = useHistory();

  // Тестовые данные (из макета) для имитации результатов поиска
  const searchQueryResultsExample = [
    {
      source: {
        name: 'лента.ру',
        url: 'https://lenta.ru'
      },
      title: 'Национальное достояние – парки',
      publishedAt: '2 августа, 2019',
      description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
      urlToImage: card1
    },
    {
      source: {
        name: 'медуза',
        url: 'https://meduza.io'
      },
      title: 'Лесные огоньки: история одной фотографии',
      publishedAt: '2 августа, 2019',
      description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      urlToImage: card2
    },
    {
      source: {
        name: 'РИА',
        url: 'https://ria.ru'
      },
      title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
      publishedAt: '2 августа, 2019',
      description: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где теперь наконец-то может появиться.',
      urlToImage: card3
    }
  ];

  // Тестовые данные (из макета) для имитации сохранённых статей
  const savedNewsExample = [
    {
      source: {
        name: 'лента.ру',
        url: 'https://lenta.ru'
      },
      title: 'Национальное достояние – парки',
      publishedAt: '2 августа, 2019',
      description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
      urlToImage: card1,
      keyword: 'Природа'
    },
    {
      source: {
        name: 'медуза',
        url: 'https://meduza.io'
      },
      title: 'Лесные огоньки: история одной фотографии',
      publishedAt: '2 августа, 2019',
      description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      urlToImage: card2,
      keyword: 'Природа'
    },
    {
      source: {
        name: 'РИА',
        url: 'https://ria.ru'
      },
      title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
      publishedAt: '2 августа, 2019',
      description: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где теперь наконец-то может появиться.',
      urlToImage: card3,
      keyword: 'Тайга'
    },
    {
      source: {
        name: 'лента.ру',
        url: 'https://lenta.ru'
      },
      title: 'Национальное достояние – парки',
      publishedAt: '2 августа, 2019',
      description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
      urlToImage: card1,
      keyword: 'Парки'
    },
    {
      source: {
        name: 'медуза',
        url: 'https://meduza.io'
      },
      title: 'Лесные огоньки: история одной фотографии',
      publishedAt: '2 августа, 2019',
      description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      urlToImage: card2,
      keyword: 'Фотография'
    }
  ];

  const [activePage, setActivePage] = React.useState('main');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [searchQueryResults, setSearchQueryResults] = React.useState(searchQueryResultsExample);
  const [savedNews, setSavedNews] = React.useState(savedNewsExample);
  const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const [loginPopupOpened, setLoginPopupOpened] = React.useState(false);
  const [registerPopupOpened, setRegisterPopupOpened] = React.useState(false);
  const loginPopupOpenedRef = useRef();
  loginPopupOpenedRef.current = loginPopupOpened;

  function setMainPageActive() {
    setActivePage('main');
  }

  function setSavedNewsPageActive() {
    setActivePage('saved-news');
  }

  function toggleMobileMenu() {
    setMobileMenuOpened(!mobileMenuOpened);
  }

  function onKeydown(evt) {
    if (evt.key === 'Escape') {
      loginPopupOpenedRef.current ? closeLoginPopup() : closeRegisterPopup();
    }
  }

  const memoizedOnKeydown = useCallback(onKeydown, []);

  function onOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      loginPopupOpenedRef.current ? closeLoginPopup() : closeRegisterPopup();
    }
  }

  const memoizedOnOverlayClick = useCallback(onOverlayClick, []);

  function openLoginPopup() {
    document.addEventListener('keydown', memoizedOnKeydown);
    document.querySelector('.popup_type_login').addEventListener('click', memoizedOnOverlayClick);
    setLoginPopupOpened(true);
  }

  function closeLoginPopup() {
    setLoginPopupOpened(false);
    document.querySelector('.popup_type_login').removeEventListener('click', memoizedOnOverlayClick);
    document.removeEventListener('keydown', memoizedOnKeydown);
  }

  function openRegisterPopup() {
    document.addEventListener('keydown', memoizedOnKeydown);
    document.querySelector('.popup_type_register').addEventListener('click', memoizedOnOverlayClick);
    setRegisterPopupOpened(true);
  }

  function closeRegisterPopup() {
    setRegisterPopupOpened(false);
    document.querySelector('.popup_type_register').removeEventListener('click', memoizedOnOverlayClick);
    document.removeEventListener('keydown', memoizedOnKeydown);
  }

  function changePopup() {
    if (loginPopupOpened) {
      closeLoginPopup();
      openRegisterPopup();
    } else {
      closeRegisterPopup();
      openLoginPopup();
    }
  }

  function handleLogout() {
    setMainPageActive();
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <div className="page">
      <Header
        activePage={activePage}
        setMainPageActive={setMainPageActive}
        setSavedNewsPageActive={setSavedNewsPageActive}
        loggedIn={loggedIn}
        mobileMenuOpened={mobileMenuOpened}
        toggleMobileMenu={toggleMobileMenu}
        openLoginPopup={openLoginPopup}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route path="/" exact>
          <Main
            activePage={activePage}
            searchQueryResults={searchQueryResults}
            loggedIn={loggedIn}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNews setSavedNewsPageActive={setSavedNewsPageActive} savedNews={savedNews} />
        </Route>
      </Switch>
      <Footer setMainPageActive={setMainPageActive} />

      <LoginPopup loginPopupOpened={loginPopupOpened} onClose={closeLoginPopup} onLinkClick={changePopup} />
      <RegisterPopup registerPopupOpened={registerPopupOpened} onClose={closeRegisterPopup} onLinkClick={changePopup} />
    </div>
  )
}

export default App;
