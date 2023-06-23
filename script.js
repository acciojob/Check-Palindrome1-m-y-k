// complete the given function

function palindrome(str){
	return isPalindrome(str);
}

function reverse(str) {
	let ans = "";
	for (let i = 0; i < str.length; i++) {
		ans = str.charAt(i) + ans;
	}
	return ans;
}


function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return alphanumericStr === reversedStr;
}

module.exports = palindrome
