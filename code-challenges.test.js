// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// the function will be called "reshuffle"
describe("reshuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        // this is an input array
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // this array contains expected elements
        const expected1 = ["yellow", "blue", "pink", "green"]
        // input array
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // expected elements
        const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        // expect.arrayContaining(expected1) means the function passes the test as long as the resulting array has matching elements at any index
        expect(reshuffle(colors1)).toEqual(expect.arrayContaining(expected1))
        expect(reshuffle(colors2)).toEqual(expect.arrayContaining(expected2))
    })
})

// RED: ReferenceError: reshuffle is not defined
//      Test failed successfully

// b) Create the function that makes the test pass.

// this function takes an array...
function reshuffle(array) {
    // ... and removes the first element.
    array.shift()
    // currentIndex is a range from the last element to a random element
    let currentIndex = array.length, randomIndex;

    // this loop will iterate until it reaches the first element
    while (currentIndex != 0) {

        // randomIndex is a random element; currentIndex-- iterates backwards
        randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--;

        // this will swap the selected element with a random one
        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]]
    }
    return array
}

// GREEN: Test successful
// references: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://bost.ocks.org/mike/shuffle/

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.


// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})

// RED: ReferenceError: minMax is not defined
//      Test failed successfully

// b) Create the function that makes the test pass.

// the function minMax takes an array as an argument
function minMax(array) {
    // "result" will hold an array with the smallest and largest values found in an array
    let result = []
    // this finds the smallest number in an array and pushes it to "result"
    result.push(Math.min(...array))
    // this finds the largest number in an array and pushes it to "result"
    result.push(Math.max(...array))
    // this command publishes the result
    return result
}

// GREEN: Test successful

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDupes", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // the prompt only specifies the expected output will have no duplicate values, so I turned the expected output into a variable
        const expected3 = [3, 7, 10, 5, 4, 8, 2, 1]
        // my function will pass the test as long as the result has the same values in the array, but in no particular order
        expect(noDupes(testArray1, testArray2)).toEqual(expect.arrayContaining(expected3))
    })
})

// RED: ReferenceError: noDupes is not defined
//      Test failed successfully

// b) Create the function that makes the test pass.

// this function takes in two arrays as arguments
function noDupes(array1, array2) {
    // I concatenated two arrays using spread operators
    let combined = [...array1, ...array2]
    // uniqueNums returns an array only includes one of each unique value
    let uniqueNums = combined.filter((value, index) => {
        return combined.indexOf(value) === index
    })
    return uniqueNums
}

// GREEN: Test successful