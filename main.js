$(document).ready(function(){
  // var cards = jsyaml.load('greeting: hello\nname: world');
  var cards = jsyaml.load('greeting: hello\nname: world');
  $('div').text(cards['greeting']);
});
