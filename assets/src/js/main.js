/**
 * All JavaScript goes here
 * 
 */
//This is to make sure js file is working 
console.log('Main');

///json Data dealer info 

console.log("json"); 

		$.getJSON("./resources/dealers.json", function (data, status)  {
				
				console.log("json2");
				console.table(data); 	
				const all = data;
				console.log(all); 
				const cardWrapper = $('.js-cards');
				console.log(cardWrapper);
				const dealers = all.dealers;
				console.log(dealers);
				dealers.forEach(function (dealer, index){
					console.log(dealer.data.name); 
					// build hours here
					const hours = `<li>Monday: 9-5</li>`;
					cardWrapper.append (`<div class="card-option">
				<h1 class=card-title> ${dealer.data.name} </h1>
				<hr>
				<button type="button"> <i class="fa fa-phone" aria-hidden="true"></i><p class="tap"> Tap to call </p>${dealer.data.phone1}</button>
				<div class="contact-pro">
					<p>Can't talk now? Click below to send an email.</p>
					<button class="js-contact-pro" type="button"><i class="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
				</div>
				<div class="business-hour-container">
					<ul class="business-hours js-business-${index}">
					<li>Business Hours</li>
						<li>Weekdays: ${dealer.data.weekHours.mon}</li>
						<li>Saturday: ${dealer.data.weekHours.sat}</li>
						<li>Sunday: ${dealer.data.weekHours.sun}</li>
					</ul>
				</div>	
				<div class="card-footer">
					<ul class="card-footer-list">
						<li><i class="fa fa-star" aria-hidden="true"></i>${dealer.data.certifications[0]}</li>
						<li><i class="fa fa-sun-o" aria-hidden="true"></i>${dealer.data.certifications[1]}</li>
						<li><i class="fa fa-home" aria-hidden="true"></i>${dealer.data.certifications[2]}</li>
					</ul>
				</div>
			</div>`);

				});
			// 		cardWrapper.append (`<div class="card-option">
			// 	<h1 class=card-title> ${plan.data.name} </h1>
			// 	<hr>
			// 	<button type="button"> <i class="fa fa-phone" aria-hidden="true"></i><p class="tap"> Tap to call </p>${dealers}</button>
			// 	<div class="contact-pro">
			// 		<p>Can't talk now? Click below to send an email.</p>
			// 		<button class="js-contact-pro" type="button"><i class="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
			// 	</div>
			// 	<div class="business-hour-container">
			// 		<ul class="business-hours js-business-${index}">
			// 		</ul>
			// 	</div>	
			// 	<div class="card-footer">
			// 		<ul class="card-footer-list">
			// 			<li><i class="fa fa-star" aria-hidden="true"></i>Installation Pro</li>
			// 			<li><i class="fa fa-sun-o" aria-hidden="true"></i>Service Pro</li>
			// 			<li><i class="fa fa-home" aria-hidden="true"></i>Residential Pro</li>
			// 		</ul>
			// 	</div>
			// </div>`);

					// const businessHours = $(`.js-business-${index}`); 
					// console.log(businessHours);
					// const hours = all.dealers.weekHours; 
					// console.log(hours);
					// hours.forEach(function (hour){
					// 	console.log(hour);
					// 	businessHours.append(`<li>${hour}</li>
					// 	<li>Weekdays 7:00am - 7:00pm</li>
					// 	<li>Saturdays 7:00am - 3:00pm</li>
					// 	<li>Sundays - CLOSED</li>`)
					// });
				// });	

		});

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

/*
$(document).ready(function(){ 
		console.log("contact-form-up"); 
   $(".check-change input[type='text']").on("change", function(){
    	console.log("checkworking"); 
        if ($(this).val().length > 0)
            $(this).prev("img").show();
        else
            $(this).next("img").show();
    	});
	});
*/

