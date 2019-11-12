// ELEMENTS
var elements = {
  'container' : document.querySelector('.content'),
  'popup' : document.querySelector('.popup'),
  'addBtn' : document.querySelector('.addBtn'),
  'submitBtn' : document.querySelector('.submitBtn'),
  'cancelBtn' : document.querySelector('.cancelBtn'),
  'closeBtn' : document.querySelector('.closeBtn'),
  'textArea' : document.querySelector('.textArea'),
  'warning' : document.querySelector('.popup span')
}


// INSERT QUOTE
function insertQuote(msg, color) {
  var newContent = '';
  var newDiv = document.createElement('div');

  newDiv.setAttribute('class', 'data');

  newContent += '<span>';
  newContent += '<img class="closeBtn" src="images/close-icon.png" alt="Close button">';
  newContent += '</span>';
  newContent += '<p>' + msg + '</p>';


  newDiv.innerHTML = newContent;
  newDiv.style.backgroundColor = color();

  container.appendChild(newDiv);
}

// RANDOM COLOR
function randomColor() {
  let colorArr = [];
  let tempString;
  for (var i = 0; i < 3; i++) {
    var rnd = Math.floor(Math.random() * 255);
    colorArr.push(rnd);
  }
  
  tempString = `rgba(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}, 0.3)`;
  return tempString;
}

// CLEAR ELEMENT VALUE
function clear(element) {
  if (element.value) {
    element.value = '';
  } 
}

// EVENT LISTENERS
document.addEventListener('click', (e) => {
  var target = e.target;
  var targetClass = target.className;
  var textValue = textArea.value;

  // add button
  if (targetClass == 'addBtn') {

    popup.style.display = 'block';
    clear(textArea);
    textArea.focus();
    warning.style.display = 'none';

  // submit button
  } else if (targetClass == 'submitBtn') {

    if (textValue) {
      insertQuote(textValue, randomColor);
      clear(textArea);
      popup.style.display = 'none';
    } else {
      warning.style.display = 'block';
    } 

  // cancel button
  } else if (targetClass == 'cancelBtn') {

    clear(textArea);
    popup.style.display = 'none';
    warning.style.display = 'none';

  } else if (targetClass == 'closeBtn') {

    target.parentNode.parentNode.remove();

  }
  
});



















/* Parsing JSON
 
var xhr = new XMLHttpRequest();
xhr.onload = function() {
   responseObject = JSON.parse(xhr.responseText);
   var newContent = '';
   for (var i = 0; i < responseObject.data.length; i++) {
    newContent += '<div class="data">';
    newContent += '<p class="quotes">' + responseObject.data[i].quotes + '</p>';
    newContent += '<p class="author">' + responseObject.data[i].author + '</p>';
    newContent += '</div>';
  }
  
  container.innerHTML = newContent;

};

xhr.open('GET', 'data.json', true);
xhr.send(null);
*/