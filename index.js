var n = 10;

for (var i = 2; i <= n; i++) {
  var tub = true;
  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      tub = false;
      break;
    }
  }
  if (tub) {
    console.log(i);
  }
}
