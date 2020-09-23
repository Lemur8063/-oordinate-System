# Coordinate-System
# Work in progress

https://lemur8063.github.io/Coordinate-System/

Дана сетка 2D с координатами элементов по x,y (Декартова система).
На данной сетке есть несколько объектов со своими координатами. Есть некий массив, в котором хранятся все объекты данной сетки.
а) Нужно реализовать хранение этих объектов с возможностью доступа к ним через координаты(например: написать функцию getObjectsByXY(x, y), setObjectsByXY(x, y, ...args)).
б) Сделайте минимальную вложенность массива с объектами.
в) Добавите возможность перемещать объекты по сетке, что бы данные актуализировались в массиве(например: функция updateObjectXY(object, x,y))
г) Добавить возможность двигаться объекту вокруг некоторых координат(например функция setObjectAraund(object, centerX, centerY, radius, angle))
д) Добавить возможность переместить объект на некоторое расстояние(например функция setObjectPositionByDistance(object, distance, angle))
е) Реализовать графическое представление данной сетки и объектов с возможностью использования функций выше.

