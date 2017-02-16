(function($) {


  var arrayOne = ['a','c','b'];
  var arrayTwo = ['d','f','c'];
  var bothArrays = [];

  function diff(arr1, arr2) {
    function difference(arr1, arr2) {
      var first = [];
      var second = [];
      var both = [];

      for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) > -1) {
          return arr2[i]
        }
      }
    }

    var difference = difference(arrayOne, arrayTwo)
    bothArrays.push(difference)

    var indexDifOne = arrayOne.indexOf(difference);
    var indexDifTwo = arrayTwo.indexOf(difference);
    if (indexDifOne > -1) {
      arrayOne.splice(indexDifOne, 1);
    }
    if (indexDifTwo > -1) {
      arrayTwo.splice(indexDifTwo, 1);
    }

    console.log(bothArrays);
    console.log(arrayOne);
    console.log(arrayTwo);

    var resultFirst = $.extend({}, arrayOne);
    var resultSecond = $.extend({}, arrayTwo);
    var resultBoth = $.extend({}, bothArrays);

    var obj = Object.assign({}, resultFirst, resultSecond, resultBoth);
    return obj

  }


  diff(arrayOne, arrayTwo);


})(window.$);
