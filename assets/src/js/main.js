/**
 * All JavaScript goes here
 * 
 */
//This is to make sure js file is working 
console.log('Main');
//This is for the hamburger menu dropdown 
$( document ).ready(function() {
		$( ".cross" ).hide(); //hide the cross 
		$( ".drop-menu" ).hide(); //hide the drop menu  
		$( ".hamburger" ).click(function() { //When you click the hamburger do this function
			$( ".drop-menu" ).slideToggle( "slow", function() { 
					//show the drop menu slowly 
					//hide the hamburger menu 
					$( ".hamburger" ).hide();
					//show the cross button
					$( ".cross" ).show();
				});
		});
		$( ".cross" ).click(function() { //then when you click the cross do this...
			$( ".drop-menu" ).slideToggle( "slow", function() { //move the drop menu slowly 		
				$( ".cross" ).hide(); //hide the cross 
				$( ".hamburger" ).show(); //show the hamburger menu again 
			});
		});	
});


//This is for the pop-up contact form// 
$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};


$(function(){
	$(".js-contact-pro").on('click', function(){
		console.log("button-clicked, window height: ", $(window).height()); //making sure button is clicked
		const buttonOffset = $(this).offset();
		const windowHeight = $(window).height();
		console.log('total offset: ', (buttonOffset - windowHeight));
		// apply top offset to contact pro form
		const contactForm = $('.contact-a-pro');
		contactForm.css({
			top: `${buttonOffset.top}px`
		})
		$('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(300); 
       	$('.contact-a-pro').slideFadeToggle();
        console.log("working"); 
        return false; 
	});

});


$(document).ready(function(){ 
   $(".check-change input[type='text']").on("change", function(){
    	console.log("checkworking"); 
        if ($(this).val().length > 0)
            $(this).prev("img").show();
        else
            $(this).next("img").show();
    	});
	});


