document.addEventListener("DOMContentLoaded", function(event) {
    /*var listImg=$('img');
    for (var i = 0; i < listImg.length; i++) {
      console.log($(listImg[i]).attr('src'));
      $('#list-img').append( "<li><img src='"+$(listImg[i]).attr('src')+"'></img></li>" );
    }*/
    $('.html5-video-container').before("<p>Hai Phút Rưỡi</p>");
});
$(document).ready(function(){
  $(document).mouseup(function(e){
    var selection;
    
    if (window.getSelection) {
      selection = window.getSelection();
    } else if (document.selection) {
      selection = document.selection.createRange();
    }
    debugger
    selection.toString() !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
  })
})