
// Add a new item to the list

let li = $('<li></li>');
let inputValue = $('#input').val();
li.text(inputValue);

if (inputValue === '') {
  alert('You must write something!');
} else {
  $('#list').append(li);
}

