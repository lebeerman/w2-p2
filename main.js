/* DAN Beerman's work.
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the results can be displayed into the
HTML page. In some cases, you may want to check
within the console for verification of the array.

console.log();

=======================================================
*/


// 0. Connect the main.js document to the HTML page. DONE
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Declare a variable whose value is an empty array.DONE
//    Use any method you choose to add at least 4 items to it.

var ary1 = [0,1,2,3];
ary1.forEach(function(e) {
    console.log(e);
});
document.getElementById("q1").innerHTML = "Array of >=4 items: " + ary1;




// 2. Add an additional item to the beginning of your array.DONE
ary1.splice(0,0,4);
document.getElementById("q2").innerHTML = "Array + 1: " +  ary1;





// 3. Remove the second and third items in your array.
ary1.splice(1,2);
document.getElementById("q3").innerHTML = "Array - the 2nd and 3rd items: " + ary1;




// 4. Add two new items after the second item.
ary1.splice(1,0,5,6);
document.getElementById("q4").innerHTML = "Array with new  2nd and 3rd items: " + ary1;




// 5. Log to the console: 'The current length of the array is....' using the .length method
document.getElementById("q5").innerHTML = "The current length of the array is .... " +ary1.length;






// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things[2] = 'keyboard';
document.getElementById("q6").innerHTML = "Things: " + things;





// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

document.getElementById("q7").innerHTML = "String Things: " + things.join(", ");




// 8. Remove the first item.
document.getElementById("q8").innerHTML = "-1 Things = The " + things.shift() + " is no longer with the " + things;







// 9. Remove all items from the things array.
things.splice(0);
document.getElementById("q9").innerHTML = "Things: " + things;
console.log(things);



// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople
orderedPeople = people.sort();
document.getElementById("q10").innerHTML = "Sorted People: " + orderedPeople;







// 11. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"];
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"];
var array3 = ["White", "Black", "Spotted", "Tri-color"];

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ];
document.getElementById("q11").innerHTML = "Nested Array: " + array4.join(" ___ ");





// 12. Remove "Sparky" and "White" from the above array of arrays.
array4[1].splice(3);
array4[2].splice(0,1);
document.getElementById("q12").innerHTML = "Nested Array: " + array4.join(" ___ ");






// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.
var lastItem = new Array(campingItems.pop());
document.getElementById("q13").innerHTML = "lastItem: " + lastItem;






// 14. Add two new items to lastItem, one at the beginning and one at the end.
lastItem.push(campingItems.pop());
lastItem.unshift(campingItems.pop());
document.getElementById("q14").innerHTML = "lastItem 2: " + lastItem;





// 15. Add s'mores to the lastItem array.
lastItem.push("s'mores");
document.getElementById("q15").innerHTML = "lastItem 3: " + lastItem;




// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.
reversedItems = lastItem.reverse();
document.getElementById("q16").innerHTML = "reversedItems: " + reversedItems;




// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
let numberPets = firstArray.concat(secondArray);
document.getElementById("q17").innerHTML = "numberPets: " + numberPets;





// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// If it doesn't sort as expected, explain why.

document.getElementById("q18").innerHTML = "sortingNumbers: " + sortingNumbers.sort();

/*
The sort() method sorts the elements of an array in place and returns the array.
The sort is not necessarily stable. The default sort order is according to
string Unicode code points.
*/





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
