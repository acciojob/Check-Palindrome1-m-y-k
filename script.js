// complete the given function

function palindrome(str){
	let reverseStr = reverse(str);
	return reverseStr === str;
}

function reverse(str) {
	let ans = "";
	for (let i = 0; i < str.length; i++) {
		ans = str.charAt(i) + ans;
	}
	return ans;
}
module.exports = palindrome
