function divisible (number)
{
	let i;
	let divisibleNumbers = []
	for (i=1; i<=number; i++) {
		let string = i;
	
	if (i%2==0 && i%3==0 && i%5==0) {
		string = "yu" + "-" + "gi" + "-" + "oh"
		}


		else if (i%2==0 && i%3==0) {
		string = "yu" + "-" + "gi"
		}
		
		else if (i%3==0 && i%5==0) {
		string = "gi" + "-" + "oh"
		}
		else if (i%2==0 && i%5==0) {
		string = "yu" + "-" + "oh"
		}
		else if(i%2==0){
		string = "yu"
		}

		else if (i%3==0) {
		string = "gi"
		}
		else if (i%5==0) {
		string = "oh"
		}

		else{
		string = i
		}
		divisibleNumbers.push(string)
	}
		return divisibleNumbers
}
const sub = divisible(100)
console.log(sub)

 