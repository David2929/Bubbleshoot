var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Sprite = (function($){
	var Sprite = function(){
		var that = this;
		var left;
		var top;
		this.position = function(){
			return {
				left : left,
				top : top,
			};
		};
		this.setPosition = function(args){
			if(arguments.length > 1){
				return;
			};
			if(args.left !== null)
				left = args.left;
			if(args.top !== null)
				top = args.top;
		};
		this.css = this.setPosition;
		return this;
	};
	Sprite.prototype.width = function(){
		return BubbleShoot.ui.BUBBLE_DIMS;
	};
	Sprite.prototype.height = function(){
		return BubbleShoot.ui.BUBBLE_DIMS;
	};
	Sprite.prototype.removeClass = function(){};
	Sprite.prototype.addClass = function(){};
	Sprite.prototype.remove = function(){};
	Sprite.prototype.kaboom = function(){
		jQuery.fn.kaboom.apply(this);
	};
	return Sprite;
})(jQuery);

{}
[]

