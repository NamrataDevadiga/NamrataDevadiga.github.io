jQuery(document).ready(function($) {

	$('[data-toggle="tooltip"]').tooltip({
		trigger : 'hover'
	});   

	$('.nav-link').on('click', function(event) {
		var ratio = window.innerWidth/window.innerHeight;
	    var ratio = window.innerWidth/window.innerHeight;
		var path = event.currentTarget.href;
		var page = path.split("/").pop();

		if (page == "index.html" || page == "")
		{
			var elements = document.getElementsByClassName('txt-rotate');
			for (var i=0; i<elements.length; i++) {
			    var toRotate = elements[i].getAttribute('data-rotate');
			    var period = elements[i].getAttribute('data-period');
			    if (toRotate) {
			      new TxtRotate(elements[i], JSON.parse(toRotate), period);
			   	}
			}
		  // INJECT CSS
		  	var css = document.createElement("style");
		  	css.type = "text/css";
		  	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
		  	document.body.appendChild(css);
		}

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

	var TxtRotate = function(el, toRotate, period) {
	  this.toRotate = toRotate;
	  this.el = el;
	  this.loopNum = 0;
	  this.period = parseInt(period, 10) || 2000;
	  this.txt = '';
	  this.tick();
	  this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function() {
	  var i = this.loopNum % this.toRotate.length;
	  var fullTxt = this.toRotate[i];

	  if (this.isDeleting) {
	    this.txt = fullTxt.substring(0, this.txt.length - 1);
	  } else {
	    this.txt = fullTxt.substring(0, this.txt.length + 1);
	  }

  	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  	var that = this;
  	var delta = 300 - Math.random() * 100;

  	if (this.isDeleting) { delta /= 2; }

  	if (!this.isDeleting && this.txt === fullTxt) {
    	delta = this.period;
    	this.isDeleting = true;
  	} else if (this.isDeleting && this.txt === '') {
    	this.isDeleting = false;
    	this.loopNum++;
    	delta = 500;
  	}

  	setTimeout(function() {
    	that.tick();
  	}, delta);
	};

	$(window).on('load', function(){
		console.log("Inside on load");
		var ratio = window.innerWidth/window.innerHeight;
		var path = window.location.pathname;
		var page = path.split("/").pop();

		if (page == "index.html" || page == "")
		{
			var elements = document.getElementsByClassName('txt-rotate');
			for (var i=0; i<elements.length; i++) {
			    var toRotate = elements[i].getAttribute('data-rotate');
			    var period = elements[i].getAttribute('data-period');
			    if (toRotate) {
			      new TxtRotate(elements[i], JSON.parse(toRotate), period);
			   	}
			}
		  // INJECT CSS
		  	var css = document.createElement("style");
		  	css.type = "text/css";
		  	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
		  	document.body.appendChild(css);
		}
		
		if (page == "contact.html")
	    {
	    	//$('.content') .hide()
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
	    //$('.content').show();
	});

	$(window).resize(function(){
		var ratio = window.innerWidth/window.innerHeight;
		var path = window.location.pathname;
		var page = path.split("/").pop();
    	if (page == "contact.html")
	    {
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
  	});

	$('.navbar-nav a').on('click', function(){
  		if (window.innerWidth <= 590)
  		{
  			$('.navbar-toggler').click();
  		}
	});
});