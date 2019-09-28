let list = [];

function resetFunction() {
  list = [];
  $('#list').empty();
}

function orderFunction() {
  let $list = $('#list');
  let input = document.getElementById('orderInput').value;
  let listLength = $("#list li").length;
  let newList = [input];

  $('#orderInput').val('');

  if (input.indexOf(',') > -1) {
     newList = input.split(',');
  }
  for (let i = 0; i < newList.length; i++) {
      newList[i].trim();
  }

  list = list.concat(newList);

  list.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  $list.html('');
  for (let i = 0; i < list.length; i++) {
      $list.append('<li>' + list[i] + '</li>');
  }

  $('#list li:odd').css('background-color','#F5F5F5');
  $('#list li:even').css('background-color','white');
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

  let $overlay = $('.overlay');
  let $helpDiv = $('.helpDiv');
  $('.helpButton').click(function() {
    $overlay.fadeIn('fast');
    $helpDiv.fadeIn('fast');
  });
  $('.overlay').click(function() {
    $overlay.fadeOut('fast');
    $helpDiv.fadeOut('fast');
  });
  $('.close').click(function() {
    $overlay.fadeOut('fast');
    $helpDiv.fadeOut('fast');
  });


});
