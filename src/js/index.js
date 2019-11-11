// ELEMENTS
var container = document.querySelector('.content');
var popup = document.querySelector('.popup');
var addBtn = document.querySelector('.addBtn');
var submitBtn = document.querySelector('.submitBtn');
var cancelBtn = document.querySelector('.cancelBtn');
var textArea = document.getElementsByTagName('textarea');
var warning = document.querySelector('.popup span');

// INSERT QUOTE
function insertQuote(msg, color) {
  var newContent = '';
  var newDiv = document.createElement('div');

  newDiv.setAttribute('class', 'data');

  newContent += '<span class="closeBtn">';
  newContent += '<img src="images/close-icon.png" alt="Close button">';
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

// ADD BTN
addBtn.addEventListener('click', function() {
  popup.style.display = 'block';
  textArea[0].focus();
  warning.style.display = 'none';
});

// SUBMIT BTN
submitBtn.addEventListener('click', function() {
  var textValue = textArea[0].value;

  if (textValue) {
    insertQuote(textValue, randomColor);
    textArea[0].textContent = '';
    popup.style.display = 'none'; 
  } else {
    warning.style.display = 'block';
  }

});

// CANCEL BTN
cancelBtn.addEventListener('click', function() {
  textArea[0].textContent = '';
  popup.style.display = 'none';
  warning.style.display = 'none';
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