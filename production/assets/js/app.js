(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
	// When DOM is ready
	$(function () {
		_dots2.default.init();
	});
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

$(document).ready(function () {
	$('#datepicker,#datepicker1').datetimepicker({
		i18n: {
			de: {
				months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
				dayOfWeek: ["So.", "Mo", "Di", "Mi", "Do", "Fr", "Sa."]
			}
		},
		timepicker: false,
		format: 'd.m.Y'
	});

	$(".button").click(function () {
		$(".gallery-item:hidden").slice(0, 3).addClass('show');
		if ($(".gallery-item:hidden").length == 0) {
			$(".button-container").addClass('hide');
		}
		$('html,body').animate({
			scrollTop: $(this).offset().top
		}, 1500);
	});
});

},{"./modules/dots":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var dotsEffect = function dotsEffect() {
  var createCells = function createCells() {
    var width = 10;
    var height = 10;
    var size = width * height;
    var html = '<div class="entry-cells">';

    for (var i = 0; i < size; i += 1) {
      html += '<div class="cell cell-' + i + '"></div>';
    }

    html += '</div>';

    return html;
  };

  var init = function init() {
    var $cnt = $('#home-canvas');
    var cells = createCells();
    $cnt.html(cells);
  };

  return {
    init: init
  };
};

exports.default = dotsEffect();

},{}]},{},[1]);
