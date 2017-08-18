let DataType = require('data-type')

//isString Exercise
function isString (str){
	 return DataType.isString(str);
}
module.exports.isString = isString;


//isArray Exercise
function isArray (arr){
	return DataType.isArray(arr);
}
module.exports.isArray = isArray;

//Check for types in array
function areSameType (checkValue){
	if (DataType.isArray(checkValue) === false || checkValue.length <= 0) return false; //In this case we implemented the input checking
	let baseType = DataType.type(checkValue[0]);	//Bfore, I was checking it with .constructor. CHanged it as it was not working for booleans
	for (let i = 1; i < checkValue.length; i++){
		if (DataType.type(checkValue[i]) !== baseType)	return false;
	}
	return true
}
module.exports.areSameType = areSameType;

//Sort and remove duplicated characters
function longest (str1, str2){
	//Changed when testing
	if (DataType.isString(str1) === false ||
			DataType.isString(str2) === false)
				return false;

	let totalString = str1.concat(str2),
	 		splitString = totalString.split(""),
			resultStr = [];

	for (let i = 0; i < splitString.length; i++){
		//Check the index for every value if -1 iit was not found
		if(resultStr.indexOf(splitString[i]) == -1) resultStr.push(splitString[i]);
	}
	return resultStr.sort().join("");
}

module.exports.longest = longest;



/**
 * Convert number in an array in descendent order
 * Test:   Added parameter control and convert result to number,
 * because the output was an string
 */
function convert (number){
	if (DataType.isNumber(number) === false) return false;
	let numberSplit = number.toString().split("");
	numberSplit = numberSplit.sort().reverse();
	return numberSplit.map(function(item) {
    return parseInt(item, 10);
		});
}
module.exports.convert = convert;


/**
 * Count repetitions of one string inside an array
 * Test: Added a control for empty value or empry array
 * @param  {[array]} arrayToCheck Array to be checked
 * @return {[object]} Object with number of coincidence for every value
 */
function countRepetitions (arrayToCheck) {
	if (DataType.isArray(arrayToCheck) === false || arrayToCheck.length <= 0 ) return false;
	let result = {};
	let arrayResult = [];
	for (let i = 0; i < arrayToCheck.length; i++){
		if (!arrayResult.includes(arrayToCheck[i])){
			let counter = 0;
			for (let u = 0; u < arrayToCheck.length; u++){
				if (arrayToCheck[i] ===  arrayToCheck[u])	counter++;
			}
			result[arrayToCheck[i]] = counter;
		}
	}
		return result;
}
module.exports.countRepetitions = countRepetitions;


/**
 * We have to check the distance between C letter and m letter
 * @param  {[string]}  str [String to check the distance]
 * @return {Boolean}     True is caught, false it is not
 */
function isCaught(str){
	if (DataType.isString(str) === false) return false;
	let catPosition = str.indexOf('C'),
			mousePosition = str.indexOf('m');
	if (mousePosition > catPosition + 3) return false;
	return true;
}
module.exports.isCaught = isCaught;


/**
 * Split the bill between all people in the object
 * Test: COntrol arguments and control the amount to be paid by user is bigger than 0
 * @param  {[object]} group [description]
 * @return {[object]}       [description]
 */
function splitTheBill(group) {
	if (DataType.isPlainObject(group) === false) return false;
	let totalAmount = 0.
			numberOfUsers = 0.
			payByUser = 0.
			result = {};

	//Get the total amount
	for (let key in group) {
		totalAmount = totalAmount + group[key];
		numberOfUsers++;
	}
	//How much have to pay everyone
	payByUser = totalAmount / numberOfUsers;
	if (payByUser < 0) return false
	//Calculate the amount
	for (let key in group) {
		let toPay = payByUser - group[key];
		result[key] = toPay;
	}
	return result;
}

module.exports.splitTheBill = splitTheBill;



/**
 * Calculate the exponent of two numbers
 * @param  {[number]} base
 * @param  {[numer]} exponent
 * @return {[number]}
 */
function exp (base, exponent){
	if (DataType.isNumber(base) === false ||
			DataType.isNumber(exponent) === false)
				return false;
	return Math.pow(base, exponent);
}
module.exports.exp = exp;

/**
 * Calculate the factorial number
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
function factorial (num){
	if (DataType.isNumber(num) === false) return false;
	if (num === 0) return 1;
	return num * factorial (--num);
}
module.exports.factorial = factorial;

//Fibonacci
//In this function we create the recursivity
function fibRec (numReturns){
	if (numReturns == 0) return 0;
	if (numReturns ==1)	return 1;
	return fibRec(numReturns-1) + fibRec(numReturns-2);
}

// In this function we call the recursivity
// to show the number in every step
// and then we show an array with all numbers
function fibs (numReturns){
	if (DataType.isNumber(numReturns) === false) return false;
	let arrayResult = [];
	for (let i = 0; i < numReturns; i++) arrayResult.push(fibRec (i));
	return arrayResult;
}

module.exports.fibs = fibs;


/**
 * Which values in an array sum 0 and their position
 * @param  {[array]} nums [description]
 * @return {[array]}      [description]
 */
function zeroSum(nums) {
	if (DataType.isArray(nums) === false || nums.length <= 1 ) return false;
	let result = [];
	for (i = 0; i <= nums.length;i++){
		if (nums[i] > 0) {
			for (z = 0; z <nums.length;z++){
				if (nums[i] + nums[ z] === 0){
					let value = [i,z];
					result.push( value);
				}
			}
		}
	}
	return result;
}
module.exports.zeroSum = zeroSum;

/**
 * [isAnagram description]
 * @return {Boolean} [description]
 */
function isAnagram (str1, str2) {
	if (DataType.isString(str1) === false ||
			DataType.isString(str2) === false)
				return false;
	let word1 = str1.split("").sort().join(""),
			 word2 = str2.split("").sort().join("");
	 return (word1 === word2) ? true :false;
}
module.exports.isAnagram = isAnagram;


function boxVolume(w,h,l) {
	if (DataType.isNumber(w) === false ||
			DataType.isNumber(h) === false ||
			DataType.isNumber(l) === false)
				return false;
	let result = w*h*l/1000;
	return parseFloat(result.toFixed(4));
}
module.exports.boxVolume = boxVolume;


function intersect (rect1, rect2) {
	if (DataType.isArray(rect1) === false ||
			DataType.isArray(rect2) === false)
				return false;
	let x5 = Math.max(rect1[0][0], rect2[0][0]);
	let y5 = Math.max(rect1[0][1], rect2[0][1]);
	let x6 = Math.min(rect1[1][0], rect2[1][0]);
	let y6 = Math.min(rect1[1][1], rect2[1][1]);
	return [[x5,y5],[x6,y6]];
}
module.exports.intersect = intersect;
