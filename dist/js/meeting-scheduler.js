(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MeetingScheduler = factory());
}(this, (function () { 'use strict';

	var MeetinScheduler=function(){return "I am just an Awesome Function"};

	return MeetinScheduler;

})));
