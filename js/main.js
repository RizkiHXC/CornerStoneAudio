var SITE = SITE || {};

(function () {
	SITE.init = function () {
		SITE.retrieveValues.windowValues();
	}

	SITE.retrieveValues = {
		windowValues: function () {
			var windowHeight = $(document).height();
			SITE.adjustWindows(windowHeight);
		}
	}

	SITE.adjustWindows = function (height) {
		$("header").css("height", height);
		
		setInterval(function () {
			SITE.intervalChangeBackground.init();
		}, 3000);
	}

	SITE.intervalChangeBackground = {
		var i = 1;
		var lastImage = 2;

		init: function {
			console.log(i);
		}
	}
	console.log("Banaan");









	$(document).ready(function () {
		SITE.init();
	});
})();