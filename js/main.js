var projects = [
	{
		title: "Infinity Gallery",
		description: "The page gathers the best 75 shots from last year, and shows where it was taken. The styled Google Map on the left updates for each photo, based on the visibility of the current photo. The geoloaction is pulled from a JSON that was generated for the photos. I also used a lazy loading library because the desired photo sizes made the page load a bit slow. Upgrade ideas include sharing individual photos via Facebook or bookmarking the position of the current photo.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [23, 193, 43],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"],
		screenshot: "image/infinity.png"
	},
	{
		title: "Friendlocator",
		description: "Marshmallow dragée chupa chups dessert bear claw. Tiramisu brownie apple pie caramels dragée pie gummi bears soufflé. Gummi bears icing fruitcake oat cake biscuit halvah.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [56, 130, 213],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"],
		screenshot: "image/friendlocator.png"
	},
	{
		title: "Daily Odd Compliments",
		description: "Cheesecake croissant fruitcake soufflé danish pudding powder candy tiramisu. Chocolate macaroon candy canes wafer. Dragée soufflé dessert cookie marzipan jelly gingerbread sweet toffee. Oat cake cake icing icing jelly-o apple pie jelly-o.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [112, 134, 43],
		keywords: ["IE8", "Bootstrap", "Responsive"],
		screenshot: "image/daily.png"
	},
	{
		title: "SPAR 2014",
		description: "Marshmallow dragée chupa chups dessert bear claw. Tiramisu brownie apple pie caramels dragée pie gummi bears soufflé. Gummi bears icing fruitcake oat cake biscuit halvah.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [56, 70, 83],
		keywords: ["google maps", "IE8", "Responsive"],
		screenshot: "image/spar.png"
	},
	{
		title: "Condo Kings",
		description: "Cupcake ipsum dolor. Sit amet jelly beans bonbon soufflé. Apple pie icing macaroon unerdwear.com cheesecake soufflé wafer.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [248, 170, 129],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"],
		screenshot: "image/condo.png"
	},
	{
		title: "Blaah",
		description: "Gummi bears icing fruitcake oat cake biscuit halvah. Carrot cake chocolate jelly sweet roll soufflé brownie cupcake.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [72, 250, 312],
		keywords: ["Node JS", "heroku", "Bootstrap", "Responsive"],
		screenshot: "image/blaah.png"
	},
	{
		title: "BusyBees",
		description: "Cupcake cotton candy halvah danish icing sweet sesame snaps. Carrot cake dragée jelly topping lemon drops bear claw sugar plum sweet roll.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [232, 131, 82],
		keywords: ["google maps", "IE8", "Responsive"],
		screenshot: "image/busy.png"
	},
	{
		title: "Protofolio",
		description: "Cheesecake croissant fruitcake soufflé danish pudding powder candy tiramisu. Chocolate macaroon candy canes wafer. Dragée soufflé dessert cookie marzipan jelly gingerbread sweet toffee. Oat cake cake icing icing jelly-o apple pie jelly-o.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [432, 231, 123],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"],
		screenshot: "image/protofolio.png"
	}
]

function keyboardNav (e) {
	if ( e.keyCode == 39 || e.keyCode == 40) {
		if ($("a.active").next()) {
			$("a.active").next().click();
		};
	}
	else if ( e.keyCode == 37 || e.keyCode == 38) {
		if ($("a.active").prev()) {
			$("a.active").prev().click();
			if ($(".active").attr("id") === "project1") {
				$("#project0").scrollTo();
			};
		};
		
	}
}

function smoothScroll () {
	$(function() {
		$("a[href*=#]:not([href=#])").click(function() {
			if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
				if (target.length) {
					if (target[0].id === "project0") {
						$("html,body").animate({
							scrollTop: target.offset().top+48,
							easing: "easeOutBack"
						}, 300);
						return false;
					};
					$("html,body").animate({
						scrollTop: target.offset().top-64,
						easing: "easeOutBack"
					}, 370);
					return false;
				}
			}
		});
	});
}


