let elements = [{ name: 'circle', x: '1', y: '1' },
                     { name: 'square', x: '4', y: '2' },
                        {name: 'triangle', x: '5', y: '7'}];
function getObjectsByXY (x,y) {
    for (let element of elements) {
        if (element.x === x && element.y === y) {
            return element.name;
        }
    }    
}
function setObjectsByXY (object,x,y) {
        for (let element of elements) {
            if (element.name === object) {
                element.x = x;
                element.y = y;
            }
        }    
}
function updateObjectXY (object) {
    for (let element of elements) {
        if (element.name === object) {
        x = document.getElementById(`${object}`).style.marginBottom = element.x * 33 + "px";
          y =  document.getElementById(`${object}`).style.left = element.y * 33 + "px";;
            console.log(left,bottom,object);
        }
    }  
}
button = document.querySelector('.button');
button.onclick = function() {
    let currentX = document.getElementsByClassName('current-x');
    let currentY = document.getElementsByClassName('current-y');
    let newX = document.getElementsByClassName('new-x');
    let newY = document.getElementsByClassName('new-y');
    let object = getObjectsByXY(currentX[0].value,currentY[0].value);
    setObjectsByXY(object,newX[0].value,newY[0].value);
    updateObjectXY (object);
};

