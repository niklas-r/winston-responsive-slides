(function ($, window, undefined) {
	$("#showGrid").on("click", function (evt) {
		evt.preventDefault();
		$(".visual-columns-color-1").toggleClass("is-on");
	});
	$("#showNestedGrid").on("click", function (evt) {
		evt.preventDefault();
		$(".visual-columns-color-2, .visual-columns-color-3").toggleClass("is-on");
	});
	$("#showSpans").on("click", function (evt) {
		evt.preventDefault();
		$("[class*=span]").toggleClass("is-on");
	});
})(jQuery, window);