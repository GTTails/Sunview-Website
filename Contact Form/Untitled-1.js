// input data
var x = [5, 6, 7, 6, 6, 8, 7, 5];
var y = [9, 10, 10, 11, 12, 13, 12, 8];

// calculate means
var xBar = x.reduce((a, b) => a + b, 0) / x.length;
var yBar = y.reduce((a, b) => a + b, 0) / y.length;

// calculate slope and intercept of regression line
var slope = ss.sampleCovariance(x, y) / ss.sampleVariance(x);
var intercept = yBar - (slope * xBar);

// calculate predicted values of y (y hat)
var yHat = x.map(function(xi) {
  return (slope * xi) + intercept;
});

console.log(yHat); // display predicted values of y