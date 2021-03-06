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

  elements.container.appendChild(newDiv);
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

// CLEAR TEXTAREA VALUE
function clear() {
  var el = elements.textArea;

  if (el.value) {
    el.value = '';
  } 
}


// EVENT LISTENERS
document.addEventListener('click', (e) => {
  var target = e.target;
  var targetClass = target.className;
  var textValue = elements.textArea.value;

  // add button
  if (targetClass == 'addBtn') {

    elements.popup.style.display = 'block';
    clear();
    elements.textArea.focus();
    elements.warning.style.display = 'none';

  // submit button
  } else if (targetClass == 'submitBtn') {

    if (textValue) {
      insertQuote(textValue, randomColor);
      clear();
      elements.popup.style.display = 'none';
    } else {
      elements.warning.style.display = 'block';
    } 

  // cancel button
  } else if (targetClass == 'cancelBtn') {

    clear();
    elements.popup.style.display = 'none';
    elements.warning.style.display = 'none';
  
  // close button
  } else if (targetClass == 'closeBtn') {

    target.parentNode.parentNode.remove();

  }
  
});