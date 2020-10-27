import React from 'react';

import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__title">Сохранённые статьи</p>
      <p className="saved-news-header__quantity">Сергей, у вас 5 сохранённых статей</p>
      <p className="saved-news-header__keywords">
        По ключевым словам: <span className="saved-news-header__keyword">Природа</span>, <span className="saved-news-header__keyword">Тайга</span> и <span className="saved-news-header__keyword">2-м другим</span>
      </p>
    </section>
  )
}

export default SavedNewsHeader;
