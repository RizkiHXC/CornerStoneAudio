var SITE = SITE || {};

(function () {
	SITE.init = function () {
		SITE.retrieveValues.windowValues();
	},

	SITE.retrieveValues = {
		windowValues: function () {
			var windowHeight = $(document).height();
			SITE.adjustWindows(windowHeight);
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


				if (i == 11) {
					i = 1;
				}
			}, 5000);
		},

		change: function (i) {
			var url = "url('img/b" + i + ".jpeg')";
			$("#content-container").css('background-image', url);
			

			// $("#content-container").animate ({
			// 	opacity: 0
			// }, 500, function () {
			// 	$("#content-container").css('background-image', url);

			// 	$("#content-container").animate ({
			// 		opacity: 1
			// 	}, 1000, function () {
			// 		console.log("finito");
			// 	});
			// });
		}
	},









	$(document).ready(function () {
		SITE.init();
	});
})();