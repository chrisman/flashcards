/*
TODO:
1. how to load a local file?
2. change mouseover/mouseout to 'on click = toggle..'?
*/

$(document).ready(function(){
  var cards = jsyaml.load('greeting: hello\nname: world');
  $('div').text(cards['greeting']);

  $('div').on('mouseover', function(){
    $(this).text(cards['name']);
  });
  $('div').on('mouseout', function(){
    $(this).text(cards['greeting']);
  });
});
