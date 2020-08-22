/* ============ DIV FOLLOW CURSOR ============ */

var cursor = document.querySelector('.cursor');
var innerCursor = document.querySelector('.cursor--inner');

document.addEventListener('mousemove', function(c) {
    var x = c.clientX;
    var y = c.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    innerCursor.style.left = x + "px";
    innerCursor.style.top = y + "px";
});