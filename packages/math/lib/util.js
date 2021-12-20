'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.distance = distance;
exports.isNumberEqual = isNumberEqual;

/**
 * 两点之间的距离
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 结束点 x
 * @param {number} y2 结束点 y
 * @return {number} 距离
 */
function distance(x1, y1, x2, y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	return Math.sqrt(dx * dx + dy * dy);
}

function isNumberEqual(v1, v2) {
	return Math.abs(v1 - v2) < 0.001;
}
