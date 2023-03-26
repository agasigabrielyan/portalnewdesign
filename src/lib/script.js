window.onload = function() {
    var simple = [
        {x: 0, y: 0, w: 4, h: 2, content: '1'},
        {x: 4, y: 0, w: 4, h: 4, content: '2'},
        {x: 8, y: 0, w: 2, h: 2, content: '<p class="card-text text-center" style="margin-bottom: 0">Drag me!<p class="card-text text-center"style="margin-bottom: 0"><ion-icon name="hand" style="font-size: 300%"></ion-icon>'},
        {x: 10, y: 0, w: 2, h: 2, content: '4'},
        {x: 0, y: 2, w: 2, h: 2, content: '5'},
        {x: 2, y: 2, w: 2, h: 4, content: '6'},
        {x: 8, y: 2, w: 4, h: 2, content: '7'},
        {x: 0, y: 4, w: 2, h: 2, content: '8'},
        {x: 4, y: 4, w: 4, h: 2, content: '9'},
        {x: 8, y: 4, w: 2, h: 2, content: '10'},
        {x: 10, y: 4, w: 2, h: 2, content: '11'},
    ];

    var simpleGrid = GridStack.init({
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        margin: 5,
    }, '#simple-grid');
    simpleGrid.load(simple);
}