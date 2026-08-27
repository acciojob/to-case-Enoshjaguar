function toCase(text) {
  // write your code here
	let lowercase = text.toLowerCase()
	let uppercase = text.toUpperCase()
	let res = lowercase+"-"+uppercase
	return res
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
