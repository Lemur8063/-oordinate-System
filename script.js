let elements = [{ name: 'Circle', x: '2', y: '4' },
                     { name: 'Square', x: '4', y: '2' },
                        {name: 'Triangle', x: '5', y: '7'}];



function getObjectsByXY (x,y) {
    for (let element of elements) {
        if (element.x == x && element.y == y) {
            return element.name;
        }
        else {
            console.log ("Элемент не найден!");
        }
    }    
    //let object = document.getElementsByClassName("circle");
    //let style = getComputedStyle(object[0]);
    //console.log(style.left);
}
function setObjectsByXY (x,y) {
}
function updateObjectXY (object,x,y) {

}
