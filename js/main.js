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
		$("header").css("height", height);

		SITE.intervalChangeBackground.init();
	},

	SITE.intervalChangeBackground = {
		init: function () {
			var i = 1;
		
			setInterval(function () {
				SITE.intervalChangeBackground.change(i);
				i++;

				if (i == 3) {
					i = 1;
				}
			}, 5000);
		},

		change: function (i) {
			var url = "url('img/b" + i + ".jpg')";

			$("header").animate ({
				opacity: 0
			}, 500, function () {
				$("header").css('background-image', url);

				$("header").animate ({
					opacity: 1
				}, 500, function () {
					console.log("finito");
				});
			});
		}
	},









	$(document).ready(function () {
		SITE.init();
	});
})();