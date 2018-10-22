exports.sort = function (arr) {
   arr.sort();
   console.log(arr);
}

exports.average = function(arr) {
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   console.log(total / arr.length);
}
