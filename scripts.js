jQuery(document).ready(function($){
  setTimeout(function(){
     var tag_new = $("template").last().attr("id");
     $("#" + tag_new).css("display", "none");
     $("#" + tag_new).next().next().css("display", "none");
  }, 100);
});
