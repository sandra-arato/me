
var projects = [
{
	title: "UV printer",
	description: "Promotional website for introducing a new product in the digital printing market. Design, site building and analytics administration. I used Google Spreadsheets to register event attendees. I added Analytics tracking events and Facebook tracking pixel to help the marketing team.",
	url: "http://www.uvprinter.hu",
	code: [218, 1099, 932],
	keywords: ["HTML5", "CSS3", "Javascript", "JQuery", "Google Maps", "Mobile first", "Responsive", "Form validation", "Google Spreadsheets", "Event tracking", "Facebook API"],
	screenshot: "image/uvprinter.png"
},
{
	title: "FHB Lakáshitelek",
	description: "Landing page of FHB Bank's spring campaign about home loans. Design was provided by Mito Creative Agency. During site building, I had to merge two existing sites into one based on the design, and implement it so that it fits to the existing framework and front-end practices of the client.",
	url: "http://www.fhb.hu/lakashitelek",
	code: [317, 1020, 404],
	keywords: ["HTML5", "CSS3", "Javascript", "JQuery", "Form validation", "Bootstrap", "Event tracking", "AJAX call", "Dynamic redirection"],
	screenshot: "image/fhb.png"
},
{
	title: "2013 Was Awesome",
	description: "It's a gallery for 2013's best shots, and shows on a map where it was taken. I also used a lazy loading library because the desired photo sizes made the page load a bit slow. Upgrade ideas include sharing individual photos via Facebook or bookmarking the position of the current photo.",
	url: "http://sandraszenti.github.io/2013",
	code: [330, 618, 44],
	keywords: ["HTML5", "CSS3", "Javascript", "JQuery", "Google Maps", "Map styling", "IE8", "Lazy loading", "Responsive"],
	screenshot: "image/2013.png"
},
{
	title: "Friendlocator",
	description: "The website collects the users Facebook friends around the world and displays them with markers. The map is positioned based on the user's current location, and when the user click a marker, the photos and names of friends in that city pop up in an info container.",
	url: "http://sandraszenti.github.io/friendlocator",
	code: [56, 88, 162], // check later
	keywords: ["FQL", "Facebook API", "Multi-queries", "Map styling", "Google Maps", "IE8", "Bootstrap", "Responsive"],
	screenshot: "image/friendlocator.png"
},
{
	title: "Condo Kings",
	description: "A simple one page site building based on a free desing provided by New York based Hezy Team - the PSD can be downloaded from their Behance profile. I added smooth scrolling and a vertically sliced menu - start scrolling the page slowly from the top to see it working.",
	url: "http://sandraszenti.github.io/condo-kings",
	code: [56, 373, 162],
	keywords: ["PSD slicing", "HTML5", "CSS3", "Javascript", "JQuery"],
	screenshot: "image/condo.png"
},
{
	title: "Daily Odd Compliments",
	description: "Based on some random quotes from the original tumblr page, the website animates through the given quotes. This project was a practicing excercise to understand slicing animations better. Updating ideas include pulling live data from twitter account and sharing quotes.",
	url: "http://sandraszenti.github.io/daily-odd-compliments",
	code: [239, 530, 21],
	keywords: ["HTML5", "CSS3", "Javascript", "JQuery", "CSS Background Patterns", "Google Fonts"],
	screenshot: "image/daily.png"
},
{
	title: "SPAR 2014",
	description: "The site is dedicated SPAR 2014 conference, that gathers professionals around the world from the 3D scanning industry. The map's markers represent the exhibitors of the show, their name and contact info is displayed on click. The information is pulled from a Google Speadsheet.",
	url: "http://www.sandraszenti.github.io/spar2014",
	code: [160, 564, 30],
	keywords: ["Google Maps", "Google Spreadsheet", "HTML5", "CSS3", "Javascript", "JQuery", "JSON", "Google App script"],
	screenshot: "image/spar.png"
},
{
	title: "Protofolio",
	description: "I started building this site for a friend, as an optional portfolio. I used Bootstrap to secure mobile respnsiveness and Masonry to fix grid problems. I used handlebars for creating the project templates, and JavaScript to add project thumbnails a caroussel functionality on hover.",
	url: "http://sandraszenti.github.io/petikeprivate",
	code: [2555, 226, 297],
	keywords: ["HTML5", "CSS3", "Javascript", "JQuery", "caroussel", "Handlebars", "Bootstrap", "Responsive", "Masonry"],
	screenshot: "image/protofolio.png"
},
{
	title: "Blaah",
	description: "A realtime chat room based on Node.JS, setted up on a Heroku webserver. The aim of this project was to learn about NodeJS and getting a bit more familiar with backend terms. Updating this project will mostly focus on functionality and a more effective code, and a bit of styling.",
	url: "http://sandraszenti.github.io/blaah",
	code: [72, 141, 312], //check later
	keywords: ["Node JS", "Heroku", "JavaScript", "HTML5", "CSS3", "JQuery"],
	screenshot: "image/blaah.png",
	live: false
},
{
	title: "BusyBees",
	description: "The final project of my General Assembly - Intro to Front End Web Development class. The site is an informational website for a new employee of an imaginary company, it introduces the user to his/her new collegues, company history and the workspace.",
	url: "http://sandraszenti.github.io/gafewd",
	code: [32, 658, 82], // check later
	keywords: ["HTML5", "CSS3", "Javascript", "JQuery", "Animations"],
	screenshot: "image/busy.png",
	live: false
}
]

