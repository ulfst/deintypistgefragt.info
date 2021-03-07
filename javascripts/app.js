/*global define */

define(['fitvids'], function () {
	'use strict';

	return {
		initFitVids: function() {
			$(document).ready(function() {
				// Target your .container, .wrapper, .post, etc.
				$(".video-y").fitVids();
			});
		}
	};

});
