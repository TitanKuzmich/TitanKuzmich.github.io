<?php
date_default_timezone_set("Moscow");
$current_time = date("H");
?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Integra</title>
    <link rel="stylesheet" type="text/css" href="css/animate.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
    <link rel="stylesheet" type="text/css" href="css/featherlight.css"/>
    <link rel="stylesheet" type="text/css" href="style.css">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,700|Raleway:300,400,500,700|Poppins:300,400,500,600&display=swap"
          rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <script src="js/wow.min.js"></script>
    <link rel="apple-touch-icon" href="fav/favicon.png">
    <link rel="icon" type="image/png" sizes="192x192" href="fav/favicon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="fav/favicon.png">
    <link rel="icon" type="image/png" sizes="96x96" href="fav/favicon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="fav/favicon.png">
    <link rel="manifest" href="fav/favicon.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="fav/favicon.png">
    <meta name="theme-color" content="#ffffff">
</head>

<body>

<header>
    <div class="identity">
        <div class="container header-items">

            <h1><a href="#"><img src="images/logo.png" alt="INTEGRA"></a></h1>

            <nav role="navigation">

                <label for="show-menu" class="show-menu" onClick="">&nbsp;</label>
                <input type="checkbox" id="show-menu" role="button" onClick="">

                <ul id="menu" onClick="">
                    <li><a href="#" onClick="document.getElementById('show-menu').checked = false;">В начало</a></li>
                    <li><a href="#about" onClick="document.getElementById('show-menu').checked = false;">О нас</a></li>
                    <li><a href="#strategies" onClick="document.getElementById('show-menu').checked = false;">Механизмы
                            генерации дохода</a></li>
                    <li><a href="#contacts" onClick="document.getElementById('show-menu').checked = false;">Контакты</a>
                    </li>
                </ul>
            </nav>

        </div>

    </div>
</header>

<section class="featured-hero">
    <video autoplay muted playsinline id="video">
        <source src="images/video.mp4" type="video/mp4">
    </video>
    <div class="video_overlay">
        <?php if ($current_time < 20 and $current_time >= 10): ?>
            <div class="call_wrapper title_call">Звоните прямо сейчас!
                <div class="contact-content">
                    <div class="office_title">
                        <p>
                            <a href="tel:84951288119">8(495) 128-81-19</a>
                            <a href="tel:89652099116">8(965) 209-91-16</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="call_wrapper call_wrapper__right title_call">
                Или же просто оставьте заявку<br>и мы Вам перезвоним
                <br>
                <button class="btn-call-modal">оставить заявку</button>
            </div>
        <?php else:?>
            <div class="call_wrapper call_wrapper__right title_call">
                Работаем с 10:00 до 20:00
                <br>
                Оставте заявку и мы Вам перезвоним
                <button class="btn-call-modal">оставить заявку</button>
            </div>
        <?php endif; ?>

        <div class="main_title">
            <h2>ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ</h2>
            <h4 class="subtitle">Доверительное управление недвижимостью в Москве</h4>
            <button class="btn-call-modal less641px">оставить заявку</button>
            <a href="#about"><img class="darr" src="images/icon-darr.svg" alt=""/></a>
        </div>
    </div>

    <div id="video-wipe"></div>
</section>

<section class="stats">
    <div class="container">
        <ul class="stats-icons">
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" onClick="">

                <strong>До <span id="stat1">0</span></strong>
                <span>годовых</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" onClick="">

                <strong><span id="stat2">0</span></strong>
                <span>месяц спустя вы<br>получаете первые выплаты</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s" onClick="">

                <strong><span id="stat3">0</span> лет</strong>
                <span>в среднем договор<br>с собственником</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s" onClick="">

                <strong><span id="stat4">0</span></strong>
                <span>моделей инвестиций<br>в недвижимость</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.6s" onClick="">

                <strong><span id="stat5">0</span>+</strong>
                <span>инвесторов</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s" onClick="">

                <strong><span id="stat6">0</span></strong>
                <span>обьектов в управлении</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.6s" onClick="">

                <strong><span id="stat7">0</span>%</strong>
                <span>cредняя доходность</span>
            </li>
        </ul>
    </div>
