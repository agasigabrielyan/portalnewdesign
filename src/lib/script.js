window.onload = function() {
    var simple = [
        {x: 8, y: 0, w: 4, h: 6, content: '1'},
        {x: 0, y: 0, w: 8, h: 3, content: '2'},
        {x: 0, y: 0, w: 8, h: 3, content: '3'},
        {x: 8, y: 6, w: 4, h: 5, content: '4'},
        {x: 0, y: 6, w: 4, h: 3, content: 'Перетащи меня'},
        {x: 4, y: 9, w: 4, h: 2, content: '6'},
        {x: 4, y: 11, w: 8, h: 3, content: '7'},
        {x: 0, y: 9, w: 4, h: 5, content: '8'},
        {x: 4, y: 6, w: 4, h: 3, content: 'Перетащи меня'},
    ];

    var simpleGrid = GridStack.init({
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        margin: 7.5,
    }, '#simple-grid');
    simpleGrid.load(simple);
}