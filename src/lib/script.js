window.onload = function() {
    let simple = [
        {x: 0, y: 0, w: 2, h: 1, content: '<div class="grid-stack-item-closer"></div>Совместная работа'},
        {x: 2, y: 0, w: 1, h: 2, content: '<div class="grid-stack-item-closer"></div>Мои услуги'},
        {x: 0, y: 1, w: 2, h: 1, content: '<div class="grid-stack-item-closer"></div>Мои события'},
        {x: 0, y: 2, w: 1, h: 1, content: '<div class="grid-stack-item-closer"></div>САД ПАО “Газпром”'},
        {x: 1, y: 2, w: 1, h: 1, content: '<div class="grid-stack-item-closer"></div>Статус АСЭЗ'},
        {x: 2, y: 2, w: 1, h: 1, content: '<div class="grid-stack-item-closer"></div>ПУР АСБУ'},
        {x: 0, y: 3, w: 1, h: 2, content: '<div class="grid-stack-item-closer"></div>Мои новости'},
        {x: 1, y: 3, w: 1, h: 1, content: '<div class="grid-stack-item-closer"></div>Мои системы'},
        {x: 2, y: 3, w: 1, h: 1, content: '<div class="grid-stack-item-closer"></div>Автобусы'},
        {x: 1, y: 4, w: 2, h: 1, content: '<div class="grid-stack-item-closer"></div>Мои запросы в службу поддержки'},
    ];

    let simpleGrid = GridStack.init({
        column: 3,
        cellHeight: 260,
        disableOneColumnMode: true,
        disableDrag: false,
        disableResize: false,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        margin: 10,
    }, '#simple-grid');

    simpleGrid.load(simple);

    simpleGrid.on('dragstart', function(e, ui) {
        var grid = this;
        var element = e.target;
        console.log('НАЧАЛИ УПРАЖНЕНИЕ');
    });

    simpleGrid.on('dragstop', function(e, ui) {
        var grid = this;
        var element = e.target;
        console.log('закончили упражнение');
    });

    simpleGrid.on("change", function(event, items) {
        console.log('Собираемся чего то поменять');
    });

    let interfaceUiObj = new InterfaceUI();



}