function activateProjectNav (current) {
	$("a.active").removeClass();
	current++;
	var currentLink = "a:nth-child(" + current + ")";
	$(currentLink).addClass("active");
}


function scrollHandler (e) {
	var scrollUp = window.pageYOffset; 

	var isScrolledToBottom = $("#container").height() == (scrollUp + $(window).height());
	var imageCount = projects.length;
	var visibleProjects = [];

	// search for visible items based on rendered position:

	for (var i = 0; i < imageCount; i++) {
		var currentPos = $("#project"+i).position();
		var currentTop = currentPos.top;
		var currentHeight = $("#project" + i).height();
		var currentBottom = currentTop + currentHeight;

		var visible = ( !(currentBottom-scrollUp < 0 && currentTop-scrollUp < 0) &&
			!( currentBottom > (scrollUp + $(window).height()) && currentTop > (scrollUp + $(window).height()) ) );

		if (visible) {
			var currentImg = {
				"index": i, 
				"top": currentTop, 
				"bottom": currentBottom, 
				"scrollTop": scrollUp, 
				"scrollBottom": (scrollUp + $(window).height())
			};
			visibleProjects.push(currentImg);
		}

	}

	// search for maximum visibility amongst visible items only:

	var maxPercentage = 0;
	var maxIndex = -1;
	for (var j = 0, len = visibleProjects.length; j < len; j++) {
		var height = $("#project" + visibleProjects[j].index).height();
		var percentagePos = (visibleProjects[j].scrollBottom - visibleProjects[j].top) / height;
		var percentageNeg = (visibleProjects[j].bottom - visibleProjects[j].scrollTop) / height;

		var percentage = 0;

		if (percentageNeg < percentagePos) {
			percentage = percentageNeg;
		} 
		else {
			percentage = percentagePos;
		};

		if (percentage > maxPercentage) {
			maxPercentage = percentage;
			maxIndex = visibleProjects[j].index;
		};
	};

	activateProjectNav(maxIndex);
}

function checkOverflow(el) {

	var curOverflow = el.style.overflow;

	if ( !curOverflow || curOverflow === "visible" ) {
		el.style.overflow = "hidden";
	}

	var isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
	console.log("el.clientHeight", el.clientHeight, "el.scrollHeight", el.scrollHeight);
	el.style.overflow = curOverflow;
	return isOverflowing;
}


function handleScrollEvents () {
	$(window).scroll(scrollHandler);
	smoothScroll();
	$(document).keydown(function (e) { keyboardNav(e); } );
}

function renderProjects() {

	for (var i = 0, len = projects.length; i < len; i++) {
		var projectDiv = document.createElement("div");
		$(projectDiv).attr("id", "project"+i).addClass("project clearfix");

		var img = document.createElement("img");
		$(img).attr("src", projects[i].screenshot).css("width", "100%");

		var gitLink = document.createElement("a");
		$(gitLink).attr("href", projects[i].url).html("<img src='image/github.png'> View project on GitHub");

		var desc = document.createElement("div");
		$(desc).html("<h3>" + projects[i].title + "</h3><p>" + projects[i].description + "</p>").addClass("description");	


		var summ = document.createElement("div");
		var sumtext = (
			"<span class='codecount'>line counter</span> \
			<ul> \
				<li class='js'>" + projects[i].code[0] + "</strong></li> \
				<li class='css'>" + projects[i].code[1] + "</li> \
				<li class='html'>" + projects[i].code[2] + "</li> \
			</ul> \
			<div class='tags'> \
				<span>Keywords</span> \
				<ul> \
					<li>Google Maps</li> \
					<li>Lazy loading</li> \
					<li>Responsive</li> \
					<li>IE8+</li> \
					<li class='stretch'></li> \
				</ul> \
			</div>");
		$(summ)
			.html(sumtext)
			.addClass("summary");
		$([img, gitLink, desc, summ]).appendTo($(projectDiv));


		$(projectDiv).appendTo($("#portfolio"));
	};
}


function initialize() {
	renderProjects();
	handleScrollEvents();
}

$(document).ready(initialize);