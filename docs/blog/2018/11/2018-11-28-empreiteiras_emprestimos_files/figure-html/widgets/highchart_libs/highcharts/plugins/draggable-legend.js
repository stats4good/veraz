!function(a){var b=a.addEvent;a.wrap(a.Chart.prototype,"init",function(c){function o(a){a=d.pointer.normalize(a),i=a.chartX,j=a.chartY,k=g.x,l=g.y,m=e.group.attr("translateX"),n=e.group.attr("translateY"),h=!0}function p(b){if(h){b=d.pointer.normalize(b);var c=b.chartX-i,f=b.chartY-j;b.preventDefault(),g.x=k+c,g.y=l+f,m+c>0&&m+c+e.legendWidth<d.chartWidth&&n+f>0&&n+f+e.legendHeight<d.chartHeight&&(e.group.placed=!1,e.group.align(a.extend({width:e.legendWidth,height:e.legendHeight},g),!0,"spacingBox"),e.positionCheckboxes()),d.pointer.selectionMarker&&(d.pointer.selectionMarker=d.pointer.selectionMarker.destroy())}}function q(){h=!1}c.apply(this,Array.prototype.slice.call(arguments,1));var h,i,j,k,l,m,n,d=this,e=d.legend,f=e.title,g=e.options;g.draggable&&f&&(f.css({cursor:"move"}),b(f.element,"mousedown",o),b(d.container,"mousemove",p),b(document,"mouseup",q),b(f.element,"touchstart",o),b(d.container,"touchmove",p),b(document,"touchend",q))})}(Highcharts);