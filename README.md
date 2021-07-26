
# Remove NitroPack 
The code below is to remove nitropack from the website footer.

    jQuery(document).ready(function($){
      setTimeout(function(){
         var tag_new = $("template").last().attr("id");
         $("#" + tag_new).css("display", "none");
         $("#" + tag_new).next().next().css("display", "none");
      }, 100);
    });
Place the code above on every page on your website.

If you like NitroPack please support them by purchasing one of their plans [here](https://nitropack.io/).