</section>
<main id="about">
    <div class="container">
        <h3><span class="line">О нас</span></h3>
    </div>
    <div class="container about-panel">
        <div class="about-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
            <ul class="about-image-carousel">
                <li>
                    <img class="about-img" src="images/afterObj/11after.jpeg" alt="">
                    <div class="slideshow_overlay">Стоимость аренды: 40000</div>
                    <div class="overlay_vertical"></div>
                </li>

                <li>
                    <img class="about-img" src="images/afterObj/27after.jpg" alt="">
                    <div class="slideshow_overlay">Стоимость аренды: 50000</div>
                    <div class="overlay_vertical"></div>
                </li>

                <li>
                    <img class="about-img" src="images/afterObj/after_kosmo331.jpg" alt="">
                    <div class="slideshow_overlay">Стоимость аренды: 55000</div>
                    <div class="overlay_vertical"></div>
                </li>

                <li>
                    <img class="about-img" src="images/afterObj/44after.jpeg" alt="">
                    <div class="slideshow_overlay">Стоимость аренды: 35000</div>
                    <div class="overlay_vertical"></div>
                </li>

                <li>
                    <img class="about-img" src="images/afterObj/55after.jpeg" alt="">
                    <div class="slideshow_overlay">Стоимость аренды: 50000</div>
                    <div class="overlay_vertical"></div>
                </li>
            </ul>
        </div>

        <div class="about-content wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
            <h3><span class="title wow typewriter" data-delay="1300">Как мы работаем?</span></h3>
            <div class="columns">
                <div class="col">
                    <p>Мы берем финансирование у инвестора и вкладываем исходя из выбранного им предложения по работе с
                        недвижимостью,
                        это может быть: субаренда, покупка недвижимости, лизинг и другие наши модели которые описаны
                        ниже.
                        Каждая из моделей имеет разную доходность и разный порог входа для инвестора.
                        Модели инвестиций в недвижимость в нашей компании имеют минимальные риски, так как они
                        предусмотрены за счет анализа рынка
                        и опыта нашей управляющей компании.</p>
                </div>
            </div>
        </div>
    </div>
