projects = [
	{
		title: "Infinty Gallery",
		description: "The page gathers the best 75 shots from last year, and shows where it was taken. The styled Google Map on the left updates for each photo, based on the visibility of the current photo. The geoloaction is pulled from a JSON that was generated for the photos. I also used a lazy loading library because the desired photo sizes made the page load a bit slow. Upgrade ideas include sharing individual photos via Facebook or bookmarking the position of the current photo.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [23, 193, 43],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"]
	},
	{
		title: "Friendlocator",
		description: "Marshmallow dragée chupa chups dessert bear claw. Tiramisu brownie apple pie caramels dragée pie gummi bears soufflé. Gummi bears icing fruitcake oat cake biscuit halvah.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [56, 130, 213],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"]
	},
	{
		title: "Daily Odd Compliments",
		description: "Cheesecake croissant fruitcake soufflé danish pudding powder candy tiramisu. Chocolate macaroon candy canes wafer. Dragée soufflé dessert cookie marzipan jelly gingerbread sweet toffee. Oat cake cake icing icing jelly-o apple pie jelly-o.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [112, 134, 43],
		keywords: ["IE8", "Bootstrap", "Responsive"]
	},
	{
		title: "SPAR 2014",
		description: "Marshmallow dragée chupa chups dessert bear claw. Tiramisu brownie apple pie caramels dragée pie gummi bears soufflé. Gummi bears icing fruitcake oat cake biscuit halvah.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [56, 70, 83],
		keywords: ["google maps", "IE8", "Responsive"]
	},
	{
		title: "Condo Kings",
		description: "Cupcake ipsum dolor. Sit amet jelly beans bonbon soufflé. Apple pie icing macaroon unerdwear.com cheesecake soufflé wafer.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [248, 170, 129],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"]
	},
	{
		title: "Blaah",
		description: "Gummi bears icing fruitcake oat cake biscuit halvah. Carrot cake chocolate jelly sweet roll soufflé brownie cupcake.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [72, 250, 312],
		keywords: ["Node JS", "heroku", "Bootstrap", "Responsive"]
	},
	{
		title: "BusyBees",
		description: "Cupcake cotton candy halvah danish icing sweet sesame snaps. Carrot cake dragée jelly topping lemon drops bear claw sugar plum sweet roll.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [232, 131, 82],
		keywords: ["google maps", "IE8", "Responsive"]
	},
	{
		title: "Protofolio",
		description: "Cheesecake croissant fruitcake soufflé danish pudding powder candy tiramisu. Chocolate macaroon candy canes wafer. Dragée soufflé dessert cookie marzipan jelly gingerbread sweet toffee. Oat cake cake icing icing jelly-o apple pie jelly-o.",
		url: "http://sandraszenti.github.io/friendlocator",
		code: [432, 231, 123],
		keywords: ["google maps", "IE8", "Bootstrap", "Responsive"]
	}
]

function renderProjects() {


	for (var i = 0, len = projects.length; i < len; i++) {
		var projectDiv = document.createElement("div");
		$(projectDiv).attr("id", "project"+i).addClass("project");

		var img = document.createElement("div");
		var im = i+1;
		console.log(im);
		$(img).addClass("screenshot").css("background-image", "url(image/project" + im + ".png)");
		$(img).appendTo($(projectDiv));

		var desc = document.createElement("div");
		$(desc).html("<h3>" + projects[i].title + "</h3><p>" + projects[i].description + "</p>").addClass("description");	
		$(desc).appendTo($(projectDiv));


		var summ = document.createElement("div");
		var sumtext = (
			"<button>"+
					"<a href='http://google.com' target='_blank'>See the live project on GitHub</a>"+
					"<span>Opens in a new tab</span>"+
				"</button>"+
				"<span class='codecount'>line counter</span>"+
				"<ul>"+
					"<li class='js'>" + projects[i].code[0] + "</strong></li>"+
					"<li class='css'>" + projects[i].code[1] + "</li>"+
					"<li class='html'>" + projects[i].code[2] + "</li>" +
				"</ul>"+
				"<div class='tags'>"+
					"<span>Keywords</span>"+
					"<ul>"+
						"<li>Google Maps</li>"+
						"<li>Lazy loading</li>"+
						"<li>Responsive</li>"+
						"<li>IE8+</li>"+
						"<li class='stretch'></li>"+
					"</ul>"+
				"</div>") /* JS compiles the whitespaces strangely */
		$(summ)
			.html(sumtext)
			.addClass("summary");
		$(summ).appendTo($(projectDiv));

		$(projectDiv).appendTo($("#portfolio"));
	};
}


function initialize() {
	renderProjects();	
}

$(document).ready(initialize);