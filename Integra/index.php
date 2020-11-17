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
    <link rel="apple-touch-icon" href="images/favicon.png">
    <link rel="icon" type="image/png" sizes="192x192" href="images/favicon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <link rel="manifest" href="images/favicon.png">
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
                    <li><a href="#strategies" onClick="document.getElementById('show-menu').checked = false;">Наши предложения по недвижимости</a></li>
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
        <div class="main_title">
            <h2>ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ</h2>
            <h4 class="subtitle">Зарабатывайте от 10% до 48% годовых при полной защите вашего капитала</h4>
            <button class="btn-call-modal big-btn">узнать подробнее</button>
            <a href="#about"><img class="darr" src="images/icon-darr.svg" alt=""/></a>
        </div>
    </div>

    <div id="video-wipe"></div>
</section>

<section class="stats">
    <div class="container">
        <ul class="stats-icons">
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" onClick="">

                <strong>Высокая доходность</strong>
                <span>От 10% до 60% годовых в зависимости от выбранной модели</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" onClick="">

                <strong>Скорость получения дохода</strong>
                <span>Уже через 1-2 месяца вы получите первые выплаты</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" onClick="">

                <strong>Пассивный доход</strong>
                <span>Вы получает доход полностью пассивно, все операционную деятельность мы берем на себя</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" onClick="">

                <strong>Полная защита ваших средств</strong>
                <span>Ваши средства защищены рядом гарантий: право собственности, залог, личное поручительство</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" onClick="">

                <strong>Различные стратегии</strong>
                <span>Для максимально надежного сохранения капитала, для приятного пассивного дохода, для получения сверхприбыли</span>
            </li>
            <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" onClick="">

                <strong>Подойдет каждому</strong>
                <span>Различный порог входа: от 500 000 для инвестиций в субаренду до 500 000 000 для покупки зданий</span>
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
            <div class="about-image--container">
                <img src="images/building.png" alt="" class="about-image--source">
            </div>
        </div>

        <div class="about-content wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
            <h3><span class="title wow typewriter" data-delay="1300">Как мы работаем?</span></h3>
            <div class="about-text">
                Мы - управляющая компания INTEGRA. Наша цель – получить максимальную доходность из объектов недвижимости в управлении для себя и для инвестора.
                <br>
                Для этого мы разрабатываем и реализуем различные инвестиционные программы: лизинг недвижимости, субарендный бизнес, выкуп с торгов, деление на студии.
                <br><br>
                В рамках данных проектов инвестор может реализовать любую стратегию:
                <br>
                - максимально надежно сохранить капитал
                <br>
                - получать значительный пассивный доход, имея при этом ряд гарантий
                <br>
                - рискнуть и получить сверхприбыль
                <br><br>
                Мы берем на себя всю операционную деятельность по управлению недвижимостью – поиск объекта, проверка юридической чистоты, сопровождение сделки купли-продажи,
                капитальный или косметический ремонт, поиск и проверка клиентов, контроль выплат, дальнейшее управление квартирой и решение всех возникающих вопросов.
                Инвестор получает доход полностью пассивно, имея при этом полную защищенность своих средств.
            </div>
        </div>
    </div>
</main>

