window.onload = function() {
    let ser = `
                <div class="gazprom__widget">
                    <div class="gazprom__heading">
                        Мои услуги
                    </div>
                    <div class="gazprom__items">
                        <div class="gazprom__item">Оборудование</div>
                        <div class="gazprom__item">Магазин канцтоваров</div>
                        <div class="gazprom__item">Заменить картридж</div>
                        <div class="gazprom__item">Бронирование переговорных</div>
                        <div class="gazprom__item">Установить ПО</div>
                        <div class="gazprom__item">Заказать пропуск</div>
                        <div class="gazprom__item">Услуга/Сервис для тебя</div>
                        <div class="gazprom__item">Услуга/Сервис для тебя</div>
                        <div class="gazprom__item">Услуга/Сервис для тебя</div>
                    </div>
                </div>
    `;


    let collaboration = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Совместная работа
                </div>
                <div class="widget__link">
                    все проекты
                </div>
            </div>
            <div class="widget__body">
        
            </div>
        </div>
    `;
    let myEvents = `Мои события тут`;
    let myServices = `Мои услуги здесь`;

    let sadPaoGazprom = `sadPaoGazprom`;
    let statusASES = `statusASES`;
    let purASBU = `purASBU`;
    let myNews = `myNews`;
    let mySystems = `Мои системы`;
    let buses = `Автобусы`;
    let myRequests = `Мои запросы!!!`;




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
        cellHeight: "260rem",
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

        // добавим и удалим grid-stack-item чтобы инициировать изменение сетки
        simpleGrid.addWidget('<div id="just-a-widget" class="grid-stack-item"><div class="grid-stack-item-content">hello</div></div>', {w: 1, h: 1});
        simpleGrid.removeWidget(document.getElementById("just-a-widget"));
    });

    // инициализация интерфейса
    let interfaceUiObj = new InterfaceUI(simpleGrid);
}
