require('./jquery.magnific-popup.min.js');

$(document).ready(function() {
  // Appends a hidden trigger
  var trigger = '<a id="trigger-popup" href="/boot/images/flyer.jpg" style="display:none"></a>';
  $('body').append(trigger);
  // Sets the magnific popup
  $('#trigger-popup').magnificPopup({
    type: 'image'
  });
  // Triggers the popup
  if(window.location.pathname != '/envivo')
    $('#trigger-popup').click();
});