<section id="strategies" class="strategies">

    <div class="container">

        <h3 class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s"
            style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: fadeIn;">
            <span class="line lc">Наши инвестиционные предложения</span>
        </h3>

        <div class="offers">
            <div class="offers_item">
                <div class="offers_content wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="offers_title">
                        <div class="offers_title__icon"><img src="images/icon-private-equity.svg" alt="" class="offers_title__icon-source"></div>
                        <div class="offers_title__text">Субаренда жилой недвижимости</div>
                    </div>
                    <div class="offers_text">
                        <div class="offers_text__goals">
                            <b>Цель:</b> преумножение капитала, высокий пассивный доход<br>
                            <b>Доходность:</b> высокая – от <b>42</b> до <b>48%</b> годовых<br>
                            <b>Порог входа:</b> низкий от <b>500.000</b> рублей<br>
                            <b>Скорость получения дохода:</b> высокая, уже через <b>1</b> месяц<br>
                            <b>Обеспечение</b>: залог или право собственности отсутствуют<br>
                            <b>Гарантии:</b> переуступка прав аренды или личное поручительство<br>
                            <b>Срок инвестирования:</b> от <b>1</b> до <b>3</b> лет
                        </div>
                        <div class="offers_text__general">
                            Мы арендуем на долгий срок от <b>1</b> до <b>7</b> лет квартиры <b>по цене значительно ниже</b> рыночной
                            – без отделки, без ремонта, после потопа или пожара. Далее в данных квартирах проводятся косметический или капитальные
                            ремонтные работы для последующей сдачи в субаренду (посуточно и на долгий срок) в <b>2-3 раза дороже</b>.
                            <br>
                            Данная модель идеально подойдет инвесторам, чья цель – получение <b>существенного пассивного дохода</b>, имея при этом ряд гарантий.
                            Благодаря низкому порогу входа инвестор имеет возможность «попробовать» и, в случае, если его все устроит, продолжить инвестиции уже с большей суммой.
                        </div>
                        <button class="btn-call-modal">узнать подробнее</button>
                    </div>
                </div>
                <div class="offers_image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">

                </div>
            </div>

            <div class="offers_item">
                <div class="offers_image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">

                </div>
                <div class="offers_content wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="offers_title">
                        <div class="offers_title__icon"><img src="images/icon-calendar.svg" alt="" class="offers_title__icon-source"></div>
                        <div class="offers_title__text">Покупка недвижимости для сдачи в посуточную или долгосрочную аренду</div>
                    </div>
                    <div class="offers_text">
                        <div class="offers_text__goals">
                            <b>Цель:</b> сохранение капитала<br>
                            <b>Доходность:</b> низкая – до <b>10%</b> годовых<br>
                            <b>Порог входа:</b> от <b>5.000.000</b> рублей<br>
                            <b>Скорость получения дохода: </b>средняя, через <b>3</b> месяца<br>
                            <b>Гарантии:</b> право собственности<br>
                            <b>Срок инвестирования:</b> не ограничен
                        </div>
                        <div class="offers_text__general">
                            Для тех инвесторов, кто желает <b>максимально надежно</b> и на <b>долгий срок</b> сохранить свой капитал,
                            мы предлагаем «классический» вариант инвестиций в недвижимость – покупка квартиры или апартаментов
                            для последующей сдачи посуточно или на долгий срок. <br>
                            <b>Всю операционную деятельность</b> по подбору наиболее ликвидного объекта, проверке юридической чистоты,
                            совершению сделки купли-продажи, поиску и проверке клиентов, а также последующему управлению объектом <b>мы берем на себя</b>.
                        </div>
                        <button class="btn-call-modal">узнать подробнее</button>
                    </div>
                </div>
            </div>

            <div class="offers_item">
                <div class="offers_content wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="offers_title">
                        <div class="offers_title__icon"><img src="images/icon-lease.png" alt="" class="offers_title__icon-source"></div>
                        <div class="offers_title__text">Лизинг недвижимости для физических лиц</div>
                    </div>
                    <div class="offers_text">
                        <div class="offers_text__goals">
                            <b>Цель:</b> преумножение капитала с максимальной защищенностью<br>
                            <b>Доходность:</b> от <b>13%</b> до <b>25%</b> годовых<br>
                            <b>Порог входа:</b> от <b>3.500.000</b> рублей<br>
                            <b>Скорость получения дохода:</b> быстрая, через <b>1-1.5</b> месяца<br>
                            <b>Гарантии:</b> право собственности<br>
                            <b>Срок инвестирования:</b> от <b>3</b> до <b>5</b> лет (и более, в случае невыкупа)
                        </div>
                        <div class="offers_text__general">
                            Лизинг или, по-другому, аренда недвижимости с правом выкупа.
                            <br>По данной программе клиент имеет возможность приобрести жилье, выплачивая в течение нескольких лет арендные и выкупные платежи,
                            что для него является альтернативой банковской ипотеке.
                            <br>Ежемесячно инвестора получает от <b>150 000 рублей</b>, поскольку клиент
                            выплачивает как проценты, так и тело инвестиции. В течение всего срока выкупа квартира находится в собственности инвестора
                            и только после совершения <b>последнего</b> платежа права собственности переходит арендатору.
                        </div>
                        <button class="btn-call-modal">узнать подробнее</button>
                    </div>
                </div>
                <div class="offers_image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">

                </div>
            </div>

            <div class="offers_item">
                <div class="offers_image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">

                </div>
                <div class="offers_content wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="offers_title">
                        <div class="offers_title__icon"><img src="images/icon-opportunity.svg" alt="" class="offers_title__icon-source"></div>
                        <div class="offers_title__text">Выкуп недвижимости с торгов для последующей продажи </div>
                    </div>
                    <div class="offers_text">
                        <div class="offers_text__goals">
                            <b>Цель:</b> заработок на разовой сделке<br>
                            <b>Доходность:</b> от <b>15%</b> до <b>60%</b> со сделки<br>
                            <b>Порог входа:</b> от <b>5.000.000</b> рублей<br>
                            <b>Скорость получения дохода: </b>средняя, через <b>3-6</b> месяцев единоразово<br>
                            <b>Гарантии:</b> право собственности<br>
                            <b>Срок инвестирования: 3-6</b> месяцев
                        </div>
                        <div class="offers_text__general">
                            Покупка недвижимости с торгов позволяет приобрести жилую и коммерческую недвижимость со скидкой <b>10%-40%</b> для дальнейшей ее реализации различными путями:
                            как перепродажа и заработок с разовой сделки, так и сдача в аренду. <br>
                            Наша управляющая компания работает преимущественно с торгами города Москвы, тем самым оберегая наших инвесторов от возможных проблем, связанных с торгами по банкротству.
                            Для участия в торгах необходимо внесение залога в размере <b>10% от стоимости лота</b>.
                        </div>
                        <button class="btn-call-modal">узнать подробнее</button>
                    </div>
                </div>
            </div>

            <div class="offers_item">
                <div class="offers_content wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="offers_title">
                        <div class="offers_title__icon"><img src="images/icon-warehouse.png" alt="" class="offers_title__icon-source"></div>
                        <div class="offers_title__text">Покупка коммерческой недвижимости</div>
                    </div>
                    <div class="offers_text">
                        <div class="offers_text__goals">
                            <b>Цель:</b> сохранение капитала<br>
                            <b>Доходность:</b> низкая – до <b>12%</b> годовых<br>
                            <b>Порог входа:</b> от <b>5.000.000</b> рублей<br>
                            <b>Скорость получения дохода:</b> средняя, через <b>3</b> месяца<br>
                            <b>Гарантии:</b> право собственности<br>
                            <b>Срок инвестирования:</b> не ограничен
                        </div>
                        <div class="offers_text__general">
                            Покупка коммерческой недвижимости позволяет <b>максимально надежно</b> сохранить свой капитал, имея при этом <b>гарантированный пассивный доход</b>,
                            поскольку многие арендаторы являются якорными и арендуют помещения на несколько лет. <br>
                            Сотрудничество возможно по различным типам недвижимости: торговые площади, складские помещения, офисы, отдельные здания.
                        </div>
                        <button class="btn-call-modal">узнать подробнее</button>
                    </div>
                </div>
                <div class="offers_image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">

                </div>
            </div>

            <div class="offers_item">
                <div class="offers_image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">

                </div>
                <div class="offers_content wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="offers_title">
                        <div class="offers_title__icon"><img src="images/icon-opportunity.svg" alt="" class="offers_title__icon-source"></div>
                        <div class="offers_title__text">Беззалоговый займ </div>
                    </div>
                    <div class="offers_text">
                        <div class="offers_text__goals">
                            <b>Цель:</b> получение максимальной прибыли<br>
                            <b>Доходность:</b>  высокая - <b>60%</b> годовых<br>
                            <b>Порог входа:</b> от <b>400 000</b> рублей<br>
                            <b>Гарантии:</b> личное поручительство<br>
                            <b>Выплаты:</b> ежемесячные с возвратом тела в конце срока
                        </div>
                        <div class="offers_text__general">
                            Помимо сотрудничества с инвесторами по объектам недвижимости, которые мы берем в управление, наша компания предлагает инвесторам работу
                            по программе займа <b>под 60% годовых</b>. <br>
                            Средства используются для масштабирования бизнеса, а именно для увеличения рекламных бюджетов и привлечения большего количества объектов у правление.
                            В качестве гарантии может выступать личное поручительство генерального директора.
                        </div>
                        <button class="btn-call-modal">узнать подробнее</button>
                    </div>
                </div>
            </div>

            <div class="offers_item">
                <div class="offers_content wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="offers_title">
                        <div class="offers_title__icon"><img src="images/icon-warehouse.png" alt="" class="offers_title__icon-source"></div>
                        <div class="offers_title__text">Покупка квартиры для деления на студии</div>
                    </div>
                    <div class="offers_text">
                        <div class="offers_text__goals">
                            <b>Цель:</b> сохранение капитала<br>
                            <b>Доходность:</b> низкая – до <b>12%</b> годовых<br>
                            <b>Порог входа:</b> от <b>5.000.000</b> рублей<br>
                            <b>Скорость получения дохода:</b> средняя, через <b>3</b> месяца<br>
                            <b>Гарантии:</b> право собственности<br>
                            <b>Срок инвестирования:</b> не ограничен
                        </div>
                        <div class="offers_text__general">
                            Покупка недвижимости для деления на студии является одним из самых <b>популярных</b> на сегодняшний день способов инвестиций.
                            <br>
                            Однако популярность зачастую значит перенасыщенность рынка.
                            Конкурировать с застройщиками и крупными девелопперами через 1-2 года станет все сложнее, которые предлагают студии с отдельными кадастрами.
                            <br>
                            Поэтому мы предлагаем инвесторам деление на студии с дальнейшей посуточной сдачи или подбор объектов, где возможно выведение отдельных кадастров.
                            <br>
                            <b>Всю деятельность</b> по подбору объекта, проведению инвесторского ремонта, согласования перепланировок, выведению кадастров и дальнейшему управлению <b>мы берем на себя</b>.
                        </div>
                        <button class="btn-call-modal">узнать подробнее</button>
                    </div>
                </div>
                <div class="offers_image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">

                </div>
            </div>
        </div>

        <div class="divider wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s"></div>

        <div class="offers_call-modal wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
            <div class="offers_call-header">
                <div class="offers_title__text offers_text-center">
                    Если у вас остались вопросы по инвестиционным программам, оставьте заявку и мы подробно на них ответим!
                </div>
            </div>
            <button class="btn-call-modal btn-call-modal__centered">Заказать обратный звонок</button>
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