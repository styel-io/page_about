$('area').mousedown(function(e) {
    $(this).mapster('set',true);
 });
 
 $('area').mouseup(function(e) {
    $(this).mapster('set',false);
 });
 
 $('area').bind( "touchstart", function(e){
    $(this).mapster('set',true);
 });
 
 $('area').bind( "touchend", function(e){
    $(this).mapster('set',false);
 });