</main>
<section id="strategies" class="strategies wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">

    <div class="container">

        <h3 class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s"
            style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: fadeIn;">
            <span class="line lc">МЕХАНИЗМЫ ГЕНЕРАЦИИ ДОХОДА</span>
        </h3>
        <div class="mechanism">
            <div class="mechanism-item wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.5s">
                <div class="strategies-header">
                    <div class="">
                        <div class="strategies_icons"><img src="images/icon-private-equity.svg" alt=""></div>
                        <span>
                            <span class="strategies_subheaders">СУБАРЕНДА НЕДВИЖИМОСТИ</span>
                            <div class="strategies-content">
                                <p>Цель: преумножение капитала, высокий пассивный доход
                                    Доходность: высокая – от 42 до 48% годовых
                                    Порог входа: низкий от 500.000 рублей
                                    Скорость получения дохода: высокая, уже через 1 месяц</p>
                                <p>Обеспечение: залог или право собственности отсутствуют
                                    Гарантии: переуступка прав аренды или личное поручительство
                                    Срок инвестирования: от 1 до 3 лет</p>
                                <p>Мы арендуем на долгий срок от 1 до 7 лет квартиры по цене значительно ниже рыночной
                                    – без отделки, без ремонта, после потопа или пожара. Далее в данных квартирах проводятся косметический или капитальные
                                    ремонтные работы для последующей сдачи в субаренду (посуточно и на долгий срок) в 2-3 раза дороже.</p>
                            </div>
                        </span>
                    </div>
                    <span class="strategies_read_more">ПОДРОБНЕЕ &gt;</span>
                    <span class="strategies_read_less">СКРЫТЬ ×</span>
                </div>

            </div>

            <div class="mechanism-item wow fadeInDown" data-wow-duration="1s" data-wow-delay="2s">
                <div class="strategies-header">
                    <div class="">
                        <div class="strategies_icons"><img src="images/icon-calendar.svg" style="opacity: 0.3;" alt="">
                        </div>
                        <span>
                            <span class="strategies_subheaders">ДОЛГОСРОЧНАЯ И ПОСУТОЧНАЯ АРЕНДА</span>
                            <div class="strategies-content">
                                <p>Цель: сохранение капитала
                                    Доходность: низкая – до 10% годовых
                                    Порог входа: от 5.000.000 рублей
                                    Скорость получения дохода: средняя, через 3 месяца</p>
                                <p>Гарантии: право собственности
                                    Срок инвестирования: не ограничен
                                    Квартира находится в собственности у инвестора.
                                    INTEGRA, как управляющая компания, сдает данный объект посуточно или на долгий срок.
                                    При необходимости может быть произведено деление на студии или ремонт.</p>
                            </div>
                        </span>
                    </div>
                    <span class="strategies_read_more">ПОДРОБНЕЕ &gt;</span>
                    <span class="strategies_read_less">СКРЫТЬ ×</span>
                </div>
            </div>

            <div class="mechanism-item wow fadeInDown" data-wow-duration="1s" data-wow-delay="2.5s">
                <div class="strategies-header">
                    <div class="">
                        <div class="strategies_icons"><img src="images/icon-opportunity.svg" alt=""></div>
                        <span>
                            <span class="strategies_subheaders">ПЕРЕПРОДАЖА НЕДВИЖИМОСТИ</span>
                            <div class="strategies-content">
                                <p>Цель: заработок на разовой сделке
                                    Доходность: от 15% до 60% со сделки
                                    Порог входа: от 7.000.000 рублей
                                    Скорость получения дохода: средняя, через 3-6 месяцев единоразово</p>
                                <p>Гарантии: право собственности
                                    Срок инвестирования: 3-6 месяцев
                                    Покупка или выкуп с торгов квартир по цене ниже рыночной стоимости,
                                    проведение в них ремонтных работ для последующей перепродажи с наценкой.</p>
                            </div>
                        </span>
                    </div>
                    <span class="strategies_read_more">ПОДРОБНЕЕ &gt;</span>
                    <span class="strategies_read_less">СКРЫТЬ ×</span>
                </div>
            </div>

            <div class="mechanism-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.4s">
                <div class="strategies-header">
                    <div class="">
                        <div class="strategies_icons"><img src="images/icon-lease.png" style="opacity: 0.3;" alt="">
                        </div>
                        <span>
                            <span class="strategies_subheaders">ЛИЗИНГ НЕДВИЖИМОСИТИ</span>
                            <div class="strategies-content">
                                <p>Цель: преумножение капитала с максимальной защищенностью
                                    Доходность: 15% годовых с возвратом тела
                                    Порог входа: от 5.000.000 рублей
                                    Скорость получения дохода: быстрая, через 2 месяца</p>
                                <p>Гарантии: право собственности
                                    Срок инвестирования: от 3 до 5 лет (и более, в случае невыкупа)
                                    Сдача квартиры или дома в аренду с правом выкупа, что является альтернативой ипотеке.
                                    Клиент выплачивает одновременно и арендный платеж и выкупной.
                                    Тем самым арендный платеж составляет до 200 000 в месяц.</p>
                                <p>После выкупа объекта, он переходит в собственность арендатора.
                                    В случае невыплат, объект остается в собственности инвестора.</p>
                            </div>
                        </span>
                    </div>
                    <span class="strategies_read_more">ПОДРОБНЕЕ &gt;</span>
                    <span class="strategies_read_less">СКРЫТЬ ×</span>
                </div>
            </div>

            <div class="mechanism-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                <div class="strategies-header">
                    <div class="">
                        <div class="strategies_icons"><img src="images/icon-warehouse.png" style="opacity: 0.3;" alt="">
                        </div>
                        <span>
                            <span class="strategies_subheaders">КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ</span>
                            <div class="strategies-content">
                                <p>Цель: сохранение капитала
                                    Доходность: низкая – до 12% годовых
                                    Порог входа: от 5.000.000 рублей
                                    Скорость получения дохода: средняя, через 3 месяца</p>
                                <p>Гарантии: право собственности
                                    Срок инвестирования: не ограничен
                                    Виды недвижимости: торговые помещения, складские помещения, здания
                                    Сдача торговых или складских помещений в аренду;</p>
                            </div>
                        </span>
                    </div>
                    <span class="strategies_read_more">ПОДРОБНЕЕ &gt;</span>
                    <span class="strategies_read_less">СКРЫТЬ ×</span>
                </div>
            </div>

            <div class="mechanism-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.8s">
                <div class="strategies-header">
                    <div class="strategies_subheaders give_data">
                        Чтобы узнать более подробную информацию о
                        рычагах генерации денежного потока просто
                        оставьте свои контактные данные
                    </div>
                </div>
                <button class="btn-call-modal btn-call-modal__centered">Заказать обратный звонок</button>
            </div>
        </div>
    </div>

