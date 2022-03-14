
// Add a new item to the list

let li = $('<li></li>');
let inputValue = $('#input').val();
li.text(inputValue);

if (inputValue === '') {
  alert('You must write something!');
} else {
  $('#list').append(li);
}

// Cross out items on doubleclick

li.on('dblclick', function() {
  li.toggleClass('strike');
});

// Add X button to delete items

let deleteButton = $('<deleteButton>');
deleteButton.text('X');
li.append(deleteButton);

deleteButton.on('click', function() {
  li.addClass('delete');
})

$('#list').sortable();
}
