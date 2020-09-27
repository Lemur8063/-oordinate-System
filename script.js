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
          y =  document.getElementById(`${object}`).style.marginLeft = element.y * 33 + "px";
        }
    }
} 
function error (text,visibility) {
    let error = document.querySelector(".error");
    if (visibility) {
    error.style.opacity = "1";
    error.textContent = text;
    error.innerHTML +="<br/>";
    } else {
        error.style.opacity = "0";
        error.textContent = "";
        error.innerHTML ="";
    }
}

button = document.querySelector('.button');
button.onclick = function() {
    let currentX = document.getElementsByClassName('current-x');
    let currentY = document.getElementsByClassName('current-y');
    let newX = document.getElementsByClassName('new-x');
    let newY = document.getElementsByClassName('new-y');
    if (currentX[0].value <= 15 && currentY[0].value <= 15 &&
        currentX[0].value >= 1 && currentY[0].value >= 1) {
        if (newX[0].value <= 15 && newY[0].value <= 15 &&
            newX[0].value >= 1 && newY[0].value >= 1) {
    let object = getObjectsByXY(currentX[0].value,currentY[0].value);
    setObjectsByXY(object,newX[0].value,newY[0].value);
    updateObjectXY (object);
    error("", false);
    } else {
        text = "* Элемент выходит за границы сетки. Введите другие координаты и попробуйте снова."
        error(text, true);
    }
}
};

