'use strict';

export const utils = {
    storeToStorage,
    loadFromStorage,
    getRandomInt,
    getRandomId,
    getRandomColor,
    handleTimestamp,
    getAvgValues,
    getDate
};

function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}


function getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = getRandomInt(1000, 9999).toString(16);
    var pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
    var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
    var min = (num1 <= num2) ? num1 : num2;
    return (Math.floor(Math.random() * (max - min)) + min);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function handleTimestamp(timestamp) {


    const date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth();
    month++;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    return day + '.' + month + '.' + year + ' at ' + hours + ':' + minutes + ':' + seconds;

}


function getDate(timestamp){
    
    const date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth();
    month++;
    const year = date.getFullYear();

  


    return day + '.' + month + '.' + year 
}


function getAvgValues(arr) {
    arr.splice(150, 1);
    let arrLength = arr.length / 5;
    let newArr = [];
    let idx = 0;
    for (let j = 0; j < 5; j++) {
      var avg = 0;
      for (let i = idx; i < arrLength+idx; i++) {
        avg += arr[i].y;
      }
      console.log({ avg });
      avg = avg / arrLength;
      newArr.push(avg);
      idx += 30;
    }
    console.log({ newArr });
    return newArr;
  }