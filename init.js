$( window ).resize(function() {
  
   var windowHeight = $( window ).height();
var pageHeight= $( "footer" ).outerHeight() + $( "header" ).outerHeight() + $( "#subpage" ).height() ;
if (windowHeight > pageHeight ){
  paddingHeight = windowHeight - pageHeight;
  $( "#subpage" ).css("padding-bottom" , paddingHeight);
}
    else{$( "#subpage" ).css("padding-bottom" , "");}

  
  
  
  });


$( document ).ready(function() {

  // if($(".carousel").length > 0){
  // $(".carousel").swiperight(function() {
  //     $(this).carousel('prev');

  //   });
  //  $(".carousel").swipeleft(function() {
  //     $(this).carousel('next');

  //  });
  // }
  
  $("#year").text(new Date().getFullYear());
  
  
   var windowHeight = $( window ).height();
var pageHeight= $( "footer" ).outerHeight() + $( "header" ).outerHeight() + $( "#subpage" ).height() ;
if (windowHeight > pageHeight ){
  paddingHeight = windowHeight - pageHeight;
  $( "#subpage" ).css("padding-bottom" , paddingHeight);
}
    else{$( "#subpage" ).css("padding-bottom" , "");}

  
  
    });
  

