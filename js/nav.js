// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault();
	
		if (navTop.getAttribute('data-state') == 'expanded' ){
		
			navTop.setAttribute('data-state', 'collapsed')
			
		} else {
			
			navTop.setAttribute('data-state', 'expanded')
			
		}
				
	});

var hashTagActive = "";
$(document).ready( function() {
	$(".smooth-scroll li a").click(function (event) {

		if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
			event.preventDefault();

			//calculate destination place
			var dest = 0;
			if ( $(this.hash).offset().top > $(document).height() - $(window).height() ) {
				dest = $(document).height() - $(window).height();
			}
			else {
				dest = $(this.hash).offset().top;
			}

			//go to destination
			$('html, body').animate({
			    scrollTop: dest
			}, 700, 'swing');

			hashTagActive = this.hash;
		}

	});
});
