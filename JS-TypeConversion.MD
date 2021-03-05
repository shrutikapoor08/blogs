## Type Conversion in JavaScript. 

*I will be sharing bite sized learnings about JavaScript regularly in this series. Follow along with me as I re-learn JavaScript. This series will cover JS fundamentals, browsers, DOM, system design, domain architecture and frameworks.* 


Think about what will output when you log the following - 


```
1. console.log( 2 * null) 
// 0 . null gets converted to 0. 

2. console.log( "4" - 1)
// 3. "4" gets converted to 4. 

3. console.log( "4" + 1)
// 41. + operator with a string, so concat

4. console.log( "5" * 2)
// 10. "5" gets converted to 5. 

5. console.log( "five" * 2)
// NaN. 

6. console.log( false == 0)
// true

```
JS will perform type coercion - convert types to match each other, for these operations. It will try to make sense of the operands, try to convert them to string or number, and when something doesn't seem intuitive to convert to number, such as `"five"`, it gives back `NaN`. 