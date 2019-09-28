var list = [];

function resetFunction() {
  list = [];
  $('#list').empty();
}

function orderFunction() {
  var input = document.getElementById('orderInput').value;
  var inputNew = input.trim();
  var inputLower = inputNew.toLowerCase();
  var listLength = $("#list li").length;
  var newList = [inputLower];
  var newListSorted
  var newListOriginal;
  var location;
  var newLocation;
  var sortedList;
  var originalLocation;

  $('#orderInput').val('');

  if (inputLower == "") {
    return;
  }

  if (inputNew.indexOf(', ') > -1) {
    newListOriginal = inputNew.split(', ');

    newList = inputLower.split(', ');
    newListSorted = inputLower.split(', ').sort();
  }
  else if (inputNew.indexOf(',') > -1) {
    newListOriginal = inputNew.split(',');

    newList = inputLower.split(',');
    newListSorted = inputLower.split(',').sort();
  }
  else {
    newListSorted = newList;
    newListOriginal = [inputNew];
  }

  list = list.concat(newList);

  sortedList = list.sort();

  for (var i = 0; i < newList.length; i++) {
    location = sortedList.indexOf(newListSorted[i]);

    originalLocation = newList.indexOf(newListSorted[i]);

    if (location == 0) {
      $('#list').prepend('<li id="listItem">'+newListOriginal[originalLocation]+'</li>');
      $('#list li:odd').css('background-color','#F5F5F5');
      $('#list li:even').css('background-color','white');
    }
    else {
      newLocation = location - 1;
      $($('#list').find('li').get(newLocation)).after('<li id="listItem">'+newListOriginal[originalLocation]+'</li>');
      $('#list li:odd').css('background-color','#F5F5F5');
      $('#list li:even').css('background-color','white');
    }
  }
  return;

}

$(document).ready(function() {
  $('.overlay').hide();
  $('.helpDiv').hide();

  $('#orderInput').focus();

  $('.submit').click(function() {
    $('#orderInput').focus();
  });

  $('input').keyup(function(event) {
    if (event.which == 13) {
        orderFunction();
    }
  });


  $('.helpButton').click(function() {
    $('.overlay').fadeIn('fast');
    $('.helpDiv').fadeIn('fast');
  });
  $('.overlay').click(function() {
    $('.overlay').fadeOut('fast');
    $('.helpDiv').fadeOut('fast');
  });
  $('.close').click(function() {
    $('.overlay').fadeOut('fast');
    $('.helpDiv').fadeOut('fast');
  });


});
