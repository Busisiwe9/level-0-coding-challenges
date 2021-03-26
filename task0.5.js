function areaOfTriangle(num1, num2, num3) {
var perimeter = num1 + num2 + num3;
var semiperimeter = 1/2 * perimeter;
return Math.sqrt(semiperimeter * (semiperimeter -num1)
    *(semiperimeter - num2)*(semiperimeter - num3));//area of a triangle = Heron's Formula
    
}
console.log(areaOfTriangle(3,4,5));
