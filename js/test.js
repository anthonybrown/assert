var myArr = [1, 2, 3, 4, 5 ,6  ,7 ,8 , 9 , 10];
var len = myArr.length;
var i = 0;
var count = 0;

for(; i < len; i++) (function (i) {
	setTimeout(function() {
		assert( count++ === i, 'Checking the value of: ' + i );
	}, i * 300);
})(i);
