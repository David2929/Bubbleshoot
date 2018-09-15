var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.renderer = (function($){
	var canvas;
	var context;
	var spriteSheet;
	var BUBBLE_IMAGE_DIM = 50;
	var Rendered = {
		init : function(callback){
			canvas = document.createElement("canvas");
			$(canvas).addClass("game_canvas");
			$("#game").prepend(canvas);
			$(canvas).attr("width",$(canvas).width());
			$(canvas).attr("height",$(canvas).height());
			context = canvas.getContext("2d");
			spriteSheet = new Image();
			spriteSheet.src = "_img/bubble_sprite_sheet.png";
			spriteSheet.onload = function(){
			callback();
			};
			render : function(bubbles){
				context.clearRect(0,0,canvas.width,canvas.height);
				context.translate(120,0);
				$.each(bubbles,function(){
					var bubble = this;
					var clip = {
						top : bubble.getType() * BUBBLE_IMAGE_DIM,
						left : 0
					};
					Renderer.drawSprite(bubble.getSprite(),clip);
				});
				context.translate(-120,0);
			},
			drawSprite
		}
	};
	return Renderer;
})(jQuery);