function createChart () {
	var lineCountChart = {
		html: 0,
		css: 0,
		js: 0,
		api: 0
	}
	for (var i = 0, len = projects.length; i < len; i++) {
		lineCountChart.html += projects[i].code[2];
		lineCountChart.css += projects[i].code[1];
		lineCountChart.js += projects[i].code[0] * 0.9;
		lineCountChart.api += projects[i].code[0] * 0.1;
	};

	// console.log("lines");
	// console.log(lineCountChart);

	var data = [
			{name: "HTML", val: lineCountChart.html},  
			{name: "CSS", val: lineCountChart.css}, 
			{name: "JS", val: lineCountChart.js},
			{name: "APIs", val: lineCountChart.api}
		];
	var color = ["#e45025", "#0c73b7", "#e4a229", "#35b334"];
	// var color = ["#e45025", "#56C0E4", "#a3bc6d", "#856eb0"];
	var w = 160,
		h = 180,
		r = w / 2,
		labelr = r + 14, // radius for label anchor
		donut = d3.layout.pie(),
		arc = d3.svg.arc().innerRadius(r * .43).outerRadius(r);

		var vis = d3.select("div#chart")
			.append("svg:svg")
			.data([data])
			.attr("width", w + 80)
			.attr("height", h);

		var arcs = vis.selectAll("g.arc")
			.data(donut.value(function(d) { return d.val }))
			.enter().append("svg:g")
			.attr("class", "arc")
			.attr("transform", "translate(" + (r + 30) + "," + (r + 20) + ")");

		arcs.append("svg:path")
			.attr("fill", function(d, i) { return color[i]; })
			.attr("d", arc);
		
		arcs.append("svg:text")
			.attr("transform", function(d) {
					var c = arc.centroid(d),
					x = c[0],
					y = c[1],
					// pythagorean theorem for hypotenuse
					h = Math.sqrt(x*x + y*y);
					return "translate(" + (x/h * labelr) +  ',' + (y/h * labelr) +  ")"; 
				})
			.attr("dy", ".35em")
			.attr("fill", function(d, i) { return color[i]; })
			.attr("text-anchor", function(d) {
				// are we past the center?
				return (d.endAngle + d.startAngle)/2 > Math.PI ? "end" : "start";
				})
			.text(function(d, i) { return data[i].name; });  
}

function animateMenuButton () {


	if ($("#profile").css("display") === "none") {
		// console.log("showing");
		$("#profile").css("display", "flex");
		$("#profile").animate({
			"width": "240px",
		}, {
			duration: 300,
			queue: false
		});
		$("#portfolio").animate({
			"left": "240px"
		}, {
			duration: 300,
			queue: false
		});
		$("#me-menu").css("background-color", "#000000");
	}
	else {
		$("#portfolio").animate({
			"left": "0"
		}, {
			duration: 100,
			queue: false
		});
		$("#profile").animate({
			"width": "0",
		}, {
			duration: 300,
			queue: false
		});
		$("#profile").css("display", "none");
		$("#me-menu").css("background-color", "#FFB671");
	}
}

// this function makes it possible to navigate through the projects with only arrow keys
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

// when a project is visible, its nav equivalent gets activated by this function
function activateProjectNav (current) {
	$("a.previous").removeClass();
	$("a.active").removeClass();
	var prevLink = "a:nth-of-type(" + current + ")";
	$(prevLink).addClass("previous");
	current++;
	var currentLink = "a:nth-of-type(" + current + ")";
	$(currentLink).addClass("active");
}

