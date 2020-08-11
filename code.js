jQuery(document).ready(function($) {
	$('.content') .hide()
	
	$('[data-toggle="tooltip"]').tooltip({
		trigger : 'hover'
	});   

	$('.nav-link').on('click', function(event) {
		var ratio = window.innerWidth/window.innerHeight;
	    var ratio = window.innerWidth/window.innerHeight;
		var path = window.location.pathname;
		var page = path.split("/").pop();

	    if (page == "contact.html")
	    {
	    	$('.content') .hide()
	    	if (window.innerWidth >= 1300 && window.innerHeight >= 700 && ratio >= 1.75)
	    	{
	    		$(".contact-small").hide();
	    		$(".contact-medium").hide();
	    		$(".contact-large").show();
	    	}
	    	else if(window.innerWidth <= 590)
	    	{
	    		$(".contact-large").hide();
	    		$(".contact-small").show();
	    		$(".contact-medium").hide();
	    	}
	    	else
	    	{
	    		$(".contact-large").hide();
	    		$(".contact-small").hide();
	    		$(".contact-medium").show();
	    	}
	    	$('.content').show();
	    }
	});

	$(window).on('load', function(){
		var ratio = window.innerWidth/window.innerHeight;
		var path = window.location.pathname;
		var page = path.split("/").pop();
		
		if (page == "contact.html")
	    {
	    	$('.content') .hide()
	    	if (window.innerWidth >= 1300 && window.innerHeight >= 700 && ratio >= 1.75)
	    	{
	    		$(".contact-small").hide();
	    		$(".contact-medium").hide();
	    		$(".contact-large").show();
	    	}
	    	else if(window.innerWidth <= 590)
	    	{
	    		$(".contact-large").hide();
	    		$(".contact-small").show();
	    		$(".contact-medium").hide();
	    	}
	    	else
	    	{
	    		$(".contact-large").hide();
	    		$(".contact-small").hide();
	    		$(".contact-medium").show();
	    	}
	    	$('.content').show();
	    }
	});

	// $(window).on("popstate", function() {
	// 	div = location.hash;
	// 	var target = div;
	// 	$('.content') .hide();
	// 	$('.content'+target).show();
	// });

	$(window).resize(function(){
		var ratio = window.innerWidth/window.innerHeight;
		var path = window.location.pathname;
		var page = path.split("/").pop();
    	if (page == "contact.html")
	    {
	    	$('.content') .hide()
	    	if (window.innerWidth >= 1300 && window.innerHeight >= 700 && ratio >= 1.75)
	    	{
	    		$(".contact-small").hide();
	    		$(".contact-medium").hide();
	    		$(".contact-large").show();
	    	}
	    	else if(window.innerWidth <= 590)
	    	{
	    		$(".contact-large").hide();
	    		$(".contact-small").show();
	    		$(".contact-medium").hide();
	    	}
	    	else
	    	{
	    		$(".contact-large").hide();
	    		$(".contact-small").hide();
	    		$(".contact-medium").show();
	    	}	    
	    }
	    $('.content').show()
  	});

	$('.navbar-nav a').on('click', function(){
  		if (window.innerWidth <= 590)
  		{
  			$('.navbar-toggler').click();
  		}
	});
});