</section>
<section id="contacts" class="contact-map">
    <div class="container">
        <div class="contact-panel wow slideInLeft" data-wow-duration="1s">

            <div class="col get-in-touch">
                <div>
                    <div><h3 class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s"><span
                                    class="line">НАШ ОФИС</span><span
                                    class="title lc">КОНТАКТЫ</span></h3>

                        <img class="icon-location" src="images/icon-address2.svg" alt=""/>

                        <div class="contact-x4">
                            <div>
                                <div>
                                    <div class="contact-content">
                                        <div class="office_title">
                                            Почта:
                                            <p>
                                                <a href="mailto:ir@acremgt.com">info@integra-gk.ru</a>
                                            </p>
                                            Телефон:
                                            <p>
                                                <a href="tel:84951288119">8(495) 128-81-19</a>
                                                <a href="tel:89652099116">8(965) 209-91-16</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="contact-content">
                                        <span class="office_title">Москва</span>
                                        <p>Кутузовский проспект, д. 30<br/>121165</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <iframe class="map wow slideInRight" data-wow-duration="1s"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.9790560210718!2d37.53509581582791!3d55.74149288055031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54be8c3177ff9%3A0xf804875be0524bc9!2z0JrRg9GC0YPQt9C-0LLRgdC60LjQuSDQv9GA0L7RgdC_LiwgMzAsINCc0L7RgdC60LLQsCwgMTIxMTY1!5e0!3m2!1sru!2sru!4v1605398377538!5m2!1sru!2sru"
                width="750" height="400" frameborder="0" style="border:0;"
                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</section>



<!--  Modal  -->

<div class="overlay wow" data-modal id="consultation">
    <div class=modal>
        <div class="modal__close">&times;</div>
        <div class="modal__subtitle">Заполните форму заявки</div>
        <div class="modal__description">и наш менеджер свяжется с Вами</div>
        <form class="feed_form feed_form_mt25" action="#" method="get">
            <input name="name" type="text" placeholder="Ваше имя">
            <input name="phone" placeholder="Ваш телефон">
            <input name="email" type="email" placeholder="Ваш E-mail">
<!--            <div class="accept-block">-->
<!--                <input type="checkbox" checked required name="checkbox" id="checkbox">-->
<!--                <label for="checkbox" class="quiz__question__contact-form--accept">-->
<!--                </label>-->
<!--                <span>Даю согласие на обработку моих <a href="">персональных данных</a></span>-->
<!--            </div>-->
            <button class="btn-send btn-call-modal__centered btn_margin_bottom">Отправить</button>
        </form>
    </div>
</div>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="js/jquery.validate.min.js" ></script>
<script type="text/javascript" src="slick/slick.min.js"></script>
<script src="js/featherlight.js" type="text/javascript" charset="utf-8"></script>
<script src="js/scripts.js" type="text/javascript" charset="utf-8"></script>

</body>
</html>