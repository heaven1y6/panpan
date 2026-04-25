 
// DRAGGABLE ELEMENTS JS CODE FROM https://stackoverflow.com/questions/14695933/draggable-div-with-classname

(function (document) {
    'use strict';

    var draggable = document.querySelectorAll('.draggable'),
        draggableCount = draggable.length, 
        i; 

    function startDrag(evt) {

        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; 

        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }

        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }

    for (i = 0; i < draggableCount; i += 1) {
        draggable[i].addEventListener('mousedown', startDrag);
    }
}(document));