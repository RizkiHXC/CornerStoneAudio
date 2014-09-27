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


				if (i == 10) {
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
				console.log(this);
			});
		}
	}
	$(document).ready(function () {
		SITE.init();
	});
})();