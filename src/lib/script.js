window.onload = function() {
    let simple = [
        {x: 0, y: 0, w: 2, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>1</div><div>Совместная работа</div></div>`},
        {x: 2, y: 0, w: 1, h: 2, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>2</div><div>Календарь</div></div>`},
        {x: 0, y: 1, w: 2, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>3</div><div>Мои услуги</div></div>`},
        {x: 0, y: 2, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>4</div><div>САД ПАО “Газпром”</div></div>`},
        {x: 1, y: 2, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>5</div><div>Статус АСЭЗ</div></div>`},
        {x: 2, y: 2, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>6</div><div>ПУР АСБУ</div></div>`},
        {x: 0, y: 3, w: 1, h: 2, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>7</div><div>Мои новости</div></div>`},
        {x: 1, y: 3, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>8</div><div>Мои системы</div></div>`},
        {x: 2, y: 3, w: 1, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>9</div><div>Расписание автобусов</div></div>`},
        {x: 1, y: 4, w: 2, h: 1, content: `<div class='gridstack-main-class' id='${ (Math.random() + 1).toString(36).substring(7) }' ><div>10</div><div>Мои запросы в службу поддержки</div></div>`},
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
        if(el.gridstackNode.w === 1 && el.gridstackNode.h > 2) {
            el.gridstackNode.h = 2;
        } else if( el.gridstackNode.w > 1 && el.gridstackNode.h > 1 ) {
            el.gridstackNode.h = 1;
        } else if( el.gridstackNode.w > 1 && el.gridstackNode.h === 1 ) {
            el.gridstackNode.w = 2;
        }

        // добавим и удалим grid-stack-item чтобы инициировать изменение сетки
        simpleGrid.addWidget('<div id="just-a-widget" class="grid-stack-item"><div class="grid-stack-item-content">hello</div></div>', {w: 1, h: 1});
        simpleGrid.removeWidget(document.getElementById("just-a-widget"));
    });

    // инициализация интерфейса
    let interfaceUiObj = new InterfaceUI(simpleGrid);
}
