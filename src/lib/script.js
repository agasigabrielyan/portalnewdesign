window.onload = function() {

    let collaboration = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Совместная работа
                </div>
                <a href="" class="widget__link">
                    все проекты
                </a>
            </div>
            <div class="widget__body">
                <div class="collaborate">
                    <div class="collaborate__cell">
                        <div class="collaborate__heading">Корпоративный портал<span class="collaborate__star"></span></div>
                        <ul>
                            <li class="collaborate__item"><div>13</div>  Новых задач</li>
                            <li class="collaborate__item"><div>27</div>  Новых комментариев</li>
                            <li class="collaborate__item"><div>8 </div>  Новых документов</li>
                        </ul>
                    </div>
                    <div class="collaborate__cell">
                        <div class="collaborate__heading">Система управления задачами<span class="collaborate__star"></span></div>
                         <ul>
                            <li class="collaborate__item"><div>13</div>  Новых задач</li>
                            <li class="collaborate__item"><div>27</div>  Новых комментариев</li>
                            <li class="collaborate__item"><div>8 </div>  Новых документов</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    let myEvents = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Мои события
                </div>
                <a href="" class="widget__link">
                    все события
                </a>
            </div>
            <div class="widget__body">
                <div class="my-calendar">                    
                    <div class="my-calendar__search">

                            <div class="my-news__search">
                                <input type="text" placeholder="поиск">
                            </div>


                            <div class="my-calendar__icons">
                                <div data-type='calendar' class="my-calendar__icon my-calendar__icon_active">
                                    <img src="./src/images/calendar.svg" />
                                </div>
                                <div data-type='event' class="my-calendar__icon">
                                    <img src="./src/images/listicon.svg" />
                                </div>
                            </div>

                    </div>
                    
                    <div class="my-calendar__area-wrapper">
                         <div class="my-calendar__area my-calendar__area_calendar my-calendar__area_active">
                            <div class="my-calendar__calendar">
                                <div class="my-calendar__title">
                                    <button><img src='./src/images/calendar__left-arrow.svg' /></button>
                                    <span>Апрель 2023</span>
                                    <button><img src='./src/images/calendar__right-arrow.svg' /></button>
                                </div>
                                <div class="my-calendar__digits">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td><span> Пн   </span></td>
                                                <td><span> Вт   </span></td>
                                                <td><span> Ср   </span></td>
                                                <td><span> Чт   </span></td>
                                                <td><span> Пт   </span></td>
                                                <td><span> Сб   </span></td>
                                                <td><span> Вс   </span></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span> 1    </span></td>
                                                <td><span> 2    </span></td>
                                                <td><span> 3    </span></td>
                                                <td><span> 4    </span></td>
                                                <td><span> 5    </span></td>
                                                <td><span> 6    </span></td>
                                                <td><span> 7    </span></td>
                                            </tr>
                                            <tr>
                                                <td><span> 8    </span></td>
                                                <td><span> 9    </span></td>
                                                <td class="my-calendar__event_blue"><span> 10   </span></td>
                                                <td class="my-calendar__event_outline"><span> 11    </span></td>
                                                <td class="my-calendar__event_vacation"><span> 12   </span></td>
                                                <td><span> 13   </span></td>
                                                <td><span> 14   </span></td>
                                            </tr>
                                            <tr>
                                                <td><span> 15   </span></td>
                                                <td><span> 16   </span></td>
                                                <td><span> 17   </span></td>
                                                <td><span> 18   </span></td>
                                                <td><span> 19   </span></td>
                                                <td><span> 20   </span></td>
                                                <td><span> 21   </span></td>
                                            </tr>
                                            <tr>
                                                <td><span> 22   </span></td>
                                                <td><span> 23   </span></td>
                                                <td><span> 24   </span></td>
                                                <td><span> 25   </span></td>
                                                <td><span> 26   </span></td>
                                                <td><span> 27   </span></td>
                                                <td><span> 28   </span></td>
                                            </tr>
                                            <tr>
                                                <td><span> 29   </span></td>
                                                <td><span> 30   </span></td>
                                                <td><span> 31   </span></td>
                                                <td><span>  </span></td>
                                                <td><span>  </span></td>
                                                <td><span>  </span></td>
                                                <td><span>  </span></td>
                                            </tr>
                                        </tbody>                                        
                                    </table>
                                </div>
                            </div>                        
                        </div>
                        <div class="my-calendar__area my-calendar__area_events">
                            <div class="my-events">
                                <div class="my-events__date">
                                    22 марта 2023
                                </div>
                                <div class="my-events__list">
                                    <div class="my-events__event">
                                        <table>
                                            <tr>
                                                <td>10:00</td>
                                                <td>
                                                    <span class='event-title'>Совещания на Новоданиловской</span><br/><span>#Мероприятия</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10:00</td>
                                                <td>
                                                    <span class='event-title'>Совещания на Новоданиловской</span><br/><span>#Мероприятия</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10:00</td>
                                                <td>
                                                    <span class='event-title'>Совещания на Новоданиловской</span><br/><span>#Мероприятия</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                
                                <div class="my-events__date">
                                    22 марта 2023
                                </div>
                                <div class="my-events__list">
                                    <div class="my-events__event">
                                        <table>
                                            <tr>
                                                <td>10:00</td>
                                                <td>
                                                    <span class='event-title'>Совещания на Новоданиловской</span><br/><span>#Мероприятия</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                
                                <div class="my-events__date">
                                    22 марта 2023
                                </div>
                                <div class="my-events__list">
                                    <div class="my-events__event">
                                        <table>
                                            <tr>
                                                <td>10:00</td>
                                                <td>
                                                    <span class='event-title'>Совещания на Новоданиловской</span><br/><span>#Мероприятия</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="my-calendar__add">
                            <div class="my-calendar__button">
                                +Создать событие
                            </div>
                    </div>                    
                </div>
            </div>
        </div>
    `;
    let myServices = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Мои услуги
                </div>
                <a class="widget__link">
                    все услуги
                </a>
            </div>
            <div class="widget__body">
                <div class="my-services">
                    <ul>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">Получить справки</span>
                            </a>
                        </li>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">Магазин канцтоваров</span>
                            </a>
                        </li>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">Заменить картридж</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">Бронирование переговорных</span>
                            </a>
                        </li>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">Увеличить почтовый ящик</span>
                            </a>
                        </li>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">Получить ИТ-оборудование</span>
                            </a>
                        </li>
                    </ul>                   
                </div>
            </div>
        </div>
    `;
    let sadPaoGazprom = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    САД ПАО «Газпром»
                </div>
                <a class="widget__link">
                    перейти
                </a>
            </div>
            <div class="widget__body">
                <div class="common-widget">
                    <div class="common-widget__item"><span>12</span> Новых поручений/документов</div>
                    <div class="common-widget__item"><span>10</span> Принято на рассмотрение</div>
                    <div class="common-widget__item"><span>3</span> В работе</div>
                    <div class="common-widget__item"><span>0</span> Просрочено по срокам согласования</div>
                </div>
            </div>
        </div>
    `;
    let statusASES = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Статус АСЭЗ
                </div>
                <a class="widget__link">
                    перейти
                </a>
            </div>
            <div class="widget__body">
                <div class="common-widget">
                    <div class="common-widget__item"><span>19</span>Новых ППЗ/ДО</div>
                    <div class="common-widget__item"><span>10</span>Отправлено на согласование</div>
                    <div class="common-widget__item"><span>5</span>Возвращено на доработку</div>
                    <div class="common-widget__item"><span>4</span>Согласовано</div>
                </div>
            </div>
        </div>
    `;
    let purASBU = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    ПУР АСБУ
                </div>
                <a class="widget__link">
                    перейти
                </a>
            </div>
            <div class="widget__body">
                <div class="common-widget">
                    <div class="common-widget__item"><span>10</span>Новых договоров</div>
                    <div class="common-widget__item"><span>6</span>Отправлено на согласование</div>
                    <div class="common-widget__item"><span>2</span>Возвращено на доработку</div>
                    <div class="common-widget__item"><span>2</span>Согласовано</div>
                </div>
            </div>
        </div>
    `;
    let myNews = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Мои новости
                </div>
                <a class="widget__link">
                    все новости
                </a>
            </div>
            <div class="widget__body">
                <div class="my-news">
                    <div class="my-news__search">
                        <input type="text" placeholder="поиск" />
                    </div>
                    <div class="my-news__filter">
                        <div class="my-news__filter-item">Все новости</div>
                        <div class="my-news__filter-item">Группы</div>
                        <div class="my-news__filter-item">Отдых</div>
                        <div class="my-news__filter-item">Департамент</div>
                        <div class="my-news__filter-item">Мероприятия</div>
                        <div class="my-news__filter-item">Сообщества</div>
                    </div>
                    <div class="my-news__list">
                        <ul>
                            <li>
                                <div class="my-news__image"><img src="./src/images/no-photo.svg" /></div>
                                <div class="my-news__info">
                                    <div class="my-news__top">
                                        <span class='my-news__date'>25 Января</span>
                                           <div>
                                                <span class='my-news__watch'>
                                                    <img src='./src/images/watch.svg' />
                                                    630
                                                </span>
                                                <span class='my-news__like'>
                                                    <img src='./src/images/like.svg' />
                                                    63
                                                </span>
                                            </div>                                    
                                    </div>
                                    <div class="my-news__name">
                                        Непутевые работники и как с ними справляться?
                                    </div>
                                    <div class="my-news__tags">
                                        #Мероприятия
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="my-news__image"><img src="./src/images/no-photo.svg" /></div>
                                <div class="my-news__info">
                                    <div class="my-news__top">
                                        <span class='my-news__date'>25 Января</span>
                                           <div>
                                                <span class='my-news__watch'>
                                                    <img src='./src/images/watch.svg' />
                                                    630
                                                </span>
                                                <span class='my-news__like'>
                                                    <img src='./src/images/like.svg' />
                                                    63
                                                </span>
                                            </div>    
                                    </div>
                                    <div class="my-news__name">
                                        Непутевые работники и как с ними справляться?
                                    </div>
                                    <div class="my-news__tags">
                                        #Мероприятия
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="my-news__image"><img src="./src/images/no-photo.svg" /></div>
                                <div class="my-news__info">
                                    <div class="my-news__top">
                                        <span class='my-news__date'>25 Января</span>

                                            <div>
                                                <span class='my-news__watch'>
                                                    <img src='./src/images/watch.svg' />
                                                    630
                                                </span>
                                                <span class='my-news__like'>
                                                    <img src='./src/images/like.svg' />
                                                    63
                                                </span>
                                            </div>    

                                    </div>
                                    <div class="my-news__name">
                                        Непутевые работники и как с ними справляться?
                                    </div>
                                    <div class="my-news__tags">
                                        #Мероприятия
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    let mySystems = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Мои системы
                </div>
                <a class="widget__link">
                    ЦОД-М
                </a>
            </div>
            <div class="widget__body">
        <div class="my-services">
                    <ul>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">САД ПАО «Газпром»</span>
                            </a>
                        </li>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">ПУР АСБУ</span>
                            </a>
                        </li>
                        <li class="my-services__item">
                            <a href="#">
                                <span class="my-services__name">Статус АСЭЗ</span>
                            </a>
                        </li>
                    </ul>                                      
                </div>
            </div>
        </div>
    `;
    let buses = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Расписание
                </div>
                <a class="widget__link">
                    все
                </a>
            </div>
            <div class="widget__body">
                <div class="buses">
                    <div class="buses__title">
                        от БЦ “Виктория Плаза” до:
                    </div>
                    <div class="buses__stations">
                        <table class='buses__table'>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                                                        <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                                                        <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                            <tr> <td>м. Московская</td> <td>12:00</td> <td>10 мин.</td> </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    let myRequests = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Мои запросы
                </div>
                <a class="widget__link">
                    все запросы
                </a>
            </div>
            <div class="widget__body">
                <div class='my-request'>
                
                    <div class='my-request__wrapper'>
                        <div class='my-request__textarea'>
                            <textarea placeholder="Введите комментарий"></textarea>
                        </div>
                        
                        <div class='my-request__file-area'>
                            <div class='my-request__file'>
                                <input type='file' />
                            </div>
                            <div class='my-request__type'>
                                Уточнить запрос                           
                            </div>
                        </div>
                        
                        <div class='my-request__send-area'>
                            <div class='my-request__send'>
                                Отправить:
                            </div>
                            <div class='my-request__req-type'>
                                <ul>
                                    <li class='active'>ИТ запрос</li>
                                    <li>Хоз. запрос</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class='my-request__wrapper'>
                        <div class='my-request__all'>
                        
                            <div class='my-request__single'>
                                <div class='my-request__code'>
                                    <span>RADFASESER</span>
                                    <span>в работе</span> 
                                </div>
                                <div class='my-request__text'>
                                    Ввиду производственной необходимости для совещаний в VK Teams тебуются наушники LOGI USB, видео камера.
                                </div>
                            </div>
                            
                            <div class='my-request__single'>
                                <div class='my-request__code'>
                                    <span>RADFASESER</span>
                                    <span class='my-request_done'>завершен</span> 
                                </div>
                                <div class='my-request__text'>
                                    Ввиду производственной необходимости для совещаний в VK Teams тебуются наушники LOGI USB, видео камера.
                                </div>
                            </div>
                            
                            <div class='my-request__single'>
                                <div class='my-request__code'>
                                    <span>RADFASESER</span>
                                    <span>в работе</span> 
                                </div>
                                <div class='my-request__text'>
                                    Ввиду производственной необходимости для совещаний в VK Teams тебуются наушники LOGI USB, видео камера.
                                </div>
                            </div>
                            
                            <div class='my-request__single'>
                                <div class='my-request__code'>
                                    <span>RADFASESER</span>
                                    <span>в работе</span> 
                                </div>
                                <div class='my-request__text'>
                                    Ввиду производственной необходимости для совещаний в VK Teams тебуются наушники LOGI USB, видео камера.
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    `;

    let simple = [
        {x: 0, y: 0, w: 2, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${collaboration}</div>`},
        {x: 2, y: 0, w: 1, h: 2, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${myEvents}</div>`},
        {x: 0, y: 1, w: 2, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${myServices}</div>`},
        {x: 0, y: 2, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${sadPaoGazprom}</div>`},
        {x: 1, y: 2, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${statusASES}</div>`},
        {x: 2, y: 2, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${purASBU}</div>`},
        {x: 0, y: 3, w: 1, h: 2, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${myNews}</div>`},
        {x: 1, y: 3, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${mySystems}</div>`},
        {x: 2, y: 3, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${buses}</div>`},
        {x: 1, y: 4, w: 2, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' >${myRequests}</div>`},
    ];

    let simpleGrid = GridStack.init({
        column: 3,
        cellHeight: "280rem",
        disableOneColumnMode: true,
        disableDrag: true,
        disableResize: true,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        margin: "10rem",
    }, '#simple-grid');

    simpleGrid.load(simple);

    // при попытке переноса блока отрабатывает этот метод
    simpleGrid.on('dragstart', function(e, ui) {
        var grid = this;
        var element = e.target;
        element.style.cursor = "pointer";
        element.classList.add("grid-stack-item_under-edit");
        element.classList.remove("grid-stack-item_shaking");
        element.classList.remove("grid-stack-item_shaking-opposite");
    });

    // при остановке переноса отрабатывает этот метод
    simpleGrid.on('dragstop', function(e, ui) {
        var grid = this;
        var element = e.target;
        element.style.cursor = "auto";
        element.classList.remove("grid-stack-item_under-edit");
        if( document.querySelector("html").classList.contains("html__editable") ) {
            element.classList.add("grid-stack-item_shaking");
        }
    });


    simpleGrid.on('resizestart', function(event, el) {
        // зададим класс grid-item__under-resizing при попытке ресайзить grid-item
        el.classList.add("grid-stack-item__under-resizing");
    });

    // при изменинии размеров отрабатывает этот метод
    simpleGrid.on('resize', function(event, el) {

        if(el.gridstackNode.w > 2) {
            el.gridstackNode.w = 2;
        }

        if( el.gridstackNode.h > 2 ) {
            el.gridstackNode.h = 1;
        }

        if( el.gridstackNode.w >= 2 && el.gridstackNode.h === 2) {
            el.gridstackNode.h = 1;
        }

        if( ( el.gridstackNode.content.includes('my-news') || el.gridstackNode.content.includes('buses') ) && el.gridstackNode.w >= 2) {
            el.gridstackNode.w = 1;
        }


        // добавим и удалим grid-stack-item чтобы инициировать изменение сетки
        simpleGrid.addWidget('<div id="just-a-widget" class="grid-stack-item"><div class="grid-stack-item-content">hello</div></div>', {w: 1, h: 1});
        simpleGrid.removeWidget(document.getElementById("just-a-widget"));
    });

    simpleGrid.on('resizestop', function(event, el) {
        el.classList.remove("grid-stack-item__under-resizing");

        // удалим все классы типа блока(small, long, high)
        el.classList.remove('grid-stack-item__small','grid-stack-item__long','grid-stack-item__high');

        if( el.gridstackNode.h === 1 && el.gridstackNode.w === 1 ) {
            el.classList.add('grid-stack-item__small');
        } else if( el.gridstackNode.w === 2 && el.gridstackNode.w !== 1 ) {
            el.classList.add('grid-stack-item__long');
        } else if ( el.gridstackNode.h === 2 && el.gridstackNode.w === 1 ) {
            el.classList.add('grid-stack-item__high');
        }
    });

    // инициализация интерфейса
    let interfaceUiObj = new InterfaceUI(simpleGrid);
}
