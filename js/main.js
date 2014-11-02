var SITE = SITE || {};

(function () {
	SITE.preload = function () {
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"img/b1.jpeg",
				"img/b2.jpeg",
				"img/b3.jpeg",
				"img/b4.jpeg",
				"img/b5.jpeg",
				"img/b6.jpeg",
				"img/b7.jpeg",
				"img/b8.jpeg"
			)

		SITE.init();
	}, 
	SITE.init = function () {
		SITE.retrieveValues.windowValues();
		SITE.linkEventListener.init();
	},

	SITE.retrieveValues = {
		windowValues: function () {
			var windowHeight = $(document).height();
			SITE.adjustWindows(windowHeight);
		}
	},

	SITE.importantValues = {
		pageWithDataRoute: function (dataRoute) {
			var page;

			if (dataRoute === "0") {
				return $("#portfolio");
			} else if (dataRoute === "1") {
				return $("#rates");
			} else if (dataRoute === "2") {
				return $("#media");
			} else if (dataRoute === "3") {
				return $("#about");
			} else {
				return $("#contact");
			}

			return page;
		},

		allPages: function () {
			var array = [$("#portfolio"), $("#rates"), $("#media"), $("#about"), $("#contact")];

			return array;
		}
	},

	SITE.adjustWindows = function (height) {
		$("body").css("height", height);

		SITE.intervalChangeBackground.init();
	},

	SITE.intervalChangeBackground = {
		init: function () {
			var i = 1;
		
			setInterval(function () {
				var lastImage = 8;
				i++;
				SITE.intervalChangeBackground.change(i);


				if (i == lastImage) {
					i = 1;
				}
			}, 5000);
		},

		change: function (i) {
			var url = "url('img/b" + i + ".jpeg')";
			$("body").css('background-image', url);
		}
	},

	SITE.linkEventListener = {
		init: function () {
			$("nav ul li").click(function (){
				var dataRoute = $(this).attr("data-route");
				SITE.pageController.changePage(dataRoute);
			});
		}
	},

	SITE.pageController = {
		changePage: function (dataRoute) {
			var allPages = SITE.importantValues.allPages();	

			for (i = 0; i < allPages.length; i++) {
				if ($(allPages[i]).attr('data-route') == dataRoute) {
					allPages[i].removeClass("hide");
					allPages[i].addClass("show");
					console.log(i);
				} else {
					allPages[i].removeClass("show");
					allPages[i].addClass("hide");
				}
			}
		}
	},

	$(document).ready(function () {
		SITE.preload();
	});
})();