jQuery(document).ready(function($) {
	var div = "#home";
	$('[data-toggle="tooltip"]').tooltip();   
	$('.content') .hide()
	$('.content#home').toggle();

	$('a[href^="#"]').on('click', function(event) {
		$('.content') .hide()
	    var target = $(this).attr('href');
	    div = target;
	    if (target == "#contact")
	    {
	    	if (window.innerWidth >= 1300 && window.innerHeight >= 700)
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
	    	$('.content'+target).show();
	    }
	    else
	    {
	    	$('.content'+target).show();
	    }
	});

	$(window).on('load', function(){
		div = window.location.hash;
		if (div.length == 0)
			div ="#home";
		var target = div;
		$('.content') .hide()
		if (target == "#contact")
	    {
	    	if (window.innerWidth >= 1300 && window.innerHeight >= 700)
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
	    	$('.content'+target).show();
	    }
	    else
	    {
	    	$('.content'+target).show();
	    }
	});

	$(window).on("popstate", function() {
		div = location.hash;
		var target = div;
		$('.content') .hide();
		$('.content'+target).show();
	});

	$(window).resize(function(){
    	if (div == "#contact")
	    {
	    	if (window.innerWidth >= 1300 && window.innerHeight >= 700)
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
  	});

  	$('.navbar-nav a').on('click', function(){
  		if (window.innerWidth <= 590)
  		{
  			$('.navbar-toggler').click(); 
  		}
	});
});