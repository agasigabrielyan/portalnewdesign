window.onload = function() {
    let simple = [
        {x: 0, y: 0, w: 2, h: 1, content: '<div><div>1</div><div>Совместная работа</div></div>'},
        {x: 2, y: 0, w: 1, h: 2, content: '<div><div>2</div><div>Календарь</div></div>'},
        {x: 0, y: 1, w: 2, h: 1, content: '<div><div>3</div><div>Мои услуги</div></div>'},
        {x: 0, y: 2, w: 1, h: 1, content: '<div><div>4</div><div>САД ПАО “Газпром”</div></div>'},
        {x: 1, y: 2, w: 1, h: 1, content: '<div><div>5</div><div>Статус АСЭЗ</div></div>'},
        {x: 2, y: 2, w: 1, h: 1, content: '<div><div>6</div><div>ПУР АСБУ</div></div>'},
        {x: 0, y: 3, w: 1, h: 2, content: '<div><div>7</div><div>Мои новости</div></div>'},
        {x: 1, y: 3, w: 1, h: 1, content: '<div><div>8</div><div>Мои системы</div></div>'},
        {x: 2, y: 3, w: 1, h: 1, content: '<div><div>9</div><div>Расписание автобусов</div></div>'},
        {x: 1, y: 4, w: 2, h: 1, content: '<div><div>10</div><div>Мои запросы в службу поддержки</div></div>'},
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
        element.style.cursor = "pointer";
        element.classList.add("grid-stack-item_under-edit");
        element.classList.remove("grid-stack-item_shaking");

    });

    simpleGrid.on('dragstop', function(e, ui) {
        var grid = this;
        var element = e.target;
        element.style.cursor = "auto";
        element.classList.remove("grid-stack-item_under-edit");
        element.classList.add("grid-stack-item_shaking");

    });

    simpleGrid.on("change", function(event, items) {
        console.log('Собираемся чего то поменять');
    });


    // инициализация интерфейса
    let interfaceUiObj = new InterfaceUI();
}