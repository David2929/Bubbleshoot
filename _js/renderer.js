var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.renderer = (function($){
	var canvas;
	var context;
	var Rendered = {
		init : function(callback){
			canvas = document.createElement("canvas");
			$(canvas).addClass("game_canvas");
			$("#game").prepend(canvas);
			$(canvas).attr("width",$(canvas).width());
			$(canvas).attr("height",$(canvas).height());
		}
	}
})