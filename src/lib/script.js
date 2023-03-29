window.onload = function() {
    let simple = [
        {x: 0, y: 0, w: 2, h: 1, content: 'Совместная работа'},
        {x: 2, y: 0, w: 1, h: 2, content: 'Мои услуги'},
        {x: 0, y: 1, w: 2, h: 1, content: 'Мои события'},
        {x: 0, y: 2, w: 1, h: 1, content: 'САД ПАО “Газпром”'},
        {x: 1, y: 2, w: 1, h: 1, content: 'Статус АСЭЗ'},
        {x: 2, y: 2, w: 1, h: 1, content: 'ПУР АСБУ'},
        {x: 0, y: 3, w: 1, h: 2, content: 'Мои новости'},
        {x: 1, y: 3, w: 1, h: 1, content: 'Мои системы'},
        {x: 2, y: 3, w: 1, h: 1, content: 'Автобусы'},
        {x: 1, y: 4, w: 2, h: 1, content: 'Мои запросы в службу поддержки'},
    ];

    let simpleGrid = GridStack.init({
        column: 3,
        cellHeight: 260,
        disableOneColumnMode: true,
        disableDrag: true,
        disableResize: true,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        margin: 10,
    }, '#simple-grid');

    simpleGrid.load(simple);

    simpleGrid.on('dragstart', function(e, ui) {
        var grid = this;
        var element = e.target;
        console.log('Драг начался');
    });

    simpleGrid.on('dragstop', function(e, ui) {
        var grid = this;
        var element = e.target;
        console.log('ЗАКОНЧИЛИ УПРАЖНЕНИЕ');
    });

    simpleGrid.on("change", function(event, items) {
        debugger;
    });

    let interfaceUI = new InterfaceUI(simpleGrid);
    debugger;
}