window.onload = function() {

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
    let myEvents = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Мои события
                </div>
                <div class="widget__link">
                    все события
                </div>
            </div>
            <div class="widget__body">
        
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
        
            </div>
        </div>
    `;
    let buses = `
        <div class="widget">
            <div class="widget__header">
                <div class="widget__name">
                    Автобусы
                </div>
                <a class="widget__link">
                    все
                </a>
            </div>
            <div class="widget__body">
        
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
