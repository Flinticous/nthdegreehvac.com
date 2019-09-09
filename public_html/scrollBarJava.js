$(window).on('load', function() {
	scrollBar("scroll-group","scroll", "-50");
});



var id;
		
		$(window).resize(function() {

			clearTimeout(id);
			id = setTimeout(doneResizing, 500);

		});


	function doneResizing(){

		scrollBar("scroll-group","scroll", "-50"); 


	}




function scrollBar(wrapperBox,wrapperId, scrollSpeed) {
			var wrapperId2 = wrapperId+2;
			var multiplier = 2;	
			var totalWidth = 0;
			var translateValue1  = 0;
			var translateValue2  = 0;
			var	windowWidth = $("#"+wrapperBox).width();
			var translateSpeed = scrollSpeed/60;
			var $wrapperBoxContent = $("#"+wrapperId).clone();
	
			var count = $("#"+wrapperId+" .news-item" ).length;
			if (count < 1) {
				console.info("Found 0 news items.");
				$("#news").remove();
				return;
			}

			$("#"+wrapperId+" .news-item" ).each(function() {
				totalWidth =  totalWidth + $( this ).outerWidth( true );
			});

			if( windowWidth > totalWidth){

				while ( windowWidth > totalWidth*multiplier){
					multiplier = multiplier + 1;
				}
				if (windowWidth < totalWidth*multiplier){
					/*var cloneLinks = $("#scroll1" ).html();  */
					var $cloneLinks = $("#"+wrapperId+" .news-item").clone();
					$("#"+wrapperId+" .news-item").remove();


					for (i=1; i <= multiplier; i++) {

						$cloneLinks.clone().appendTo( $("#"+wrapperId) );

						/*$( "#scroll1").append(cloneLinks); */


					}

					// totalWidth = totalWidth*multiplier;

					assignValues();
					repeatOften();
				}


			}

			else{


				assignValues();
				repeatOften();



			}


			function assignValues(){

				if($("#"+wrapperId2).length !== 0)
					{ $("#"+wrapperId2).remove();}
				
				totalWidth = $('#scroll').width();
					
// 								$("#"+wrapperId+" .news-item" ).each(function() {
// 				totalWidth =  totalWidth + $( this ).outerWidth( true );
// 									// totalWidth =  totalWidth + $( this ).width( ) + 45;
// 										// console.log("values: ", totalWidth);
								
// 			});

					// console.log("Last value: ", totalWidth);

				if(translateSpeed < 0){

					$("#"+wrapperId).clone().prop('id',wrapperId2).appendTo( $( "#"+wrapperBox) );

					translateValue1 = 0 ;
					translateValue2 = totalWidth;

					// $("#"+wrapperId).css("width" , totalWidth);
					// $( "#"+wrapperId2).css("width" , totalWidth);
					// $("#"+wrapperId).width(totalWidth);
					// $( "#"+wrapperId2).width(totalWidth);
					

					$( "#"+wrapperId).css("transform", "translateX("+translateValue1+"px)");


					$( "#"+wrapperId2).css("transform", "translateX("+translateValue2+"px)");

				}

				

				else{

					$("#"+wrapperId).clone().prop('id',wrapperId2).appendTo( $( "#"+wrapperBox) );

					translateValue1 = windowWidth - totalWidth ;
					translateValue2 = translateValue2 - totalWidth - totalWidth + windowWidth;

					// $("#"+wrapperId).css("width" , totalWidth);
					// $( "#"+wrapperId2).css("width" , totalWidth);
					// $("#"+wrapperId).width(totalWidth);
					// $( "#"+wrapperId2).width(totalWidth);

					$( "#"+wrapperId).css("transform", "translateX("+translateValue1+"px)");


					$( "#"+wrapperId2).css("transform", "translateX("+translateValue2+"px)");

				}


			}

			var globalID;
			var num = 0;
			var running = true;

			function repeatOften() {
				
										totalWidth = $('#scroll').width();
					
// 								$("#"+wrapperId+" .news-item" ).each(function() {
// 				totalWidth =  totalWidth + $( this ).outerWidth( true );
// 									// totalWidth =  totalWidth + $( this ).width( ) + 45;
// 									// console.log(totalWidth);
// 			});
				

				if (!running) {
					return;
				}


				if(translateSpeed < 0 ) {

					if ( translateValue1 >=  -totalWidth) {            
							translateValue1 = translateValue1 + translateSpeed;
						$("#"+wrapperId).css("transform", "translateX("+translateValue1+"px)");

					}
					else{
						
												/* translateValue1 =   translateValue2 + totalWidth  + translateSpeed + translateSpeed; */
						translateValue1 =   translateValue2 + totalWidth + translateSpeed ; 
						$("#"+wrapperId).css("transform", "translateX("+translateValue1+"px)");

					}

					if ( translateValue2 >= -totalWidth) {            
						translateValue2 = translateValue2 + translateSpeed;
						$("#"+wrapperId2).css("transform", "translateX("+translateValue2+"px)");

					}

					else{	
						
							/*translateValue2 =  translateValue1 + totalWidth  + translateSpeed + translateSpeed; */
												translateValue2 =  translateValue1 + totalWidth ;
						$("#"+wrapperId2).css("transform", "translateX("+translateValue2+"px)");
						
					}



				}

				else{
					if ( translateValue1 > windowWidth ) {            
						translateValue1 = windowWidth - totalWidth - totalWidth + translateSpeed + translateSpeed;
						$("#"+wrapperId).css("transform", "translateX("+translateValue1+"px)");

					}
					else{

						translateValue1 = translateValue1 + translateSpeed;
						$("#"+wrapperId).css("transform", "translateX("+translateValue1+"px)");
					}

					if ( translateValue2 > windowWidth ) {            

						translateValue2 =  windowWidth - totalWidth - totalWidth + translateSpeed + translateSpeed;
						$("#"+wrapperId2).css("transform", "translateX("+translateValue2+"px)");
					}

					else{	
						translateValue2 = translateValue2 + translateSpeed;
						$("#"+wrapperId2).css("transform", "translateX("+translateValue2+"px)");
					}

				}







				globalID = requestAnimationFrame(repeatOften);
			}

			globalID = requestAnimationFrame(repeatOften);


			function startScroll() {
				if (!running) {
					running = true;
					requestAnimationFrame(repeatOften);
				}
			}

			function stopScroll() {
				running = false;
				cancelAnimationFrame(globalID);
			}


	
	
	$("#"+wrapperBox).on("mouseenter",  function() {
				stopScroll();
			}).on("mouseleave", function() {
				startScroll();
			}); 
	
	

}
