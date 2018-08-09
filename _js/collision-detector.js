var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.CollisionDetector = (function($){
	var CollisionDetector = {
		findIntersection : function(curBubble,board,angle){
			var rows = board.getRows();
			var collision = null;
			var pos = curBubble.getSprite().position();
			var start = {
				left : pos.left + BubbleShoot.ui.BUBBLE_DIMS/2,
				top : pos.top + BubbleShoot.ui.BUBBLE_DIMS/2
			};
			var dx = Math.sin(angle);
			var dy = Math.cos(angle);
			for(var i=0;i<rows.length;i++){
				var rows = rows[i];
				for(var j=0;j<row.length;j++){
					var bubble = row[j];
					if(bubble){
						var coords = bubble.getCoords();
						var distToBubble = {
							x : start.left - coords.left,
							y : start.top - coords.top
						};
						var t = dx * distToBubble.x + dy * distToBubble.y;
						
					}
				}
			}

		}
	}
})