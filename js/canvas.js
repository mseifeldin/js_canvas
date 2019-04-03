(function() {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    var mouse = {x: 0, y: 0};
    var last_mouse = {x: 0, y: 0};

    /*Get mouse*/
    canvas.addEventListener('mousemove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;


    }, false);

    /*Get touch*/
    canvas.addEventListener('touchmove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;


    }, false);




    /* Base Values */

    canvas.width = window.innerWidth * .8;
    console.log(canvas.width);
    console.log(window.innerWidth);


    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';


    /* Keyboard Commands */
    document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 38:
            console.log('up');
            ctx.lineWidth = ctx.lineWidth + 1;
            break;
        case 40:
            console.log('down');
            if (ctx.lineWidth > 0){
            ctx.lineWidth = ctx.lineWidth - 1;}
            break;
        case 66:
            console.log('blue')
            ctx.strokeStyle = 'blue';
            break;
        case 71:
            console.log('green')
            ctx.strokeStyle = 'green';
            break;
        case 89:
            console.log('yellow')
            ctx.strokeStyle = 'yellow';
            break;
        case 82:
            console.log('red')
            ctx.strokeStyle = 'red';
            break;
        case 32:
            console.log('clear')
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            break;
    }
};

    /*Get color picker*/
    function selectColor(){
      ctx.strokeStyle= document.getElementById("colorPicker").value
    }
    
    /* Clear on mobile orientation change */
    window.addEventListener("orientationchange", function(e){
      windowWidth = window.outerWidth;
          windowHeight = window.outerHeight;
          c.width = 0.8 * windowWidth;
          c.height = 0.8 * windowHeight;
    })


    /* Draw */
    canvas.addEventListener('mousemove', function(e) {
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('touchmove', function(e) {
        canvas.addEventListener('touchmove', onPaint, false);
    }, false);


    var onPaint = function() {
        ctx.beginPath();
        ctx.moveTo(last_mouse.x, last_mouse.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.closePath();
        ctx.stroke();
    };

}());