var SITE = SITE || {};

(function () {
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
			var spinner = document.getElementById("#spinner");
			spinner.addClass("hide");

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
		}
	},

	SITE.adjustWindows = function (height) {
		$("#content-container").css("height", height);

		SITE.intervalChangeBackground.init();
	},

	SITE.intervalChangeBackground = {
		init: function () {
			var i = 1;
		
			setInterval(function () {
				i++;
				SITE.intervalChangeBackground.change(i);


				if (i == 9) {
					i = 1;
				}
			}, 5000);
		},

		change: function (i) {
			var url = "url('img/b" + i + ".jpeg')";
			$("#content-container").css('background-image', url);
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
			var activePage = SITE.importantValues.pageWithDataRoute(dataRoute);
			var spinner = document.getElementById("#spinner");

			activePage.removeClass("hide");
			activePage.addClass("show");
			spinner.removeClass("show");
			spinner.addClass("hide");

			var nav = document.getElementsByTagName("nav");

			var nums = nav.getElementsByTagName("ul");
			var listItem = nums.getElementsByTagName("li");

			var newNums = [];

			var o = 0;

			for (var i=0; i < listItem.length; i++) {
			    if (!$(listItem).hasClass("dataRoute")) {
				    console.log(o);
				    o++;
				} 
			}
		}
	},

	$(document).ready(function () {

		SITE.init();

	});
})();