// this function keeps track of which project/element is currently visible in the viewport
function scrollHandler (e) {
	var scrollUp = window.pageYOffset; 

	// var isScrolledToBottom = $("#container").height() == (scrollUp + $(window).height());
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

function handleScrollEvents () {
	$(window).scroll(scrollHandler);
	smoothScroll();
	// $(document).keydown(function (e) { keyboardNav(e); } );
}

function renderProjects() {

	// creates Project divs for each project based on JSON above.
	// could have used a templating solution as well, it pretty much does the same thing.
	// maybe I'll change it to a template later. like handlebars or sg.

	for (var i = 0, len = projects.length; i < len; i++) {

		var projectDiv = document.createElement("div");
		$(projectDiv).attr("id", "project"+i).addClass("project clearfix");

		var img = document.createElement("img");
		$(img).attr("src", projects[i].screenshot).css("width", "100%");

		var desc = document.createElement("div");
		var projectTitle = document.createElement("h3");
		$(projectTitle).html(projects[i].title).appendTo($(desc));
		$(desc).addClass("description");
			
		if ( projects[i].live !== false ) {
			var projectLink = document.createElement("a");
			$(projectLink)
				.html("click to view project site")
				.attr({
					"href": projects[i].url,
					"target": "_blank",
					"onclick": "ga('send', 'event', 'Leave Portfolio', 'Project Site', '" + projects[i].title + "');"
				});
			$(projectLink).appendTo($(desc));
		};

		var projectDescription = document.createElement("p");
		$(projectDescription).html(projects[i].description).appendTo($(desc));

		if ( projects[i].url.search("github") > 0 ) {
			var gitLink = document.createElement("a");
			$(gitLink).attr({
				"href": "//www.github.com/sandraszenti/" + projects[i].url.split("/")[3],
				"class": "sticker",
				"target": "_blank",
				"onclick": "ga('send', 'event', 'Leave Portfolio', 'GitHub', '" + projects[i].title + "');"
			});
			var gitLinkAfter = document.createElement("span")
			$(gitLinkAfter).html("view source on GitHub");
		};

		var summ = document.createElement("div");
		var keywords = "<div class='tags'><span>Keywords</span><ul>";
		for (var k = 0, numberOfKeywords = projects[i].keywords.length; k < numberOfKeywords; k++) {
			keywords += "<li>" + projects[i].keywords[k] + "</li>";
		};
		keywords += "</ul></div>";

		var sumtext = (
			"<div class='codecount'> \
				<span>line counter</span> \
				<ul> \
					<li class='js'>" + projects[i].code[0] + "</strong></li> \
					<li class='css'>" + projects[i].code[1] + "</li> \
					<li class='html'>" + projects[i].code[2] + "</li> \
				</ul> \
			</div> \
			<div class='tags'> \
			</div>");
		$(summ).html(sumtext + keywords).addClass("summary");

		if (gitLink) {
			$([img, gitLink, gitLinkAfter, desc, summ]).appendTo($(projectDiv));
		}
		else {
			$([img, desc, summ]).appendTo($(projectDiv));
		}

		$(projectDiv).appendTo($("#portfolio"));
	};
}


function initialize() {
	// fill index.html with portfolio projects
	renderProjects();
	$("#profile").css("min-height", $(window).height());
	createChart();

	// setup Github stickers on projects
	Sticker.init(".project a.sticker");

	// display text above Github sticker on hover
	$(".project a").hover(
		function() {$(this).next("span").css("visibility", "visible");}, 
		function() {$(this).next("span").css("visibility", "hidden");}
	);
	
	handleScrollEvents();

	// set profile height
	// $("#profile").height(Math.floor($(window).height()));
	// $(window).resize(function () {
	// 	if ($(window).width > 980) {
	// 		$("#profile").css("height", "100%");	
	// 	};
	// });


	// when email me button is clicked, it scrolls to the form 
	$(".ping span").click(function() {
		$("html,body").animate({scrollTop:$(document).height()}, 300);
		e.preventDefault();
	});

	// geofilter phone number based on client ip
	$.getJSON("http://smart-ip.net/geoip-json?callback=?", function(data){
		$("#resume li.toggleClass").each(function (index) {
			if (this.getAttribute("countrycode") == data.countryCode) {
				this.setAttribute("style", "display: list-item");
			}
		})
		if ($("#resume li.toggleClass:hidden").length == $("#resume li.toggleClass").length) {
			$("#resume li.toggleClass").removeClass("toggleClass");
		}
	});

}

$(document).ready(initialize);