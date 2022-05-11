let thenumber = NaN;
let cheats = false;
const evennumbers = [2, 4, 6, 8, 10];
const oddnumbers = [1, 3, 5, 7, 9];
let even = true;

window.onload = function () {
	document.getElementById("buttons").addEventListener("click", randomnumberr);
};
function randomnumberr() {
	if (cheats == false) {
		thenumber = Math.floor(Math.random() * 10) + 1;
	} else if (cheats == true && even == true) {
		thenumber = evennumbers[Math.floor(Math.random() * 5)];
	} else if (cheats == true && even == false) {
		thenumber = oddnumbers[Math.floor(Math.random() * 5)];
	}

	document.getElementById("selecthis").innerHTML = thenumber;
}
document.addEventListener("keyup", function (event) {
	if (event.code === "KeyL") {
		if (cheats == true) {
			cheats = false;
			console.log("Cheats deactivated");
		} else if (cheats == false) {
			cheats = true;
			console.log("Cheats activated");
		}
	} else if (event.code === "KeyP" && cheats == true) {
		if (even == true) {
			even = false;
			console.log("Odd");
		} else if (even == false) {
			even = true;
			console.log("Even");
		}
	}
});
