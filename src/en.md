<!DOCTYPE html>
<html lang="en" class="page">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Museum 2</title>
    <link 
      rel="shortcut icon" 
      href="./images/icon/logo-favicon.svg" 
      type="image/x-icon"
    >
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles/main.scss">
  </head>
  <body class="page__body">
    <header class="page__header header">
      <div class="header__container">
        <div class="container">
          <div class="header__top top">
            <div class="top__flex-container">
              <a href="#" class="logo">
                <img 
                  src="./images/icon/logo.svg" 
                  alt="NAMU-logo"
                  class="logo__image"
                >
              </a>
      
              <div class="top__container">
                <form 
                  action="#" 
                  method="get" 
                  class="change-language"
                >
                  <select 
                    name="language" 
                    id="language"
                    class="change-language__field"
                  >
                    <option value="ua" class="change-language__option">
                      UA
                    </option>
      
                    <option value="en" class="change-language__option" selected>
                      EN
                    </option>
                  </select>
                </form>
        
                <a href="#sidebar" class="top__menu">
                  <img 
                    src="./images/icon/menu.svg" 
                    alt="open menu"
                    class="top__image"
                  >
                </a>
              </div>
            </div>
          </div>
  
          <p class="header__event-period">
            August 10 - November 10
          </p>
  
          <h1 class="header__title">
            Art of the 19th - 20th centuries.
          </h1>
  
          <p class="header__paragraph">
            The contribution of Ukrainian artists to the world culture of the 19th and 20th centuries.
          </p>

          <a href="#">
            <button class="
              header__button 
              button 
              button--main
            ">
              Buy a ticket
            </button>
          </a>
  
          <div class="header__event-period-bottom">
            10.08 - 10.10
          </div>
        </div>

        <div class="header__background"></div>
      </div>
    </header>

    <div class="page__sidebar sidebar" id="sidebar">
      <div class="sidebar__top top">
        <div class="container">
          <div class="top__flex-container">
            <a href="#" class="logo">
              <img 
                src="./images/icon/logo.svg" 
                alt="NAMU-logo"
                class="logo__image"
              >
            </a>
    
            <div class="top__container">
              <form 
                action="#" 
                method="get" 
                class="sidebar__change-language change-language"
              >
                <select 
                  name="language" 
                  id="language-sidebar"
                  class="change-language__field"
                >
                  <option value="ua" class="change-language__option">
                    UA
                  </option>
    
                  <option value="en" class="change-language__option" selected>
                    EN
                  </option>
                </select>
              </form>
      
              <a href="#" class="top__menu">
                <img 
                  src="./images/icon/cross.svg" 
                  alt="close menu"
                  class="top__image"
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar__content-container">
        <div class="container">
          <div class="sidebar__container">
            <div class="sidebar__place">
              <div class="sidebar__items">
                <p class="sidebar__name-item">
                  Schedule today:
                </p>
      
                <p class="sidebar__content-item">
                  12:00 - 19:00
                </p>
              </div>
      
              <div class="sidebar__items">
                <p class="sidebar__name-item">
                  Address:
                </p>
      
                <a 
                  href="https://goo.gl/maps/9hBCm5outDMgfvUs9" 
                  class="sidebar__content-item sidebar__link"
                  target="_blank"
                >
                  Kyiv, str. M. Hrushevsky, 6
                </a>
              </div>
            </div>
    
            <nav class="sidear__nav nav">
              <ul class="nav__list">
                <li class="nav__item nav__item--sidebar">
                  <a href="#actual-exhibitions" class="nav__link nav__link--sidebar">
                    Actual exhibitions
                  </a>
                </li>
    
                <li class="nav__item nav__item--sidebar">
                  <a href="#upcoming-events" class="nav__link nav__link--sidebar">
                    Upcoming events
                  </a>
                </li>
    
                <li class="nav__item nav__item--sidebar">
                  <a href="#news" class="nav__link nav__link--sidebar">
                    News
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <a href="#">
            <button class="
              sidebar__button 
              button 
              button--main
            ">
              Buy a ticket
            </button>
          </a>
        </div>
      </div>

      <div class="sidebar__background"></div>
    </div>

    <main>
      <section 
        class="page__actual-exhibitions actual-exhibitions" 
        id="actual-exhibitions"
      >
        <div class="container">
          <div class="
            page__title-container 
            title
          ">
            <h2 class="page__section-title">
              Actual exhibitions
            </h2>

            <a href="#">
              <button class="
                button
                button--primary
                title__button
              ">
                Archive of exhibitions
              </button>
            </a>
          </div>

          <div class="actual-exhibitions__cards">
            <div class="card actual-exhibitions__card">
              <picture>
                <source 
                  srcset="./images/paintings/image1-1280px.jpg"
                  media="(min-width: 1280px)" 
                >
                <img 
                  src="./images/paintings/image1-768px.jpg" 
                  alt="painting"
                  class="card__image "
                >
              </picture>
    
              <span class="card__date">
                11.07 - 22.09
              </span>
    
              <h3 class="card__title">
                Curated exhibition "Angels"
              </h3>
            
              <p class="card__paragraph">
                The exhibition project "Angels" is a landmark event for Ukrainian culture and at the same time the largest...
              </p>
    
              <a href="#" class="
                card__button 
                button
                button--main
              ">
                Buy a ticket
              </a>
            </div>

            <div class="
              card 
              actual-exhibitions__card
              actual-exhibitions__card--last
            ">
              <picture>
                <source 
                  srcset="./images/paintings/image2-1280px.jpg"
                  media="(min-width: 1280px)" 
                >
                <img 
                  src="./images/paintings/image2-768px.jpg" 
                  alt="painting"
                  class="card__image"
                >
              </picture>

              <span class="card__date">
                Works constantly
              </span>
    
              <h3 class="card__title">
                Art of the 20th century — XXI century.
              </h3>

              <p class="card__paragraph">
                Iconic works by Alla Horska, Mykola Samokysh, Fedor Krychevsky and other artists.
              </p>
    
              <a href="#" class="
                card__button 
                button
                button--main
              ">
                Buy a ticket
              </a>
            </div>
          </div>

          <a href="#">
            <button class="
              button
              button--primary
            ">
              Archive of exhibitions
            </button>
          </a>
        </div>
      </section>

      <section 
        class="page__upcoming-events upcoming-events"
        id="upcoming-events"
      >
        <div class="container">
          <div class="
            page__title-container 
            title
          ">
            <h2 class="page__section-title">
              Upcoming events
            </h2>

            <a href="#">
              <button class="
                button
                button--primary
                title__button
              ">
                Calendar of events
              </button>
            </a>
          </div>

          <div class="card upcoming-events__card">
            <img 
              src="./images/paintings/image3.jpg" 
              alt="painting"
              class="card__image upcoming-events__image"
            >

            <div class="upcoming-events__card-container">
              <span class="card__date">
                14.08 at 13:00
              </span>
    
              <h3 class="card__title">
                Curated tours by Pavel Gudimov
              </h3>
            
              <p class="card__paragraph">
                The secrets of preparation, the history of the exhibits, the magic of action before and during your presence will unfold...
              </p>

              <a href="#">
                <button class="
                  card__button 
                  button
                  button--main
                ">
                  Register
                </button>
              </a>
            </div>
          </div>

          <div class="
            card 
            upcoming-events__card
            upcoming-events__card--last
          ">
            <img 
              src="./images/paintings/image4.jpg" 
              alt="painting"
              class="card__image upcoming-events__image"
            >

            <div class="upcoming-events__card-container">
              <span class="card__date">
                16.08 at 13:00
              </span>
    
              <h3 class="card__title">
                Master class "Travel to Australia"
              </h3>
            
              <p class="card__paragraph">
                This Sunday at 2:00 p.m., the last point of the round-the-world trip awaits art travelers - Australia.
              </p>

              <a href="#">
                <button class="
                  card__button 
                  button
                  button--main
                ">
                  Register
                </button>
              </a>
            </div>
          </div>

          <a href="#">
            <button class="
              button
              button--primary
            ">
              Calendar of events
            </button>
          </a>
        </div>
      </section>

      <section class="page__visit-to-museum visit-to-museum">
        <div class="container">
          <div class="visit-to-museum__container">
            <h2 class="visit-to-museum__title">
              Plan a visit to the museum
            </h2>
  
            <p class="visit-to-museum__paragraph">
              Choose a convenient day, register for events of interest, buy a ticket in advance so that nothing prevents you from enjoying art.
            </p>

            <a href="#">
              <button class="
                button
                button--main
              ">
                Begin
              </button>
            </a>
          </div>
        </div>
      </section>

      <section 
        class="page__news news" 
        id="news"
      >
        <div class="container">
          <div class="
            page__title-container 
            title
          ">
            <h2 class="page__section-title">
              News
            </h2>

            <a href="#">
              <button class="
                button
                button--primary
                title__button
              ">
                All news
              </button>
            </a>
          </div>

          <div class="news__container-card">
            <div class="
              card-news 
              news__card-news
            ">
              <picture>
                <source 
                  srcset="./images/paintings/image5-1280px.jpg"
                  media="(min-width: 1280px)" 
                >
                <img 
                  src="./images/paintings/image5.jpg" 
                  alt="painting"
                  class="card-news__image"
                >
              </picture>

              <span class="card-news__date">
                August 9, 2019
              </span>
    
              <h3 class="card-news__title">
                Announcement of the winner
              </h3>
            
              <p class="card-news__paragraph">
                Friends, today is Friday! And that means it's time to announce the winner of the raffle...
              </p>
            </div>

            <div class="
              card-news 
              news__card-news
              news__card-news--last
            ">
              <picture>
                <source 
                  srcset="./images/paintings/image6-1280px.jpg"
                  media="(min-width: 1280px)" 
                >
                <img 
                  src="./images/paintings/image6.jpg" 
                  alt="painting"
                  class="card-news__image "
                >
              </picture>

              <span class="card-news__date">
                August 9, 2019
              </span>
    
              <h3 class="card-news__title">
                International Cat Day
              </h3>
            
              <p class="card-news__paragraph">
                A museum with lions cannot simply take and miss International Cat Day!
              </p>
            </div>
          </div>
          
          <a href="#">
            <button class="
              card__button 
              button
              button--primary
            ">
              All news
            </button>
          </a>
        </div>
      </section>

      <section class="page__subscription subscription">
        <div class="container">
          <div class="subscription__container">
            <h2 class="page__section-title subscription__title">
              Subscribe to the digest
            </h2>
  
            <p class="subscription__paragraph">
              Be the first to hear about museum news and raffles, receive invitations to events and read articles from curators
            </p>
          </div>

          <form 
            action="#"
            method="post"
            class="form"
            id="form"
          >
            <input 
              type="email"
              name="email"
              id="email"
              class="form__field"
              placeholder="e-mail"
              required
            >

            <button form="form" class="
              form
              form__submit
              button
              button--main
            ">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>

    <footer class="page__footer footer">
      <div class="container">
        <div class="footer__content">
          <section class="footer__section contacts">
            <h2 class="footer__section-title">
              Contacts
            </h2>
  
            <div class="contacts__container">
              <a 
                href="https://goo.gl/maps/9hBCm5outDMgfvUs9" 
                target="_blank"
                class="contacts__link"
              >
                Kyiv,
                <br>
                st. M. Hrushevsky, 6
              </a>
  
              <p>
                tel.
                <a href="tel:278-13-57" class="contacts__link">
                  278-13-57
                </a>,

                <a href="tel:278-74-54" class="contacts__link">
                  278-74-54
                </a>
              </p>
  
              <a href="mailto:info@namu.kiev.ua" class="contacts__link">
                info@namu.kiev.ua
              </a>
            </div>
  
            <div class="contacts__social social">
              <a 
                href="https://www.facebook.com/" 
                class="social__link"
                target="_blank"
              >
                <img src="./images/icon/facebook.svg" alt="facebook">
              </a>
  
              <a 
                href="https://twitter.com/" 
                class="social__link"
                target="_blank"
              >
                <img src="./images/icon/twitter.svg" alt="twitter">
              </a>
  
              <a 
                href="https://telegram.org/" 
                class="social__link"
                target="_blank"
              >
                <img src="./images/icon/telegram.svg" alt="telegram">
              </a>
  
              <a 
                href="https://www.instagram.com/" 
                class="social__link"
                target="_blank"
              >
                <img src="./images/icon/instagram.svg" alt="instagram">
              </a>
            </div>
          </section>
  
          <section class="footer__section work-schedule">
            <h2 class="footer__section-title">
              Work schedule
            </h2>
  
            <p class="work-schedule__paragraph">
              MON: day off
              <br>
              TUE: day off
              <br>
              WED: 10:00 - 17:00
              <br>
              THU: 10:00 - 17:00
              <br>
              FRI: 12:00 - 19:00
              <br>
              SAT: 11:00 - 18:00
              <br>
              SUN: 10:00 - 17:00
            </p>
          </section>
  
          <nav class="footer__nav nav">
            <ul class="nav__list">
              <li class="nav__item footer__section-title">
                <a href="#" class="nav__link nav__link--footer-first">
                  Main
                </a>
              </li>
  
              <li class="nav__item nav__item--footer">
                <a href="#actual-exhibitions" class="nav__link nav__link--footer">
                  Exhibitions
                </a>
              </li>
  
              <li class="nav__item nav__item--footer">
                <a href="#upcoming-events" class="nav__link nav__link--footer">
                  Events
                </a>
              </li>
  
              <li class="nav__item nav__item--footer">
                <a href="#news" class="nav__link nav__link--footer">
                  News
                </a>
              </li>
            </ul>
          </nav>
        </div>
        

        <div class="footer__container">
          <div class="footer__copyright-protection copyright-protection">
            <span class="copyright-protection__item">
              © 2010 — 2020
            </span>
  
            <span class="copyright-protection__item">
              Privacy — Terms
            </span>
          </div> 
  
          <a href="#" class="scroll-up">
            <img src="./images/icon/scroll up.svg" alt="scroll up">
          </a>
        </div>
      </div>
    </footer>

    <script type="text/javascript" src="scripts/main.js"></script>
  </body>
</html>
